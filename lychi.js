// ========================================

const mixingArray = function (array) {
    const l = array.length;
    for (let i in array) {
        let random = Math.floor(Math.random() * l);
        [array[i], array[random]] = [array[random], array[i]];
    }
};

const getVocab = function (
    dataRange,
    type,
    amount,
    lessons = [],
    kanji = false
) {
    let count = 0;
    let l = dataRange.length;
    const checkDuplicate = {};
    const outputIndex = [];

    for (let i = 0; i < 50000; i++) {
        let random = Math.floor(Math.random() * l);
        let randomChild = dataRange[random];
        if (
            randomChild &&
            lessons.includes(randomChild.lesson) &&
            !checkDuplicate[randomChild[type]]
        ) {
            if (kanji && !randomChild.pureKanji) continue;
            outputIndex.push(random);
            count++;
            checkDuplicate[randomChild[type]] = true;
            if (count >= amount) break;
        }
    }

    return outputIndex.map(function (value) {
        return dataRange[value];
    });
};

const makingEachLetterQA = function (
    list = [],
    questionKey = ``,
    answerKey = ``,
    otherAnswerArray = []
) {
    // {
    //     question: `where is cat ?`,
    //     showAnswer: `me`,
    // },
    const output = [];
    for (let value of list) {
        let temp = {
            question: value[questionKey],
            showAnswer: value[answerKey],
            options: value[answerKey].split(``),
        };
        let otherAnLength = otherAnswerArray.length;
        while (temp.options.length <= 8) {
            let random = Math.floor(Math.random() * otherAnLength);
            temp.options.push(otherAnswerArray[random]);
        }
        mixingArray(temp.options);
        output.push(temp);
    }

    return output;
};

// ================================================================

const filterToQA = function (conditions = {}) {
    let eachAOQ = Number(conditions.AOQ) / conditions.letter.length;

    // console.log(conditions);

    if (conditions.letter.includes("hiragana")) {
        var hiraQA = makingEachLetterQA(
            getVocab(hiraganaVocab, `hira`, eachAOQ, conditions.lesson, true),
            conditions.motherLang,
            `hira`,
            HIRAGANA
        );
    }
    if (conditions.letter.includes("kanji")) {
        var kanjiQA = makingEachLetterQA(
            getVocab(hiraganaVocab, `hira`, eachAOQ, conditions.lesson, true),
            `kanji`,
            `hira`,
            HIRAGANA
        );
    }
    if (conditions.letter.includes("katakana")) {
        var kataQA = makingEachLetterQA(
            getVocab(katakanaVocab, `kata`, eachAOQ, conditions.lesson),
            conditions.motherLang,
            `kata`,
            KATAKANA
        );
    }

    output = [...(kataQA || []), ...(hiraQA || []), ...(kanjiQA || [])];
    mixingArray(output);
    return output;
};

// let conditions = {
//     AOQ: ["30"],
//     lesson: ["1", "2", "3"],
//     letter: ["hiragana", "katakana", "kanji"],
// };

// filterToQA(conditions);

// vocabQuiz._render(slwowie);
// ======================================================
//  hiraganaVocab  katakanaVocab HIRAGANA KATAKANA

// let slwowie = [
//     {
//         question: `where is cat ?`,
//         showAnswer: `me`,
//         options: [`magne`, `magnus`, `slowie`, `me`, `lichi`],
//     },

//     {
//         question: `where is dog ?`,
//         showAnswer: `magnus`,
//         options: [`slowie`, `magne`, `magnus`, `slowie`, `me`],
//     },

//     {
//         question: `where is human ?`,
//         showAnswer: `slowie`,
//         options: [`magne`, `magne`, `magnus`, `slowie`, `me`],
//     },

//     {
//         question: `where is cutie cat ?`,
//         showAnswer: `magne`,
//         options: [`magnus`, `magne`, `magnus`, `slowie`],
//     },
// ];
