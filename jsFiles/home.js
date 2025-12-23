const landingArticle = document.querySelector(`.article`);
const examLink = landingArticle.querySelector(`.examLink`);
const subText = landingArticle.querySelector(`.sub-text`);
const memorySection = landingArticle.querySelector(`.memory-section`);

//

for (let i of langEdit.children) {
    i.addEventListener(`click`, landingPageRenderByClick);
}
function landingPageRenderByClick(e) {
    userLangUpdate(e);
    landingPageRender();
}
function landingPageRender() {
    examLink.innerHTML = lh(`landing`, `nextBtn`);
    subText.innerHTML = lh(`landing`, `or`);
    memorySection.innerHTML = lh(`landing`, `articleHtml`);
}
landingPageRender();
