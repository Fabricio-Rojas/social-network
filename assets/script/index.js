'use strict';

// Declaring Elements

const userIcon = document.querySelector('.user-icon');

const postTxt = document.querySelector('#post-txt');
const postFile = document.querySelector('#post-file');
const fileName = document.querySelector('#file-name');
const postBtn = document.querySelector('#post-btn');

const grid = document.querySelector('.grid');

// Class Definition

class User { 
    #id;
    #name;
    #userName;
    #email;
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {return this.#id}
    get name() {return this.#name}
    get userName() {return this.#userName}
    get email() {return this.#email}

    getInfo() {
        
    }
};

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;
    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email)
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {return this.#pages}
    get groups() {return this.#groups}
    get canMonetize() {return this.#canMonetize}
};

// Main function

userIcon.addEventListener('click', function() {

})

postFile.addEventListener('input', function() {
    const imageFile = postFile.files;
    for (let file of imageFile) {
        fileName.innerHTML = `${file.name}`;
    }
});

postBtn.addEventListener('click', function() {

    const textVal = postTxt.value;
    const imageFile = postFile.files;

    if (textVal.length <= 0 && imageFile.length <= 0) {
        return;
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('post');
    
    addContent(newDiv);

    grid.insertBefore(newDiv, grid.firstChild);

    
});

function addContent(div) {

    const postHead = document.createElement('div');
    postHead.classList.add('post-head');

    const date = new Date();
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);

    postHead.innerHTML = `<div><img src="./assets/image/main white finished.png" alt="user-icon">Fabricio Mamani</div><p>${formattedDate}</p>`;

    div.append(postHead);

    const postBody = document.createElement('div');
    postBody.classList.add('post-body');
    postBody.innerText = postTxt.value;

    div.append(postBody);

    if (postFile.files.length > 0) {
        const file = postFile.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        
        reader.addEventListener('load', function() {
            const image = document.createElement('img');
            image.src = reader.result;
            div.append(image);
        });
    }

    postTxt.value = '';
    fileName.innerHTML = ``;
    postFile.value = '';
};