const Quizzy = function (selector, onSubmit, classNames = {}) {
    //
    this.container = document.querySelector(`${selector}`);
    if (!this.container) return console.error(`Quizzy : selector is invalid`);

    this.classNames = Object.assign(
        {
            quizBlock: `quizzy-block`,
            quizImg: `quizzy-img`,
            quizQuestion: `quizzy-question`,
            quizUserAnswer: `quizzy-userAnswer`,
            quizCorrectAnswer: `quizzy-correctAnswer`,
            quizAnswers: `quizzy-answers`,
            quizAnswer: `quizzy-answer`,
            quizDelete: `quizzy-delete`,
            quizSubmit: `quizzy-submit`,
        },
        classNames
    );

    this.answerOptionsNodeList = [];
    this.userAnswerNodeList = [];
    this.correctAnswerNodeList = [];
    this.deleteNodeList = [];
    this.currentBlockCheckedNodeList = [];
    // this.output = [];
    this.onSubmit = onSubmit;

    // this._render(input.initQA);
};

Quizzy.prototype._addingCHild = function (op = {}) {
    op = Object.assign(
        {
            parent: document.body,
            attribute: {},
            tagname: `div`,
            html: "",
            addClickEvent: null,
        },
        op
    );
    const temp = document.createElement(op.tagname);
    op.parent.appendChild(temp);
    for (let i in op.attribute) {
        temp.setAttribute(i, op.attribute[i]);
    }
    if (op.html) temp.innerHTML = op.html;
    if (op.addClickEvent) {
        temp.onclick = op.addClickEvent;
    }
    return temp;
};

// {
//     question: `where is cat ?`,
//     showAnswer: `me`,
//     options: [`magne`, `magnus`, `slowie`, `me`, `lichi`],
// },
Quizzy.prototype._render = function (QA, mode = `checkbox`) {
    if (!QA) return console.error(`Quizzy : QA list is invalid`);
    if (![`radio`, `checkbox`].includes(mode))
        return console.error(`Quizzy : mode is invalid`);

    this.QA = QA;

    const blockQty = QA.length;
    for (let i = 0; i < blockQty; i++) {
        this.currentBlockCheckedNodeList[i] = [];
        // this.output[i] = [];
        const quizBlock = this._addingCHild({
            parent: this.container,
            attribute: {
                class: this.classNames.quizBlock,
            },
        });

        this._addingCHild({
            parent: quizBlock,
            attribute: {
                class: this.classNames.quizQuestion,
            },
            html: QA[i].question,
        });

        const correctAnswer = this._addingCHild({
            parent: quizBlock,
            attribute: {
                class: this.classNames.quizCorrectAnswer,
            },
        });
        this.correctAnswerNodeList.push(correctAnswer);

        const userAnswer = this._addingCHild({
            parent: quizBlock,
            attribute: { class: this.classNames.quizUserAnswer },
        });
        this.userAnswerNodeList.push(userAnswer);

        const deleteBtn = this._addingCHild({
            parent: quizBlock,
            tagname: `button`,
            attribute: { "data-order": i, class: this.classNames.quizDelete },
            html: `delete`,
            addClickEvent: (e) => {
                e.preventDefault();
                const order = e.target.getAttribute(`data-order`);
                let userA = this.userAnswerNodeList[order];

                userA.innerText = userA.innerText.slice(0, -1);

                this.currentBlockCheckedNodeList[order].pop().checked = false;

                // this.userAnswerNodeList[order].innerText = ``;
                // this.answerOptionsNodeList[order]
                //     .querySelectorAll(`input`)
                //     .forEach(function (value) {
                //         value.checked = false;
                //     });
            },
        });
        this.deleteNodeList.push(deleteBtn);

        const answers = this._addingCHild({
            parent: quizBlock,
            attribute: {
                class: this.classNames.quizAnswers,
            },
            addClickEvent: (e) => {
                e.preventDefault();
                const inputTag = e.target.querySelector(`input`);
                if (e.target.tagName === `LABEL` && !inputTag.checked) {
                    inputTag.checked = true;
                    const value = inputTag.getAttribute(`value`);
                    const order = e.target.getAttribute(`data-order`);
                    // get output
                    if (mode === `checkbox`) {
                        // this.output[order].push(value);
                        this.userAnswerNodeList[order].innerText += value;
                    } else if (mode === `radio`) {
                        // this.output[order] = value;
                        this.userAnswerNodeList[order].innerText = value;
                    }
                    this.currentBlockCheckedNodeList[i].push(inputTag);
                }
            },
        });
        this.answerOptionsNodeList.push(answers);
        // add answer options
        for (let m in QA[i].options) {
            this._addingCHild({
                parent: answers,
                tagname: "label",
                attribute: {
                    "data-order": i,
                    class: this.classNames.quizAnswer,
                },
                html: `${QA[i].options[m]}
                <input
                    hidden
                    type="${mode}"
                    name="quiz-Q${i}"
                    value="${QA[i].options[m]}"
                />`,
            });
        }
    }
    this.SubmitBtn = this._addingCHild({
        parent: this.container,
        tagname: `button`,
        attribute: { class: this.classNames.quizSubmit },
        html: `Submit`,
        addClickEvent: (e) => {
            e.preventDefault();
            this._disableClick();
            this._hiddenDelete();
            this._showCorrectAnswer();
            //  add onSubmit
            this.onSubmit(this.score);
        },
    });
};

Quizzy.prototype._disableClick = function () {
    this.answerOptionsNodeList.forEach((value) => {
        value.onclick = function (e) {
            e.preventDefault();
        };
    });
};
Quizzy.prototype._hiddenDelete = function () {
    this.deleteNodeList.forEach(function (value) {
        value.hidden = true;
    });
};

Quizzy.prototype._showCorrectAnswer = function () {
    let score = 0;

    this.correctAnswerNodeList.forEach((value, index) => {
        value.innerText = this.QA[index].showAnswer;
        value.classList.add(`show`);
        if (this.userAnswerNodeList[index].innerText === value.innerText) {
            score++;
            this.userAnswerNodeList[index].classList.add(`correct`);
        } else {
            this.userAnswerNodeList[index].classList.add(`incorrect`);
        }
    });
    this.score = { total: this.QA.length, passed: score };
};

Quizzy.prototype._erase = function () {
    this.answerOptionsNodeList.forEach((value) => {
        value.onclick = null;
    });
    this.SubmitBtn.onclick = null;
    this.SubmitBtn = null;

    this.QA = [];
    this.score = null;

    this.answerOptionsNodeList = [];
    this.userAnswerNodeList = [];
    this.correctAnswerNodeList = [];
    this.deleteNodeList = [];
    this.currentBlockCheckedNodeList = [];
    // this.output = [];
    this.container.innerHTML = "";
};

// ==============================================

// const demo = new Quizzy(`#quiz`, function (e) {
//     console.log(e);
// });
