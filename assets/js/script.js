"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.addEventListener("click", setFocus);
    const searchbar = document.querySelector('#searchbar');
    searchbar.addEventListener('keydown', e => {
        const enterKeyCode = 13;
        const enterKey = e.keyCode === enterKeyCode;
        if (enterKey) {
            checkCommand(e);
        } else {
            return false;
        }
    });
}

function setFocus() {
    document.querySelector('#searchbar').focus();
}

function checkCommand(e) {
    e.preventDefault();
    command(e.target.value);
}

function displayCommand(array) {
    const textarea = document.querySelector("textarea");
    const $ul = document.querySelector("ul");
    $ul.innerHTML = "";
    let $html = "";

    array.forEach(element => {
        $html += `<li>${element}</li>`;
    });

    $ul.insertAdjacentHTML('beforeend', $html);
    textarea.value = "";
}

function help() {
    const array = helpArray;
    displayCommand(array);
}

function about() {
    const array = aboutMe;
    displayCommand(array);
}

function projects() {
    const array = myProjects;
    displayCommand(array);
}

function socials() {
    const array = mySocials;
    displayCommand(array);
}

function secret() {
    const array = mySecret;
    displayCommand(array);
}

function clear() {
    const textarea = document.querySelector("textarea");
    const $ul = document.querySelector("ul");
    $ul.innerHTML = "";
    textarea.value = "";
}

function command(cmd) {
    switch (cmd.toLowerCase()) {
        case 'help':
            help();
            break;
        case 'about':
            about();
            break;
        case 'projects':
            projects();
            break;
        case 'socials':
            socials();                           
            break;
        case 'clear':
            clear();
            break;
        case 'secret':
            secret();
            break;
        default:
            console.log('Command not found');
    }
}