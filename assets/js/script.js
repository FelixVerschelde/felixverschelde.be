"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
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

function checkCommand(e) {
    e.preventDefault();
    command(e.target.value);
}

function help() {
    const textarea = document.querySelector("textarea");
    const $ul = document.querySelector("ul");
    $ul.innerHTML = "";
    let $html = "";

    helpArray.forEach(element => {
        $html += `<li>${element}</li>`;
    });

    $ul.insertAdjacentHTML('beforeend', $html);
    textarea.value = "";
}

function about() {
    const textarea = document.querySelector("textarea");
    const $div = document.querySelector("div");
    let $html = "";

    aboutMe.forEach(element => {
        $html += `<p>${element}</p>`;
    });

    $div.insertAdjacentHTML('beforeend', $html);
    textarea.value = "";
}

function projects() {
    const textarea = document.querySelector("textarea");
    const $div = document.querySelector("div");
    let $html = "";

    myProjects.forEach(element => {
        $html += `<p>${element}</p>`;
    });

    $div.insertAdjacentHTML('beforeend', $html);
    textarea.value = "";
}

function socials() {
    const textarea = document.querySelector("textarea");
    const $div = document.querySelector("div");
    let $html = "";

    mySocials.forEach(element => {
        $html += `<p>${element}</p>`;
    });

    $div.insertAdjacentHTML('beforeend', $html);
    textarea.value = "";
}

function clear() {
    const textarea = document.querySelector("textarea");
    const $div = document.querySelector("div");
    const $ul = document.querySelector("ul");
    $ul.innerHTML = "";
    $div.innerHTML = "";
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
        default:
            console.log('Command not found');
    }
}