// ===========================

const allowLessVocabModal = new Popzy({
    footer: true,
    content: ` `,
    closeMethods: ["button"],
    cssClass: ["lychiModal"],
    // onClose: function (e) {
    //     console.log(e);
    // },
});

allowLessVocabModal.addFooterButton(
    "Điều chỉnh",
    "lychiModal-cancel",
    function () {
        allowLessVocabModal.close();
    }
);

allowLessVocabModal.addFooterButton("OK", "lychiModal-continue", function () {
    allowLessVocabModal.close();
    continueEvenLack = true;
    lychiFilter.funcs.onSubmit(lychiFilter._getOutput());
});

const lychiNoteModal = new Popzy({
    footer: true,
    templateId: `modalNote-template`,
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

const filterForm = [
    {
        inputType: `checkbox`,
        title: `Phạm vi bài `,
        name: `lesson`,
        value: [`lesson1`, `lesson2`, `lesson3`, `lesson4`, `lesson5`],
        valueShow: [`1`, `2`, `3`, `4`, `5`],
        required: true,
    },
    {
        inputType: `checkbox`,
        title: `Kiểu chữ`,
        name: `letter`,
        value: [`hiragana`, `katakana`, `kanji`],
        valueShow: [`hiragana `, `katakana`, `kanji`],
        required: true,
    },
    {
        inputType: `radio`,
        title: `Số lượng từ vựng`,
        name: `AOQ`,
        value: [`20`, `30`, `50`],
        valueShow: [`20`, `30`, `50`],
        required: true,
    },

    // {
    //     inputType: `radio`,
    //     title: `Ngôn ngữ`,
    //     name: `motherLang`,
    //     value: [`vn`, `en`],
    //     radioDefault: `vn`,
    //     valueShow: [`VN`, `EN`],
    //     required: true,
    // },
];

//
const lychiFilter = new Filterzy(
    `#filterzy`,
    filterForm,
    (functions = {
        onSubmit: function (output) {
            //
            console.log(output);
            if (output) {
                testFilterToQA.getVocab(output);
            }
        },
        onCancel: function () {
            console.log(`Filter Cancel`);
        },
    }),
    {
        // filterSubmitButtonHtml: `Làm bài`,
        // filterCancelButtonHtml: `Chọn lại`,
    }
);

const lychiQuiz = new Quizzy(`#quizBoard`, function (output) {
    // console.log(output);
    // lychiQuiz.SubmitBtn.hidden = true;
    // showResultsScore.innerHTML = `${output.passed} / ${output.total} `;
    // scrollToTopBtn.hidden = false;
    // showResults.hidden = false;
    // document.body.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    // });
});

// lychiNoteModal.open();
// lychiModal.open()

// =================================================
//  PAGE

const scrollToTopBtn = document.querySelector(`.scrollToHead`);
// scrollToTopBtn.hidden = true;
scrollToTopBtn.onclick = function () {
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

// lychiFilter._destroy();
// lychiFilter._render(filterForm2);
// xu ly language
