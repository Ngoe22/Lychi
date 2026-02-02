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
    },
);

allowLessVocabModal.addFooterButton(
    // click allow or not
    lh(`allowLessVocabModal`, `continue`),
    "lychiModal-continue",
    (e) => {
        allowLessVocabModal.close();
        testFilterToQA.allowLessVocab = true;
        let QA = testFilterToQA.getOutput(
            filterFormGiverList[filterFormGiverList.current].dataFrom,
            lychiFilter._getOutput(),
            filterFormGiverList.current,
        );
        if (!QA) return;
        filterWraper.classList.add(`hidden`);
        quizRenderProcess({
            QA: QA,
            mode: filterFormGiverList[filterFormGiverList.current].QAmode,
        });
    },
);

function renderAllowLessQaBtn() {
    allowLessVocabModal.open();
    allowLessVocabModal.setContent(lh(`allowLessVocabModal`, `text`));
    allowLessVocabModal._footerButtons.forEach((btn) => {
        if (btn.getAttribute(`class`) === `lychiModal-cancel`) {
            btn.textContent = lh(`allowLessVocabModal`, `stay`);
        } else if (btn.getAttribute(`class`) === `lychiModal-continue`) {
            btn.textContent = lh(`allowLessVocabModal`, `continue`);
        }
    });
}

// ===========================  NOTE

const lychiNoteModal = new Popzy({
    footer: true,
    content: ` `,
    closeMethods: [],
    cssClass: ["lychiExamNote"],
    onClose: function () {
        console.log();
    },
});

lychiNoteModal.addFooterButton("OK", "lychiModal-continue", function () {
    lychiNoteModal.close();
});

function quizRenderProcess(QA) {
    lychiQuiz._render(QA, {
        submitBtnHtml: lh(`quiz`, `submitBtn`),
        deleteBtnHtml: lh(`quiz`, `delete`),
    });
    lychiFilter.container.classList.add(`hidden`);
    lychiNoteModal.open();
    lychiNoteModal.setContent(lh(`noteModal`, `html`));
    lychiNoteModal._footerButtons.forEach((btn) => {
        if (btn.getAttribute(`class`) === `lychiModal-continue`) {
            btn.textContent = lh(`noteModal`, `understand`);
        }
    });
    userSetting.classList.add(`hidden`);
}

// ====================================================
//  FILTER tabs

filterFormGiverList = {
    current: `vocab`,
    vocab: {
        func: function () {
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
                    value: [
                        `lesson1`,
                        `lesson2`,
                        `lesson3`,
                        `lesson4`,
                        `lesson5`,
                        `lesson6`,
                        `lesson7`,
                        `lesson8`,
                        `lesson9`,
                        `lesson10`,
                        `lesson11`,
                        `lesson12`,
                        `lesson13`,
                        `lesson14`,
                        `lesson15`,
                        `lesson16`,
                        `lesson17`,
                        `lesson18`,
                        `lesson19`,
                        `lesson20`,
                        `lesson21`,
                        `lesson22`,
                        `lesson23`,
                        `lesson24`,
                        `lesson25`,
                    ],
                    valueShow: [
                        `1`,
                        `2`,
                        `3`,
                        `4`,
                        `5`,
                        `6`,
                        `7`,
                        `8`,
                        `9`,
                        `10`,
                        `11`,
                        `12`,
                        `13`,
                        `14`,
                        `15`,
                        `16`,
                        `17`,
                        `18`,
                        `19`,
                        `20`,
                        `21`,
                        `22`,
                        `23`,
                        `24`,
                        `25`,
                    ],
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
        },
        dataFrom: vocabData,
        QAmode: `checkbox`,
    },
    grammar: {
        func: function () {
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
                    value: [
                        `lesson1`,
                        `lesson2`,
                        `lesson3`,
                        `lesson4`,
                        `lesson5`,
                        `lesson6`,
                        `lesson7`,
                        `lesson8`,
                        `lesson9`,
                        `lesson10`,
                        `lesson11`,
                        `lesson12`,
                        `lesson13`,
                        `lesson14`,
                        `lesson15`,
                        `lesson16`,
                        `lesson17`,
                        `lesson18`,
                        `lesson19`,
                        `lesson20`,
                        `lesson21`,
                        `lesson22`,
                        `lesson23`,
                        `lesson24`,
                        `lesson25`,
                    ],
                    valueShow: [
                        `1`,
                        `2`,
                        `3`,
                        `4`,
                        `5`,
                        `6`,
                        `7`,
                        `8`,
                        `9`,
                        `10`,
                        `11`,
                        `12`,
                        `13`,
                        `14`,
                        `15`,
                        `16`,
                        `17`,
                        `18`,
                        `19`,
                        `20`,
                        `21`,
                        `22`,
                        `23`,
                        `24`,
                        `25`,
                    ],
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
        },
        dataFrom: grammarlyData,
        QAmode: `radio`,
    },
};

// --------------------
const filterWraper = document.querySelector(`.filter--wraper`);
const filterTabs = document.querySelector(`.filter-tabs`);
filterTabList = [];
function filterTabListClearActive() {
    for (let i of filterTabList) {
        i.classList.remove(`active`);
    }
}
// render tabs
function filterTabsInit() {
    let lang = getHeaderLang();

    for (let [key, value] of Object.entries(filterFormGiverList)) {
        if (typeof value.func === `function`) {
            var active = key === filterFormGiverList.current ? `active` : ``;

            let newBtn = document.createElement(`button`);
            filterTabs.append(newBtn);
            newBtn.className = `filter-tab ${active} `;
            newBtn.setAttribute(`data-filter-tab`, `${key}`);
            newBtn.textContent = lh(`filterTabs`, key);

            filterTabList.push(newBtn);

            newBtn.onclick = (e) => {
                filterTabListClearActive();
                e.target.classList.add(`active`);
                let examType = e.target.getAttribute(`data-filter-tab`);
                filterFormGiverList.current = examType;
                reRenderFilterContent();
                // reRenderFilterContent(e);
            };
        }
    }
}
filterTabsInit();

function filterTabLangRender() {
    for (let i of filterTabList) {
        let examType = i.getAttribute(`data-filter-tab`);
        i.textContent = lh(`filterTabs`, examType);
    }
}

// ====================================================
//  FILTERZY
//
const lychiFilter = new Filterzy(
    `#filterzy`,
    filterFormGiverList[filterFormGiverList.current].func(),
    (functions = {
        onSubmit: function (filterOutput) {
            //
            if (filterOutput) {
                let QA = testFilterToQA.getOutput(
                    filterFormGiverList[filterFormGiverList.current].dataFrom,
                    filterOutput,
                    filterFormGiverList.current,
                );
                // console.log(QA);
                if (!QA) {
                    renderAllowLessQaBtn();
                    return;
                }
                filterWraper.classList.add(`hidden`);
                quizRenderProcess({
                    QA: QA,
                    mode: filterFormGiverList[filterFormGiverList.current]
                        .QAmode,
                });
            }
        },
        onCancel: function () {
            // console.log(`Filter Cancel`);
        },
    }),
    {
        filterSubmitButtonHtml: lh(`filter`, `submitBtn`),
        filterCancelButtonHtml: lh(`filter`, `cancelBtn`),
    },
);

// ====================================================
//  QUIZ

const lychiQuiz = new Quizzy(`#quizBoard`, function (output) {
    lychiQuiz.SubmitBtn.classList.add(`hidden`);
    scrollToTopBtn.classList.remove(`hidden`);
    showResults.classList.remove(`hidden`);
    showResultsRender(output);
    header.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

// =================================================
//  PAGE Scroll

const header = document.querySelector(`.header`);
const scrollToTopBtn = document.querySelector(`.scrollToHead`);
scrollToTopBtn.classList.add(`hidden`);
scrollToTopBtn.onclick = function () {
    header.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

// ==================================
// Show results

const showResults = document.querySelector(`.show-results`);
function showResultsRender(results) {
    showResults.innerHTML = `
<p class="show-results__score">  ${results.passed} / ${results.total} </p>
<p class="show-results__messages"></p>
<div class="show-results__action">
    <button class="show-results__clear">${lh(`showResults`, `replay`)}</button>
    <a class="show-results__backHomepage" href="./index.html">
        ${lh(`showResults`, `rest`)}
    </a>
</div>
`;

    const reset = showResults.querySelector(`.show-results__clear`);
    reset.onclick = (e) => {
        showResults.classList.add(`hidden`);
        scrollToTopBtn.classList.add(`hidden`);
        lychiFilter.container.classList.remove(`hidden`);
        // langEdit.classList.remove(`hidden`);
        userSetting.classList.remove(`hidden`);
        filterWraper.classList.remove(`hidden`);
        lychiQuiz._destroy();
    };
}

// // ========================= Handle language  ===========================

// Language

for (let i of langEdit.children) {
    i.onclick = (e) => {
        const langBar = e.target.closest(".langSet__item");
        const value = langBar.getAttribute(`data-langset`);
        document.documentElement.setAttribute(`lang`, value);
        reRenderFilterContent();
        filterTabLangRender();
        setLanguage(value);
    };
}

//
function reRenderFilterContent() {
    lychiFilter._destroy();
    lychiFilter._render(
        filterFormGiverList[filterFormGiverList.current].func(),
        {
            cancelBtn: lh(`filter`, `cancelBtn`),
            submitBtn: lh(`filter`, `submitBtn`),
        },
    );
}
