const filterForm = [
    {
        inputType: `checkbox`,
        title: `Pham vi tu vung `,
        name: `lesson`,
        value: [`1`, `2`, `3`],
        valueShow: [`bai 1`, `bai 2`, `bai 3`],
        required: true,
    },
    {
        inputType: `checkbox`,
        title: `Loai chu `,
        name: `letter`,
        value: [`hiragana`, `katakana`, `kanji`],
        valueShow: [`hiragana `, `katakana`, `kanji`],
        required: true,
    },
    {
        inputType: `radio`,
        title: `So luong tu vung `,
        name: `AOQ`,
        value: [`20`, `30`, `50`],
        valueShow: [`20`, `30`, `50`],
        required: true,
    },
    {
        inputType: `radio`,
        title: `Ngon ngu goc`,
        name: `motherLang`,
        value: [`vn`, `en`],
        radioDefault: `vn`,
        valueShow: [`VN`, `EN`],
        required: true,
    },
];

//
const lychiFilter = new Filterzy(
    `#filterzy`,
    filterForm,
    (functions = {
        onSubmit: function (output) {
            //
            if (output) {
                console.log(output, `Filter Submitted !!!!`);
                let QAlist = filterToQA(output);
                lychiQuiz._render(QAlist);
                // lychiFilter.submitBtn.classList.add(`submitted`);
                lychiFilter.container.classList.add(`hide`);
                // lychiFilter._toggleHidden(true);
                lychiFilter.container.hidden = true;
            } else {
                console.log(output, `Filter Fail !!!!`);
            }
        },
        onCancel: function () {
            console.log(`Filter Cancel`);
        },
    })
);

const lychiQuiz = new Quizzy(`#quiz`, function (output) {
    console.log(output);
    lychiQuiz.SubmitBtn.hidden = true;
    showResultsScore.innerHTML = `${output.passed} / ${output.total} `;
    setResultsMessages(output);
    scrollToHeadBtn.hidden = false;
    showResults.hidden = false;
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

function setResultsMessages(results) {
    let rate = results.passed / results.total;
    console.log(rate);

    if (rate === 1) {
        showResultsMessages.innerText = `vua tieng nhat , ke thong tri JLPT , lanh chua tu vung  Xứ Phù Tang `;
        return;
    }
    if (rate === 0) {
        showResultsMessages.innerText = `ban an nham a `;
    } else if (rate < 0.5) {
        showResultsMessages.innerText = `khong co viec gi kho ,  chi so long khong ben `;
    } else if (rate < 0.75) {
        showResultsMessages.innerText = `len`;
    } else {
        showResultsMessages.innerText = `tuyet voi , hay co gang duy tri  `;
    }
}

const showResults = document.querySelector(`.show-results`);
showResults.hidden = true;

const showResultsScore = document.querySelector(`.show-results__score`);
const showResultsMessages = document.querySelector(`.show-results__messages`);
const showResultsClear = showResults.querySelector(`.show-results__clear`);
showResultsClear.onclick = function () {
    lychiQuiz._erase();
    lychiFilter._reset();
    lychiFilter.container.hidden = false;
    scrollToHeadBtn.hidden = true;
    showResults.hidden = true;
};

const scrollToHeadBtn = document.querySelector(`.scrollToHead`);
scrollToHeadBtn.hidden = true;
scrollToHeadBtn.onclick = function () {
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
