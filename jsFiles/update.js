function vocabLearnMoreRender() {
    const quizBlocks = document.querySelectorAll(`.quizzy-block`);
    const text = lh(`queryMazi`, `btn`);
    const urlPort1 = lh(`queryMazi`, `urlPort1`);
    const urlPort2 = lh(`queryMazi`, `urlPort2`);

    quizBlocks.forEach((element) => {
        const word = element.querySelector(`.quizzy-correctAnswer`).textContent;

        element.insertAdjacentHTML(
            `afterbegin`,
            `<a class="ask-mazi"  href="https://mazii.net/${urlPort1}/search/word/${urlPort2}/${word}" target="_blank"  >${text}</a>`,
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
