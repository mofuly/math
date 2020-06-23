"use strict";
var elMenu = document.querySelector('#menu');
var elPaper = document.querySelector('.paper');
function showWindow(which) {
    switch (which) {
        case elMenu:
            elMenu.classList.remove('hide');
            elPaper.classList.add('hide');
            break;
        case elPaper:
            elPaper.classList.remove('hide');
            elMenu.classList.add('hide');
    }
}
function showPaper(e) {
    var html = ['<div class="question">'];
    var path = './img/';
    console.log(typeof e);
    var paperNo = -1;
    if (typeof e === 'object') {
        paperNo = e.target.dataset.no;
    }
    else {
        paperNo = e;
    }
    var count = papers[paperNo].count;
    var elTitle = document.querySelector('#title');
    elTitle.innerHTML = '点击题目显示/隐藏答案';
    for (var i = 0; i < count; i++) {
        html.push("<img data-no=\"" + i + "\" class=\"q\" src=\"" + path + "q-" + paperNo + "-" + i + ".png\">");
        html.push("<img id=\"a-" + i + "\" class=\"a hide\" src=\"" + path + "a-" + paperNo + "-" + i + ".png\">");
    }
    html.push('</div>');
    var el = document.querySelector('#paper');
    el.innerHTML = html.join('');
    var q = document.querySelectorAll('.q');
    q.forEach(function (v) {
        v.addEventListener('click', showAnswer);
    });
    showWindow(elPaper);
}
function showAnswer(e) {
    var target = e.target;
    var no = target.dataset.no;
    var selector = "#a-" + no;
    var answer = document.querySelector(selector);
    answer === null || answer === void 0 ? void 0 : answer.classList.toggle('hide');
}
function showMenu() {
    if (papers.length === 1) {
        showPaper(0);
        return;
    }
    var html = [];
    papers.forEach(function (v, i) {
        html.push("<div class=\"menu-item\" data-no=\"" + i + "\">" + v.title + "</div>");
    });
    elMenu.innerHTML = html.join('');
    var elMenuItems = document.querySelectorAll('.menu-item');
    for (var i = 0; i < elMenuItems.length; i++) {
        elMenuItems[i].addEventListener('click', showPaper);
    }
    showWindow(elMenu);
}
var elBack = document.querySelector('#back');
if (papers.length <= 1) {
    elBack.classList.add('hide');
}
else {
    elBack.addEventListener('click', showMenu);
}
showMenu();
