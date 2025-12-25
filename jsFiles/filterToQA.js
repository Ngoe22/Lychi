// input
// AOQ: ["50"],
// lesson: ["3", "4"],
// letter: ["hiragana", "katakana", "kanji"],

const testFilter = {
    level: `n5`,
    AOQ: ["50"],
    lesson: ["lesson3", "lesson4"],
    letter: ["hiragana", "katakana", "kanji"],
};

// ========================================

const filterToQA = function () {
    // getVocab function
    this.allowLessVocab = false;
    // this.vocabOutput
    // this.totalVocab
};

filterToQA.prototype._getVocab = function (database, condition) {
    var { lesson, letter, level } = condition;

    this.vocabOutput = {
        hiragana: [],
        kanji: [],
        katakana: [],
    };

    for (let i of lesson) {
        for (let j of letter) {
            if (j === `hiragana`) {
                // focus on kanji-hiragana | delate this when not needed
                // avoid edit object
                // this.vocabOutput[j].push(
                //     Object.assign({}, database[level][i].kanji)
                // );
                this.vocabOutput[j].push(...database[level][i].kanji);
                continue;
            }
            this.vocabOutput[j].push(...database[level][i][j]);
        }
    }

    this.totalVocab = Object.values(this.vocabOutput).reduce(
        (sum, arr) => sum + (arr?.length ?? 0),
        0
    );

    // handle out of vocab
    if (!this.allowLessVocab && this.totalVocab < condition.AOQ[0]) {
        // handle language

        return null;
    }

    this.vocabOutput.totalQA = condition.AOQ[0];
    this.vocabOutput.totalVocab = this.totalVocab;
    const temp = Object.assign({}, this.vocabOutput);
    // console.log(temp);
    // reset

    this.vocabOutput = null;
    this.totalVocab = null;
    this.allowLessVocab = false;

    return temp;
    // output  :  {hiragana: Array(66), kanji: Array(66), katakana: Array(15)}
};

filterToQA.prototype._grammarlyQA = function (database, condition) {
    let output = [];
    const grammarlyQaList = [];
    const AOQ = Number(condition.AOQ[0]);

    for (let i of condition.lesson) {
        grammarlyQaList.push(...database[condition.level][i]);
    }
    let isLess = grammarlyQaList.length < AOQ;

    // check length
    if (isLess && !this.allowLessVocab) {
        return;
    }
    this.allowLessVocab = false;

    if (isLess) {
        output = grammarlyQaList;
        this._mixArray(output);
    } else {
        output = this._getRandomFromArray(grammarlyQaList, AOQ);
    }

    return output;
};

filterToQA.prototype._vocabToQA = function (array, options) {
    const output = [];
    let l = options.other.length;
    array.forEach((value, index) => {
        let otherAns = value[options.showAnswer].split(``);
        while (otherAns.length < 8) {
            let random = Math.floor(Math.random() * l);
            otherAns.push(options.other[random]);
        }
        this._mixArray(otherAns);

        output.push({
            Q: value[options.question],
            A: value[options.showAnswer],
            options: otherAns,
        });
    });

    return output;
};

filterToQA.prototype._getRandomFromArray = function (array, l) {
    let output = [];
    let arrayNew = array.slice();
    let arrayNewL = arrayNew.length;

    while (arrayNewL >= 0 && output.length < l) {
        let random = Math.floor(Math.random() * arrayNew.length);
        output.push(arrayNew.splice(random, 1)[0]);
        arrayNewL--;
    }
    return output;
};

filterToQA.prototype._waterFill = function (input, total) {
    const values = Object.values(input);
    const keys = Object.keys(input);
    const elements = [];
    let base = Math.floor(total / values.length);
    let extra = total % values.length;

    let activeCount = 0;
    let missing = 0;

    // Step 1: phân phối ban đầu
    for (let i = 0; i < values.length; i++) {
        const capacity = values[i];
        const remain = capacity - base;
        const item = {
            name: String(i),
            given: remain < 0 ? capacity : base,
            remain: Math.max(remain, 0),
            active: remain > 0,
        };
        elements.push(item);

        if (item.active) {
            activeCount++;
        } else {
            missing += -remain;
        }
    }
    if (missing === 0 && extra > 0) {
        missing = extra;
        extra = 0;
    }

    // Step 2: bù thiếu
    while (activeCount > 0 && missing > 0) {
        const share = Math.ceil(missing / activeCount);

        for (const item of elements) {
            if (!item.active) continue;

            const taken = Math.min(item.remain, share);
            item.given += taken;
            item.remain -= taken;
            missing -= taken;

            if (item.remain === 0) {
                item.active = false;
                activeCount--;
            }

            if (missing <= 0 && extra <= 0) break;
        }
        // phân phối phần dư
        if (missing <= 0 && extra > 0) {
            missing += extra;
            extra = 0;
        }
    }

    // Step 3: map lại output
    const output = {};
    elements.forEach((el, idx) => {
        output[keys[idx]] = el.given;
    });

    return output;
};

filterToQA.prototype._mixArray = function (array) {
    let l = array.length;
    for (let i in array) {
        let random = Math.floor(Math.random() * l);
        // console.log(random);

        [array[i], array[random]] = [array[random], array[i]];
    }
};

filterToQA.prototype.getOutput = function (
    database,
    condition,
    dataType = `vocab`
) {
    if (dataType === `vocab`) {
        //
        const vocab = this._getVocab(database, condition);
        let lang = document.documentElement.getAttribute(`lang`);
        // if out of vocab , get all  , no need  share handle
        if (!vocab) return;
        if (vocab.totalQA < vocab.totalVocab) {
            let amounts = {};
            for (let [key, value] of Object.entries(vocab)) {
                if (Array.isArray(value)) {
                    amounts[key] = value.length;
                }
            }
            amounts = this._waterFill(amounts, vocab.totalQA);
            var kanjiVocabList = this._getRandomFromArray(
                vocab.kanji,
                amounts.kanji
            );
            var hiraganaVocabList = this._getRandomFromArray(
                vocab.hiragana,
                amounts.hiragana
            );
            var katakanaVocabList = this._getRandomFromArray(
                vocab.katakana,
                amounts.katakana
            );
        } else {
            var kanjiVocabList = vocab.kanji;
            var hiraganaVocabList = vocab.hiragana;
            var katakanaVocabList = vocab.katakana;
        }

        var kanjiList = this._vocabToQA(kanjiVocabList, {
            question: `kanji`,
            showAnswer: `hira`,
            other: HIRAGANA,
        });
        var hiraganaList = this._vocabToQA(hiraganaVocabList, {
            question: lang,
            showAnswer: `hira`,
            other: HIRAGANA,
        });
        var katakanaList = this._vocabToQA(katakanaVocabList, {
            question: lang,
            showAnswer: `kata`,
            other: KATAKANA,
        });

        const output = [...kanjiList, ...hiraganaList, ...katakanaList];

        this._mixArray(output);

        return output;
        //
    } else if (dataType === `grammar`) {
        return this._grammarlyQA(database, condition);
    }
    //
};

// ========================================

const testFilterToQA = new filterToQA();

// testFilterToQA.shareArrayNumber(`meow`, 50);

// testFilterToQA.getOutput(vocabData, testFilter);
