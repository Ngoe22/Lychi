function vocabLearnMoreRender() {
    const quizBlocks = document.querySelectorAll(`.quizzy-block`);
    const text = lh(`queryMazi`, `btn`);
    const urlPort1 = lh(`queryMazi`, `urlPort1`);
    const urlPort2 = lh(`queryMazi`, `urlPort2`);

    quizBlocks.forEach((element) => {
        const word = element.querySelector(`.quizzy-correctAnswer`).textContent;

        // https://mazii.net/en-US/search/word/jaen/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB

        element.insertAdjacentHTML(
            `afterbegin`,
            `<a class="ask-mazi"  href="https://mazii.net/vi-VN/search/word/javi/${word}" target="_blank"  >${text}</a>`,
        );
    });
}

// quizBoard.onclick = (e) => {
//     const node = e.target;
//     if (node.classList.contains(`ask-mazi`)) {
//         openMaziForVocab()
//     }
// };

// function openMaziForVocab() {

// }
