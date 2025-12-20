// input
// AOQ: ["50"],
// lesson: ["3", "4"],
// letter: ["hiragana", "katakana", "kanji"],

const testFilter = {
    AOQ: ["50"],
    lesson: ["lesson3", "lesson4"],
    letter: ["hiragana", "katakana", "kanji"],
};

// ========================================

const filterToQA = function () {
    // getVocab function
    this.allowLessVocab = false;
    this.getVocabSaved = false;
    // this.vocabOutput
    // this.vocabTotal
    //
};

filterToQA.prototype.mixArray = function (array) {
    let l = array.length;
    for (let i in array) {
        let random = Math.floor(Math.random * l);
        [array[i], array[random]] = [array[i], array[random]];
    }
};

filterToQA.prototype.getVocab = function (input) {
    if (!this.getVocabSaved) {
        var { lesson, letter } = input;
        this.getVocabAOQ = input.AOQ[0];

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
                    //     Object.assign({}, vocabData.n5[i].kanji)
                    // );

                    this.vocabOutput[j].push(...vocabData.n5[i].kanji);
                    continue;
                }
                this.vocabOutput[j].push(...vocabData.n5[i][j]);
            }
        }
        this.vocabTotal = Object.values(this.vocabOutput).reduce(
            (sum, arr) => sum + (arr?.length ?? 0),
            0
        );
    }

    // handle out of vocab
    if (!this.allowLessVocab && this.vocabTotal < this.getVocabAOQ) {
        allowLessVocabModal.open();
        return null;
    }
    const temp = Object.assign({}, this.vocabOutput);
    console.log(temp);
    // reset
    this.getVocabSaved = false;
    this.vocabOutput = null;
    this.vocabTotal = null;
    this.getVocabAOQ = null;

    return temp;
};

filterToQA.prototype.vocabToQA = function (dataBase, Q, qty) {};

filterToQA.prototype.getRandomFromArray = function (array, l) {
    let output = [];
    let arrayNew = array.slice();
    let arrayNewL = arrayNew.length;

    while (arrayNewL >= 0 && output.length < l) {
        let random = Math.floor(Math.random() * arrayNewL);
        output.push(arrayNew.splice(random, 1));
        arrayNewL--;
    }
    return output;
};

// filterToQA.prototype.vocabToQA = function (  )

// ========================================

const testFilterToQA = new filterToQA();

// testFilterToQA.getVocab(testFilter);

// console.log(document.documentElement.getAttribute(`lang`));

// {
//     question: `where is cat ?`,
//     showAnswer: `me`,
//     options: [`magne`, `magnus`, `slowie`, `me`, `lichi`],
// },

let total = 50;
let [l1, l2, l3] = [12, 11, 10];

function share() {
    let r1 = 0;
    let r2 = 0;
    let r3 = 0;
    //
    let avg = Math.ceil(total / 3);
    while (total > 0) {
        console.log(`avg`, avg);

        r1 += Math.min(l1, avg);
        l1 -= r1;
        r2 += Math.min(l2, avg);
        l2 -= r2;
        r3 += Math.min(l3, avg);
        l3 -= r3;

        total = total - r1 - r2 - r3;
        avg = Math.ceil(total / 3);
    }

    console.log(total);
    console.log(r1, r2, r3);
}

share();
