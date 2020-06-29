"use strict";
function showPaper(paperNo) {
    var elPaper = document.querySelector('.paper');
    var elMenu = document.querySelector('.menu');
    var elContent = document.querySelector('.paper .content');
    var elTitle = document.querySelector('.title');
    var elBack = document.querySelector('.back');
    var elSummary = document.querySelector('.summary');
    var htmls = [];
    var questions = papers[paperNo].questions;
    var answers = papers[paperNo].answers;
    if (papers.length <= 1)
        elBack.classList.add('hide');
    questions.forEach(function (v, i) {
        var html = "\n            <div class=\"qa\">\n                <div class=\"q\">\n                    <div class=\"key\" data-id=\"#answer-" + i + "\">\n                        " + (i + 1) + "\uD83D\uDD11\n                    </div>\n                    <div class=\"question\">\n                    </div>\n                </div>\n                <div class=\"pictures\"></div>\n                <div id=\"answer-" + i + "\" class=\"answer hide\">\n                </div>\n            </div>";
        htmls.push(html);
    });
    elContent.innerHTML = htmls.join('\n');
    elTitle.innerHTML = (paperNo + 1) + '.' + papers[paperNo].title + '(共' + papers[paperNo].questions.length + '题)';
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
    elSummary.classList.add('hide');
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
    var elSummary = document.querySelector('.summary');
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
    elSummary.classList.add('hide');
}
function showSummary() {
    var elMenu = document.querySelector('.menu');
    var elPaper = document.querySelector('.paper');
    var elSummary = document.querySelector('.summary');
    var elTitle = document.querySelector('.paper .head .title');
    var text = elTitle.innerText;
    var pos = text.indexOf('.');
    if (pos === -1)
        return;
    var elSummaryContent = document.querySelector('#summary-content');
    var index = +text.substring(0, pos - 1);
    if (!papers[index].summary)
        return;
    var htmls = [];
    for (var i = 0; i < papers[index].summary.length; i++) {
        htmls.push("<div class=\"summary-item\">" + (i + 1) + "\u3001<div id=\"summary-item-" + i + "\"></div></div>");
    }
    elSummaryContent.innerHTML = htmls.join('');
    for (var i = 0; i < papers[index].summary.length; i++) {
        var summary = papers[index].summary[i];
        var el = document.querySelector("#summary-item-" + i);
        katex.render(summary, el);
    }
    elMenu.classList.add('hide');
    elPaper.classList.add('hide');
    elSummary.classList.remove('hide');
}
function closeSummary() {
    var elMenu = document.querySelector('.menu');
    var elPaper = document.querySelector('.paper');
    var elSummary = document.querySelector('.summary');
    elMenu.classList.add('hide');
    elPaper.classList.remove('hide');
    elSummary.classList.add('hide');
}
function drawAxis(canvas, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(centerX, 0);
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(centerX, canvas.height);
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(0, centerY);
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(canvas.width, centerY);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function xCoord(canvas, x, scale, centerX) {
    if (scale === void 0) { scale = 10; }
    if (centerX === void 0) { centerX = canvas.width / 2; }
    return x * scale + centerX;
}
function yCoord(canvas, y, scale, centerY) {
    if (scale === void 0) { scale = 10; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    return centerY - y * scale;
}
function drawInverseProportionalFunction(canvas, k) {
    var ctx = canvas.getContext('2d');
    drawAxis(canvas);
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, -canvas.width / 2), yCoord(canvas, inverseProportionalFunction(k, -canvas.width / 2)));
    for (var x = -canvas.width / 2; x < 0; x++) {
        var y = inverseProportionalFunction(k, x);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x), yCoord(canvas, y));
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, 1), yCoord(canvas, inverseProportionalFunction(k, 1)));
    for (var x = 0; x < canvas.width / 2; x++) {
        var y = inverseProportionalFunction(k, x);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x), yCoord(canvas, y));
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
    function inverseProportionalFunction(k, x) {
        return k / x;
    }
}
function drawLinearFunction(canvas, a, b, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    var scale = 10;
    drawAxis(canvas);
    var x1 = xCoord(canvas, -canvas.width / 2, scale, centerX), y1 = yCoord(canvas, linearFunction(a, b, -canvas.width / 2), scale, centerY);
    var x2 = xCoord(canvas, canvas.width / 2, scale, centerX), y2 = yCoord(canvas, linearFunction(a, b, canvas.width / 2), scale, centerY);
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(x1, y1);
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(x2, y2);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
    function linearFunction(a, b, x) {
        return a * x + b;
    }
}
function drawQuadraticFunction(canvas, a, b, c, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    drawAxis(canvas, centerX, centerY);
    var scale = 2;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, -canvas.width / 2, scale, centerX), yCoord(canvas, quadracticFunction(a, b, c, -canvas.width / 2), scale, centerY));
    for (var x = -canvas.width / 2; x < canvas.width / 2; x++) {
        var y = quadracticFunction(a, b, c, x);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x, scale, centerX), yCoord(canvas, y, scale, centerY));
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
    function quadracticFunction(a, b, c, x) {
        return a * x * x + b * x + c;
    }
}
function drawPolygan(canvas, coords, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    if (coords.length < 3)
        return;
    var scale = 1;
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, coords[0].x, scale, centerX), yCoord(canvas, coords[0].y, scale, centerY));
    for (var i = 1; i < coords.length; i++) {
        var x = xCoord(canvas, coords[i].x, scale, centerX);
        var y = yCoord(canvas, coords[i].y, scale, centerY);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(x, y);
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, coords[0].x, scale, centerX), yCoord(canvas, coords[0].y, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawRect(canvas, x, y, w, h, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    var scale = 1;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.strokeRect(xCoord(canvas, x, scale, centerX), yCoord(canvas, y, scale, centerY), w, h);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawLine(canvas, x1, y1, x2, y2, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    var scale = 1;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, x1, scale, centerX), yCoord(canvas, y1, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x2, scale, centerX), yCoord(canvas, y2, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawDashLine(canvas, x1, y1, x2, y2, centerX, centerY) {
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    var scale = 1;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.setLineDash([8]);
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, x1, scale, centerX), yCoord(canvas, y1, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x2, scale, centerX), yCoord(canvas, y2, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawArc(canvas, radius, startAngle, endAngle, x, y) {
    if (startAngle === void 0) { startAngle = 0; }
    if (endAngle === void 0) { endAngle = 2 * Math.PI; }
    if (x === void 0) { x = canvas.width / 2; }
    if (y === void 0) { y = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, radius, startAngle, endAngle);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
