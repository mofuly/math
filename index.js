"use strict";
function showPaper(paperNo) {
    var elPaper = document.querySelector('.paper');
    var elMenu = document.querySelector('.menu');
    var elContent = document.querySelector('.paper .content');
    var elTitle = document.querySelector('.title');
    var elBack = document.querySelector('.back');
    var htmls = [];
    var questions = papers[paperNo].questions;
    var answers = papers[paperNo].answers;
    if (papers.length <= 1)
        elBack.classList.add('hide');
    questions.forEach(function (v, i) {
        var html = "\n            <div class=\"qa\">\n                <div class=\"q\">\n                    <div class=\"key\" data-id=\"#answer-" + i + "\">\n                        " + (i + 1) + "\uD83D\uDD11\n                    </div>\n                    <div class=\"question\">\n                    </div>\n                </div>\n                <div id=\"answer-" + i + "\" class=\"answer hide\">\n                </div>\n            </div>";
        htmls.push(html);
    });
    elContent.innerHTML = htmls.join('\n');
    elTitle.innerHTML = papers[paperNo].title + '(共' + papers[paperNo].questions.length + '题)';
    var elQuestions = document.querySelectorAll('.question');
    var elAnswers = document.querySelectorAll('.answer');
    var elKeys = document.querySelectorAll('.key');
    for (var i = 0; i < elQuestions.length; i++) {
        katex.render(questions[i], elQuestions[i]);
        katex.render(answers[i], elAnswers[i]);
        elKeys[i].addEventListener('click', function (e) {
            var target = e.target;
            var id = target.dataset.id;
            var elAnswer = document.querySelector(id);
            if (elAnswer)
                elAnswer.classList.toggle('hide');
        });
    }
    elPaper.classList.remove('hide');
    elMenu.classList.add('hide');
}
function showMenu() {
    if (papers.length === 1) {
        showPaper(0);
        return;
    }
    if (papers.length < 1)
        return;
    var elMenu = document.querySelector('.menu');
    var elPaper = document.querySelector('.paper');
    var htmls = [];
    for (var i = papers.length - 1; i >= 0; i--) {
        htmls.push("<div class=\"menu-item\" data-no=\"" + i + "\">" + (papers.length - i) + "--" + papers[i].title + "</div>");
    }
    elMenu.innerHTML = htmls.join('');
    var elMenuItems = document.querySelectorAll('.menu-item');
    for (var i = 0; i < elMenuItems.length; i++) {
        elMenuItems[i].addEventListener('click', function (e) {
            var target = e.target;
            var no = target.dataset.no;
            showPaper(+no);
        });
    }
    elMenu.classList.remove('hide');
    elPaper.classList.add('hide');
}
showMenu();
