const i18n = {
    vi: {
        filter: {
            lesson: "Bài học",
            letter: "Kiểu chữ",
            AOQ: `Số lượng câu hỏi`,
            cancelBtn: `Chọn lại`,
            submitBtn: `Làm bài`,
        },

        quiz: {
            submitBtn: `Nộp bài`,
            delete: `Xóa`,
        },

        allowLessVocabModal: {
            text: `Phạm vi bài học và chữ bạn đã chọn đủ để đáp ứng số lượng câu hỏi `,
            continue: `Tiếp tục`,
            stay: `Điều chỉnh`,
        },

        noteModal: {
            html: `
                <p class="lychiExamNote__header">Hướng dẫn sử dụng !!</p>
                <p class="lychiExamNote__h1">
                    Nối các chữ cái hiragana & katakana thành từ vựng tương ứng
                </p>

                <p class="lychiExamNote__subtitle">Lưu ý</p>
                <ul class="lychiExamNote__list">
                    <li class= "lychiExamNote__item" >
                        Với từ có nhiều cách đọc chỉ cần điền cách đọc gốc
                        <span>ví dụ : phút(分) có đáp án là ふん</span>
                    </li>
                    <li class= "lychiExamNote__item" >Động từ luôn ở thể ます</li>
                </ul>
            `,
            understand: `Đã hiểu ~`,
        },

        showResults: {
            replay: `Tiếp tục học`,
            rest: `Nghỉ ngơi !`,
        },
    },
    en: {
        filter: {
            lesson: "Lesson range",
            letter: "Character type",
            AOQ: `Number of vocabulary words`,
            cancelBtn: `Reset`,
            submitBtn: `Submit`,
        },

        quiz: {
            submitBtn: `Submit`,
            delete: `Delete`,
        },

        allowLessVocabModal: {
            text: "Your current lesson and character selections are sufficient for the requested number of questions.",
            continue: "Continue",
            stay: "Adjust selection",
        },

        noteModal: {
            html: `
                <p class="lychiExamNote__header">Instructions for Use!!</p>
                <p class="lychiExamNote__h1">
                    Connect the letters hiragana & katakana to form the corresponding vocabulary words.
                </p>

                <p class="lychiExamNote__subtitle">Lưu ý</p>
                <ul class="lychiExamNote__list">
                    <li class= "lychiExamNote__item" >
                        For words with multiple readings, only enter the original/basic reading
                        <span>Example: “minute” (分) → correct answer is ふん</span>
                    </li>
                    <li class= "lychiExamNote__item" >Verbs must always be in the ます-form</li>
                </ul>
            `,
            understand: `Got it ~ `,
        },

        showResults: {
            replay: `Play again`,
            rest: `Take a rest !`,
        },
    },
};

function lh(section, key) {
    let lang = document.documentElement.getAttribute(`lang`);
    return i18n[lang][section][key];
}

function initLang() {
    const initLang = localStorage.getItem("lang");
    if (!initLang) {
        let lang = document.documentElement.getAttribute(`lang`);
        localStorage.setItem("lang", lang);
    } else {
        document.documentElement.setAttribute(`lang`, initLang);
    }
}
initLang();

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
}

// allowLessVocabModal
