function showAskAi() {
    const quizBlocks = document.querySelectorAll(`.quizzy-block`);
    const text = lh(`askAi`, `btn`);
    quizBlocks.forEach((element) => {
        console.log(element);
        element.insertAdjacentHTML(
            `afterbegin`,
            `<div class="ai-ask">${text}</div>`,
        );
    });
}

const langList = {
    vi: `tiếng việt`,
    en: `tiếng anh`,
};

async function runAskAi(block) {
    const userLang = langList[getHeaderLang()];

    const question = block.querySelector(`.quizzy-question`).textContent;
    const word = block.querySelector(`.quizzy-correctAnswer`).textContent;

    console.log(word);

    // --------------
    // 1. TẠO KEY MỚI VÀ DÁN VÀO ĐÂY (Key cũ đã bị lộ, đừng dùng nữa)
    const GEMINI_API_KEY = "AIzaSyB4tTGXe0Y8s0nqmMo5wUa9qwICFS0FtQk";

    // 2. TÊN MODEL CHUẨN: "gemini-1.5-flash"
    // Nếu bước 2 bên trên bạn thấy tên khác (vd: gemini-1.5-flash-001), hãy sửa lại dòng dưới đây y hệt vậy.
    const MODEL_NAME = "gemini-2.0-flash-lite-preview-09-2025";

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

    const finalPrompt = `
    [ROLE]
    Bạn là giáo viên tiếng Nhật.
    Luôn trả lời bằng ngôn ngữ: ${userLang}.
    Chỉ trả về JSON hợp lệ theo schema yêu cầu, KHÔNG markdown, KHÔNG giải thích thêm.

    [TASK]
    Quiz:
    - Question: ${question}
    - Answer word: ${word}

    [OUTPUT SCHEMA - JSON ONLY]
    {
        "meaning": ["nghĩa 1", "nghĩa 2"],
        "kanji": "",
        "grammar": [
            {
                "pattern": "ngữ pháp (N5)",
                "example": "câu ví dụ"
            }
        ],
        "note": ""
    }
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: finalPrompt }],
                    },
                ],
                generationConfig: {
                    response_mime_type: "application/json",
                    temperature: 0.3,
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error Details:", errorText); // In lỗi chi tiết ra để xem
            throw new Error(`HTTP ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        // Kiểm tra xem có dữ liệu trả về không trước khi gọi
        if (!data.candidates || data.candidates.length === 0) {
            throw new Error("No candidates returned from Gemini");
        }

        const textResponse = data.candidates[0].content.parts[0].text;
        return JSON.parse(textResponse);
    } catch (error) {
        console.error("Gemini API error:", error);
        alert("Lỗi kết nối AI: " + error.message); // Hiển thị thông báo cho bạn dễ biết
        return null;
    }
}

// quizBoard.onclick = (e) => {
//     const node = e.target;
//     if (node.classList.contains(`ai-ask`)) {
//         runAskAi(node.closest(`.quizzy-block`));
//     }
// };
