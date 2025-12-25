const i18n = {
    vi: {
        filter: {
            lesson: "Bài học",
            letter: "Kiểu chữ",
            AOQ: `Số lượng câu hỏi`,
            cancelBtn: `Chọn lại`,
            submitBtn: `Làm bài`,
        },

        filterTabs: {
            vocab: `Từ vựng`,
            grammar: `Ngữ pháp`,
        },

        quiz: {
            submitBtn: `Nộp bài`,
            delete: `Xóa`,
        },

        allowLessVocabModal: {
            text: `Phạm vi ( bài học hoặc chữ ) bạn đã chọn đủ để đáp ứng số lượng câu hỏi `,
            continue: `Tiếp tục`,
            stay: `Điều chỉnh`,
        },

        noteModal: {
            html: `
                <p class="lychiExamNote__header">Hướng dẫn sử dụng !!</p>
                <p class="lychiExamNote__h1">
                    Nối các chữ cái hiragana & katakana thành từ vựng tương ứng
                </p>

                <p class="lychiExamNote__subtitle">Lưu ý bài tập từ vựng</p>
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

        landing: {
            nextBtn: `Làm bài tập`,
            or: `─────── hoặc tìm hiểu  ───────`,
            articleHtml: `
            
                        <h1 class="section-title">BÍ MẬT BỘ NÃO NGUYÊN THỦY</h1>

                        <div class="card">
                            <h2 class="card-header">
                                <h2 class="card-title">
                                    🗑️ Tại sao chúng ta Quên?
                                </h2>
                            </h2>
                            <p class="card-text">
                                <strong>Bản chất:</strong> Quên là cách não bộ
                                "dọn rác" để tối ưu năng lượng cho sinh tồn.
                            </p>
                            <p class="card-text">
                                <strong>Cơ chế "Lọc dữ liệu":</strong> Trong tự
                                nhiên, não bộ coi thông tin không đe dọa hoặc
                                không mang lại lợi ích là "tiếng ồn". Nó thực
                                hiện quá trình
                                <span class="highlight"
                                    >Cắt tỉa thần kinh (Synaptic Pruning)</span
                                >
                                — cắt bỏ những con đường mòn không ai đi lại.
                            </p>
                            <div class="example-box">
                                <span class="example-title"
                                    >🦴 Ví dụ thời nguyên thủy:</span
                                >
                                Một người tiền sử sẽ nhớ chính xác
                                <span class="highlight"
                                    >vị trí hang ổ của con hổ</span
                                >
                                (vì liên quan đến sống chết), nhưng sẽ quên ngay
                                hình dáng đám mây trôi qua ngày hôm qua (dữ liệu
                                rác, không giúp no bụng).
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <span class="icon">⏳</span>
                                <h2 class="card-title">
                                    Khả năng ghi nhớ trung bình
                                </h2>
                            </div>
                            <p class="card-text">
                                <strong>Quy luật:</strong> Trí nhớ có "hạn sử
                                dụng" ngắn hơn bạn nghĩ. Nếu không có tác động,
                                thông tin sẽ bốc hơi rất nhanh (Đường cong
                                Ebbinghaus):
                            </p>

                            <div class="stat-container">
                                <div class="stat-row">
                                    <span>Sau 20 phút</span>
                                    <span>Còn 58%</span>
                                </div>
                                <div class="progress-bar">
                                    <div
                                        class="progress-fill"
                                        style="width: 58%"
                                    ></div>
                                </div>

                                <div class="stat-row">
                                    <span>Sau 1 ngày</span> <span>Còn 33%</span>
                                </div>
                                <div class="progress-bar">
                                    <div
                                        class="progress-fill"
                                        style="width: 33%"
                                    ></div>
                                </div>

                                <div class="stat-row">
                                    <span>Sau 1 tháng</span>
                                    <span>Còn 21%</span>
                                </div>
                                <div class="progress-bar">
                                    <div
                                        class="progress-fill"
                                        style="width: 21%"
                                    ></div>
                                </div>
                            </div>

                            <ul class="bullet-points card-text">
                                <li>
                                    <strong>Nhớ Sâu:</strong> Khi thông tin gắn
                                    liền với
                                    <span class="highlight">Cảm xúc mạnh</span>
                                    (Sợ hãi, sung sướng).
                                </li>
                                <li>
                                    <strong>Nhớ Nông:</strong> Khi thông tin lặp
                                    lại nhàm chán, thiếu liên kết.
                                </li>
                            </ul>

                            <div class="example-box">
                                <span class="example-title"
                                    >🔥 Ví dụ thực tế:</span
                                >
                                Bạn sẽ nhớ cả đời cảm giác lần đầu tiên
                                <span class="highlight">chạm tay vào lửa</span>
                                (Đau = Nhớ sâu). Nhưng bạn sẽ quên ngay tiếng lá
                                rơi xào xạc trong rừng vì nó quá bình thường
                                (Không cảm xúc = Nhớ nông).
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <span class="icon">🛠️</span>
                                <h2 class="card-title">
                                    Cách cải thiện (Biến Nông thành Sâu)
                                </h2>
                            </div>
                            <p class="card-text">
                                <strong>Nguyên lý:</strong> "Đánh lừa" bộ não
                                rằng đây là thông tin quan trọng sống còn.
                            </p>

                            <h3 style="font-size: 1.8rem; margin: 20px 0 25px">
                                1. Liên kết & Kể chuyện (Mã hóa)
                            </h3>
                            <p class="card-text">
                                Não người không tiến hóa để nhớ mặt chữ, nó tiến
                                hóa để nhớ không gian và sự kiện. Hãy gắn kiến
                                thức mới vào những thứ cũ đã biết rõ.
                            </p>
                            <div
                                class="example-box"
                                style="margin: 20px 0 25px"
                            >
                                <span class="example-title"
                                    >🗿 Ví dụ đời sống:</span
                                >
                                Ví dụ: Khi tìm nguồn nước, thợ săn không chỉ tìm
                                "nước". Họ tìm "Màu xanh mướt" giữa vùng đất khô
                                cằn. Não bộ liên kết màu xanh với sự sống, khiến
                                bạn có thể phát hiện một lùm cây tươi tốt từ
                                khoảng cách hàng cây số.
                            </div>

                            <h3 style="font-size: 1.8rem; margin: 20px 0 25px">
                                2. Tạo áp lực truy xuất (Active Recall)
                            </h3>
                            <p class="card-text">
                                Thay vì chỉ nạp vào (đọc), hãy tập lấy ra (nhớ
                                lại). Việc bạn phải "lục lọi" trong đầu khiến bộ
                                não phải gia cố lại con đường mòn thần kinh.
                            </p>
                            <div class="example-box">
                                <span class="example-title"
                                    >🏹 Ví dụ săn bắn:</span
                                >
                                Khi đi lạc trong rừng, thay vì nhìn bản đồ ngay
                                lập tức, hãy thử tự hỏi:
                                <em
                                    >"Lúc nãy mình rẽ ở gốc cây to hay tảng
                                    đá?"</em
                                >. Việc cố gắng nhớ lại con đường đi giúp khả
                                năng định hướng của bạn sắc bén hơn nhiều so với
                                việc phụ thuộc hoàn toàn vào công cụ.
                            </div>
                        </div>
                    <div class="card-learn-more">
                        <button class="card-learn-more-btn">Xem thêm</button>
                    </div>
            
            
            `,
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

        filterTabs: {
            vocab: `Vocabulary`,
            grammar: `Grammarly`,
        },

        quiz: {
            submitBtn: `Submit`,
            delete: `Delete`,
        },

        allowLessVocabModal: {
            text: "Your current (lesson or character) selections are sufficient for the requested number of questions.",
            continue: "Continue",
            stay: "Adjust selection",
        },

        noteModal: {
            html: `
                <p class="lychiExamNote__header">Instructions for Use!!</p>
                <p class="lychiExamNote__h1">
                    Connect the letters hiragana & katakana to form the corresponding vocabulary words.
                </p>

                <p class="lychiExamNote__subtitle">Note the vocabulary exercises</p>
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

        landing: {
            nextBtn: `Let's go`,
            or: ` ─────── or learn more ───────`,
            articleHtml: `
            <h1 class="section-title">SECRETS OF THE PRIMAL BRAIN</h1>

        <div class="card">
            <div class="card-header">
                <span class="icon">🗑️</span>
                <h2 class="card-title">Why Do We Forget?</h2>
            </div>
            <p class="card-text">
                <strong>The Essence:</strong> Forgetting is the brain's "trash collection" system to optimize energy for survival.
            </p>
            <p class="card-text">
                <strong>The "Data Filter" Mechanism:</strong> In nature, the brain treats non-threatening or useless information as "noise." It performs <span class="highlight">Synaptic Pruning</span>—literally cutting off neural pathways that aren't walked upon.
            </p>
            <div class="example-box">
                <span class="example-title">🦴 Primal Example:</span>
                A caveman remembers the exact location of a <span class="highlight">tiger's den</span> (survival critical), but instantly forgets the shape of a cloud he saw yesterday (useless noise).
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <span class="icon">⏳</span>
                <h2 class="card-title">Average Memory Retention</h2>
            </div>
            <p class="card-text">
                <strong>The Rule:</strong> Memory has a shorter "expiration date" than you think. Without reinforcement, information evaporates rapidly (The Ebbinghaus Curve):
            </p>
            
            <div class="stat-container">
                <div class="stat-row"><span>After 20 mins</span> <span>58% retained</span></div>
                <div class="progress-bar"><div class="progress-fill" style="width: 58%"></div></div>
                
                <div class="stat-row"><span>After 1 day</span> <span>33% retained</span></div>
                <div class="progress-bar"><div class="progress-fill" style="width: 33%"></div></div>

                <div class="stat-row"><span>After 1 month</span> <span>21% retained</span></div>
                <div class="progress-bar"><div class="progress-fill" style="width: 21%"></div></div>
            </div>

            <ul class="bullet-points card-text">
                <li><strong>Deep Memory:</strong> Information tied to <span class="highlight">High Emotion</span> (Fear, Joy).</li>
                <li><strong>Shallow Memory:</strong> Information learned via boring repetition with no context.</li>
            </ul>

            <div class="example-box">
                <span class="example-title">🔥 Real-life Example:</span>
                You will remember the pain of <span class="highlight">touching fire</span> for a lifetime (Pain = Deep). But you will forget the sound of wind rustling leaves immediately (Neutral = Shallow).
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <span class="icon">🛠️</span>
                <h2 class="card-title">How to Improve (Deepen the Path)</h2>
            </div>
            <p class="card-text">
                <strong>The Principle:</strong> "Trick" the brain into believing this information is critical for survival.
            </p>

            <h3 style="font-size: 1.6rem; margin: 20px 0 25px; color: var(--primary-color);">1. Association & Storytelling (Encoding)</h3>
            <p class="card-text">
                The human brain didn't evolve to read text; it evolved to remember spaces and events. Anchor new knowledge to old things you already know.
            </p>
            <div class="example-box" style="margin: 20px 0 25px;">
                <span class="example-title">🗿 Real-life Example:</span>
                You meet a stranger named <strong>"Leo"</strong>. Instead of muttering his name, imagine him with a thick mane, roaring like a <span class="highlight">Lion</span>. That visual image sticks instantly, whereas the abstract sound "Leo" fades.
            </div>

            <h3 style="font-size: 1.6rem; margin: 20px 0 15px; color: var(--primary-color);">2. Active Recall (The Retrieval Struggle)</h3>
            <p class="card-text">
                Instead of just inputting (reading), force yourself to output (recall). The "struggle" to find the answer reinforces the neural pathway.
            </p>
            <div class="example-box">
                <span class="example-title">🏹 Survival Example:</span>
                When lost in the woods, instead of checking the map immediately, ask yourself: <em>"Did I turn at the big oak tree or the river?"</em> forcing your brain to remember the path makes your navigation skills far sharper than relying on a tool.
            </div>
        </div>
        <div class="card-learn-more">
            <button class="card-learn-more-btn">Learn more</button>
        </div>
        
        `,
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
    return initLang;
}
initLang();

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
}

// function setLanguageOnclick(e) {
//     const langBar = e.target.closest(".langSet__item");
//     const value = langBar.getAttribute(`data-langset`);
//     document.documentElement.setAttribute(`lang`, value);
//     setLanguage(value);
// }

// allowLessVocabModal

//=================
// theme

function initTheme() {
    const initTheme = localStorage.getItem("theme");
    if (!initTheme) {
        let theme = document.documentElement.classList.contains(`light`);
        localStorage.setItem("theme", theme);
    } else {
        document.documentElement.classList.add(initTheme);
    }
}
initTheme();

function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

function getHeaderLang() {
    return document.documentElement.getAttribute(`lang`);
}
