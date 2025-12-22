// ===========================  Less vocab

const allowLessVocabModal = new Popzy({
    footer: true,
    content: lh(`allowLessVocabModal`, `text`),
    closeMethods: ["button"],
    cssClass: ["lychiModal"],
});

allowLessVocabModal.addFooterButton(
    lh(`allowLessVocabModal`, `stay`),
    "lychiModal-cancel",
    function () {
        allowLessVocabModal.close();
    }
);

function quizRenderProcess(QA) {
    lychiQuiz._render(QA, {
        submitBtnHtml: lh(`quiz`, `submitBtn`),
        deleteBtnHtml: lh(`quiz`, `delete`),
    });
    lychiFilter.container.classList.add(`hidden`);
    langEditBoard.classList.add(`hidden`);
    lychiNoteModal.open();
    lychiNoteModal.setContent(lh(`noteModal`, `html`));
    lychiNoteModal._footerButtons.forEach((btn) => {
        if (btn.getAttribute(`class`) === `lychiModal-continue`) {
            btn.textContent = lh(`noteModal`, `understand`);
        }
    });
}

allowLessVocabModal.addFooterButton(
    lh(`allowLessVocabModal`, `continue`),
    "lychiModal-continue",
    (e) => {
        allowLessVocabModal.close();
        testFilterToQA.allowLessVocab = true;
        let QA = testFilterToQA.getOutput(vocabData, lychiFilter._getOutput());
        if (!QA) return;
        quizRenderProcess(QA);
    }
);

// ===========================  NOTE

const lychiNoteModal = new Popzy({
    footer: true,
    content: ` `,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["lychiExamNote"],
    onClose: function () {
        console.log();
    },
});

lychiNoteModal.addFooterButton("OK", "lychiModal-continue", function () {
    lychiNoteModal.close();
});

// ====================================================
//  FILTER

filterFormGiver = function () {
    const filterForm = [
        {
            inputType: `radio`,
            title: `JLPT`,
            name: `level`,
            value: [`n5`],
            valueShow: [`N5`],
            required: true,
            radioDefault: `n5`,
        },
        {
            inputType: `checkbox`,
            title: lh(`filter`, `lesson`),
            name: `lesson`,
            value: [`lesson1`, `lesson2`, `lesson3`, `lesson4`, `lesson5`],
            valueShow: [`1`, `2`, `3`, `4`, `5`],
            required: true,
        },
        {
            inputType: `checkbox`,
            title: lh(`filter`, `letter`),
            name: `letter`,
            value: [`hiragana`, `katakana`, `kanji`],
            valueShow: [`hiragana `, `katakana`, `kanji`],
            required: true,
        },
        {
            inputType: `radio`,
            title: lh(`filter`, `AOQ`),
            name: `AOQ`,
            value: [`20`, `30`, `50`],
            valueShow: [`20`, `30`, `50`],
            required: true,
        },
    ];
    return filterForm;
};
//
const lychiFilter = new Filterzy(
    `#filterzy`,
    filterFormGiver(),
    (functions = {
        onSubmit: function (output) {
            //
            if (output) {
                let QA = testFilterToQA.getOutput(vocabData, output);

                if (!QA) {
                    allowLessVocabModal.open();

                    allowLessVocabModal.setContent(
                        lh(`allowLessVocabModal`, `text`)
                    );

                    allowLessVocabModal._footerButtons.forEach((btn) => {
                        if (btn.getAttribute(`class`) === `lychiModal-cancel`) {
                            btn.textContent = lh(`allowLessVocabModal`, `stay`);
                        } else if (
                            btn.getAttribute(`class`) === `lychiModal-continue`
                        ) {
                            btn.textContent = lh(
                                `allowLessVocabModal`,
                                `continue`
                            );
                        }
                    });
                    return;
                }
                quizRenderProcess(QA);
            }
        },
        onCancel: function () {
            console.log(`Filter Cancel`);
        },
    }),
    {
        filterSubmitButtonHtml: lh(`filter`, `submitBtn`),
        filterCancelButtonHtml: lh(`filter`, `cancelBtn`),
    }
);

// ====================================================
//  QUIZ

const lychiQuiz = new Quizzy(`#quizBoard`, function (output) {
    // console.log(output);
    lychiQuiz.SubmitBtn.classList.add(`hidden`);
    // showResultsScore.innerHTML = `${output.passed} / ${output.total} `;
    scrollToTopBtn.classList.remove(`hidden`);

    showResultsRender(output);
    showResults.classList.remove(`hidden`);
    // showResults.hidden = false;
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

// =================================================
//  PAGE

const scrollToTopBtn = document.querySelector(`.scrollToHead`);
scrollToTopBtn.classList.add(`hidden`);
scrollToTopBtn.onclick = function () {
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

// ========================= Handle language  ===========================

const langEditBoard = document.querySelector(`.lang-bar`);
const langEditVi = document.querySelector(`[data-langedit="vi"]`);
const langEditEn = document.querySelector(`[data-langedit="en"]`);

langEditVi.addEventListener(`click`, reRenderFilter);
langEditEn.addEventListener(`click`, reRenderFilter);

function reRenderFilter(e) {
    const langBar = e.target.closest(".lang-bar__item");
    const value = langBar.getAttribute(`data-langedit`);
    document.documentElement.setAttribute(`lang`, value);
    lychiFilter._destroy();
    lychiFilter._render(filterFormGiver(), {
        cancelBtn: lh(`filter`, `cancelBtn`),
        submitBtn: lh(`filter`, `submitBtn`),
    });
    setLanguage(value);
}
// console.log(allowLessVocabModal_modalFooter);

// ==================================

const showResults = document.querySelector(`.show-results`);

function showResultsRender(results) {
    showResults.innerHTML = `
<p class="show-results__score">  ${results.passed} / ${results.total} </p>
<p class="show-results__messages"></p>
<div class="show-results__action">
    <button class="show-results__clear">${lh(`showResults`, `replay`)}</button>
    <a class="show-results__backHomepage" href="">
        ${lh(`showResults`, `rest`)}
    </a>
</div>
`;

    const reset = showResults.querySelector(`.show-results__clear`);
    reset.onclick = (e) => {
        showResults.classList.add(`hidden`);
        scrollToTopBtn.classList.add(`hidden`);
        lychiFilter.container.classList.remove(`hidden`);
        langEditBoard.classList.remove(`hidden`);

        lychiQuiz._destroy();
    };
}
