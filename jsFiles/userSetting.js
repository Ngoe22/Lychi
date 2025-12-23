// Setting

const userSetting = document.querySelector(`.user-setting`);

userSetting.querySelector(`.set-language`).onclick = () => {
    langEdit.classList.toggle(`hidden`);
};

// Theme
const setThemeBtn = userSetting.querySelector(`.set-theme`);
setThemeBtn.onclick = (e) => {
    document.documentElement.classList.toggle(`dark`);
    if (document.documentElement.classList.contains(`dark`)) {
        setTheme(`dark`);
    } else {
        setTheme(`light`);
    }
};

// Language
const langSettingList = [
    { lang: `vi`, imgLink: `./assets/icon/vietnam.png` },
    { lang: `en`, imgLink: `./assets/icon/united-kingdom.png` },
];

const langEdit = document.createElement(`div`);
langEdit.className = `langSet hidden`;
for (let i of langSettingList) {
    langEdit.insertAdjacentHTML(
        "beforeend",
        `   <button class="langSet__item " data-langset="${i.lang}">
                <img src="${i.imgLink}"  alt="" />
            </button> `
    );
}
userSetting.querySelector(`.set-language`).append(langEdit);

function userLangUpdate(e) {
    const langBar = e.target.closest(".langSet__item");
    const value = langBar.getAttribute(`data-langset`);
    document.documentElement.setAttribute(`lang`, value);
    setLanguage(value);
}
