const Filterzy = function (selector, initArray, funcs = {}, classNames = {}) {
    this.container = document.querySelector(selector);
    if (!this.container) return console.error(`Filterzy : selector is invalid`);

    this.classNames = Object.assign(
        {
            filterBlock: `filterzy-block`,
            filterTitle: `filterzy-title`,
            filterLabel: `filterzy-label`,
            filterSubmitButton: `filterzy-submit-btn`,
            filterCancelButton: `filterzy-cancel-btn`,
            filterRequired: `filterzy-required`,
            filterSubmitButtonHtml: `Submit`,
            filterCancelButtonHtml: `Cancel`,
        },
        classNames
    );

    this.funcs = Object.assign(
        {
            onSubmit: function () {},
            onCancel: function () {},
        },
        funcs
    );

    this.filterBlocks = [];
    this._render(initArray);
};

Filterzy.prototype._addChild = function (input = {}) {
    options = Object.assign(
        {
            parentNode: document.body,
            htmlTag: `div`,
            setAttribute: { class: `` },
            html: ``,
            addClickEvent: null,
        },
        input
    );

    const newNode = document.createElement(options.htmlTag);
    options.parentNode.appendChild(newNode);
    for (const key in options.setAttribute) {
        newNode.setAttribute(key, options.setAttribute[key]);
    }
    if (options.html) newNode.innerHTML = options.html;
    if (options.addClickEvent) newNode.onclick = options.addClickEvent;

    return newNode;
};

Filterzy.prototype._render = function (initArray) {
    initArray.forEach((data) => {
        // block
        const block = this._addChild({
            parentNode: this.container,
            htmlTag: `section`,
            setAttribute: {
                class: this.classNames.filterBlock,
                "data-required": data.required,
            },
        });
        this.filterBlocks.push(block);

        // title
        this._addChild({
            parentNode: block,
            htmlTag: `p`,
            setAttribute: { class: this.classNames.filterTitle },
            html: `${data.title}`,
        });

        data.value.forEach((innerValue, index) => {
            let temp = this._addChild({
                parentNode: block,
                htmlTag: `label`,
                setAttribute: { class: this.classNames.filterLabel },
                html: `<input hidden  type="${data.inputType}" name="${data.name}" value="${innerValue}" /> ${data.valueShow[index]}`,
            });

            if (data.radioDefault === innerValue) {
                // temp.querySelector(`input`).checked = true;
                let meow = temp.querySelector(`input`);
                meow.checked = true;
                meow.setAttribute(`data-checked-default`, `true`);
            }
        });
    });

    this.cancelBtn = this._addChild({
        parentNode: this.container,
        htmlTag: `button`,
        setAttribute: { class: this.classNames.filterCancelButton },
        html: this.classNames.filterCancelButtonHtml,
        addClickEvent: (e) => {
            e.preventDefault();
            this._reset();
            this.funcs.onCancel();
        },
    });

    this.submitBtn = this._addChild({
        parentNode: this.container,
        htmlTag: `button`,
        setAttribute: { class: this.classNames.filterSubmitButton },
        html: this.classNames.filterSubmitButtonHtml,
        addClickEvent: (e) => {
            e.preventDefault();
            this.funcs.onSubmit(this._getOutput());
        },
    });
};

Filterzy.prototype._getOutput = function () {
    const output = {};
    let checkRequired = true;
    this.filterBlocks.forEach((block) => {
        let inputName = null;
        let inputValues = [];

        block.querySelectorAll(`input:checked`).forEach((currentNode) => {
            inputName = currentNode.getAttribute(`name`);
            inputValues.push(currentNode.getAttribute(`value`));
        });

        if (block.getAttribute(`data-required`) === `true`) {
            block.classList.toggle(
                this.classNames.filterRequired,
                Boolean(!inputName)
            );
        }
        if (inputName) {
            output[inputName] = inputValues;
        } else {
            checkRequired = false;
        }
    });
    this.submitBtn.classList.toggle(
        this.classNames.filterRequired,
        !checkRequired
    );

    return checkRequired ? output : null;
};

Filterzy.prototype._reset = function () {
    this.filterBlocks.forEach((block) => {
        block.querySelectorAll(`input:checked`).forEach((currentNode) => {
            currentNode.checked = false;
        });
    });

    this.container
        .querySelectorAll(`[data-checked-default="true"]`)
        .forEach((value) => (value.checked = true));
};

Filterzy.prototype._destroy = function () {
    // this.classNames = null; // keep
    // this.funcs = null; keep
    this.filterBlocks = [];
    this.cancelBtn.onclick = null;
    this.cancelBtn = null;
    this.submitBtn.onclick = null;
    this.submitBtn = null;
    this.container.innerHTML = "";
};

// ==========================

// {
//     inputType: `radio`,
//     title: `So luong tu vung `,
//     name: `AOQ`,
//     value: [`20`, `30`, `50`],
//     valueShow: [`20`, `30`, `50`],
//     required: true,
// },

// {lesson: Array(2),  letter: Array(3), AOQ: Array(1)}
// AOQ : ['30']
// lesson : ['1', '2']
// letter : ['hiragana', 'katakana'] ['kanji']

// const demoFilter = new Filterzy(
//     `#QA-options`,
//     magne,
//     (functions = {
//         onSubmit: function (output) {
//             console.log(output, `Submitted !!!!`);
//         },
//         onCancel: function () {
//             console.log(`Cancel`);
//         },
//     })
// );
