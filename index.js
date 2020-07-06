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
        var html = "\n            <div class=\"qa\">\n                <div class=\"q\">\n                    <div class=\"key\" data-id=\"#answer-" + i + "\">\n                        " + (i + 1) + "\uD83D\uDD11\n                    </div>\n                    <div class=\"question\">\n                    </div>\n                </div>\n                <div class=\"question-pictures\" id=\"question-pictures-" + i + "\"></div>\n                <div id=\"answer-" + i + "\" class=\"answer hide\"></div>\n                <div id=\"answer-pictures-" + i + "\" class=\"answer-pictures hide\"></div>\n            </div>";
        htmls.push(html);
    });
    elContent.innerHTML = htmls.join('\n');
    elTitle.innerHTML = (paperNo + 1) + '.' + papers[paperNo].title + '(共' + papers[paperNo].questions.length + '题)';
    var elQuestions = document.querySelectorAll('.question');
    var elAnswers = document.querySelectorAll('.answer');
    var elKeys = document.querySelectorAll('.key');
    for (var i = 0; i < elQuestions.length; i++) {
        // if (questions[i].question.indexOf('\\') !== -1) {
        katex.render(questions[i].question, elQuestions[i], { strict: false });
        // } else {
        //     elQuestions[i].innerHTML = questions[i].question;
        // }
        // if (answers[i].answer.indexOf('\\') !== -1) {
        katex.render(answers[i].answer, elAnswers[i], { strict: false });
        // } else {
        //     elAnswers[i].innerHTML = answers[i].answer;
        // }
        elKeys[i].addEventListener('click', function (e) {
            var target = e.target;
            var id = target.dataset.id;
            var elAnswer = document.querySelector(id);
            var elAnswerPictures = document.querySelector('#answer-pictures' + id.replace('#answer', ''));
            if (elAnswer) {
                elAnswer.classList.toggle('hide');
                elAnswerPictures === null || elAnswerPictures === void 0 ? void 0 : elAnswerPictures.classList.toggle('hide');
            }
        });
        if (questions[i].images) {
            var images = questions[i].images;
            var id = "question-pictures-" + i;
            var elImages = document.getElementById(id);
            var htmls_1 = [];
            var len = images.length;
            for (var j = 0; j < len; j++) {
                var image = images[j];
                htmls_1.push("<div><canvas id=\"canvas-question-" + i + "-" + j + "\" width=\"300px\" height=\"180px\">\n                    </canvas><div style=\"width:300px;text-align:center;font-size:12px;\">" + image.subtitle + "</div></div>");
            }
            elImages.innerHTML = htmls_1.join('');
            for (var j = 0; j < len; j++) {
                var id_1 = "canvas-question-" + i + "-" + j;
                var el = document.getElementById(id_1);
                if (el) {
                    images[j].image.forEach(function (item) {
                        eval(item.replace(/canvas/g, 'el'));
                    });
                }
            }
        }
        if (answers[i].images) {
            var images = answers[i].images;
            var id = "answer-pictures-" + i;
            var elImages = document.getElementById(id);
            var htmls_2 = [];
            var len = images.length;
            for (var j = 0; j < len; j++) {
                var image = images[j];
                htmls_2.push("<div><canvas id=\"canvas-answer-" + i + "-" + j + "\" width=\"300px\" height=\"200px\">\n                    </canvas><div style=\"width:300px;text-align:center;font-size:12px;\">" + image.subtitle + "</div></div>");
            }
            elImages.innerHTML = htmls_2.join('');
            for (var j = 0; j < len; j++) {
                var id_2 = "canvas-answer-" + i + "-" + j;
                var el = document.getElementById(id_2);
                if (el) {
                    images[j].image.forEach(function (item) {
                        eval(item.replace('canvas', 'el'));
                    });
                }
            }
        }
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
    for (var i = 0; i < papers.length; i++) {
        htmls.push("<div class=\"menu-item\" data-no=\"" + i + "\">\u2753" + (i + 1) + "--" + papers[i].title + "(" + papers[i].questions.length + "\u9898)</div>");
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
    var index = +text.substring(0, pos) - 1;
    // console.log(text, 'pos:', pos, 'index = ', index, text.substring(0, pos))
    if (papers[index].summary.length < 1) {
        closeSummary();
        return;
    }
    var htmls = [];
    for (var i = 0; i < papers[index].summary.length; i++) {
        htmls.push("<div class=\"summary-item\">" + (i + 1) + "\u3001<div id=\"summary-item-" + i + "\"></div></div>");
    }
    elSummaryContent.innerHTML = htmls.join('');
    for (var i = 0; i < papers[index].summary.length; i++) {
        var summary = papers[index].summary[i];
        var el = document.querySelector("#summary-item-" + i);
        // if (summary.indexOf('\\') >= 0) {
        katex.render(summary, el, { strict: false });
        // } else {
        //     el.innerHTML = summary;
        //     el.style.fontSize = '1.2em';
        // }
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
function axisName(canvas, x, y, xName, yName) {
    if (xName === void 0) { xName = 'x'; }
    if (yName === void 0) { yName = 'y'; }
    var ctx = canvas.getContext('2d');
    var h = canvas.height, w = canvas.width;
    text(canvas, xName, w - 16, y + 16, 20);
    text(canvas, yName, x + 6, 8);
}
function axis(canvas, x, y, rulerScale) {
    if (rulerScale === void 0) { rulerScale = 20; }
    var ctx = canvas.getContext('2d');
    var h = canvas.height, w = canvas.width;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w - 1, y);
    ctx.lineTo(w - 8, y - 4);
    ctx.moveTo(w - 1, y);
    ctx.lineTo(w - 8, y + 4);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h - 1);
    ctx.moveTo(x, 0);
    ctx.lineTo(x - 4, 8);
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 4, 8);
    text(canvas, 'O', x + 4, y + 10);
    if (rulerScale > 0) {
        var i = 1;
        for (var xx = x + rulerScale; xx < w; xx += rulerScale) {
            ctx.moveTo(xx, y - 3);
            ctx.lineTo(xx, y + 3);
            text(canvas, i.toString(), xx - 3, y + 15);
            i++;
        }
        i = -1;
        for (var xx = x - rulerScale; xx > 0; xx -= rulerScale) {
            ctx.moveTo(xx, y - 3);
            ctx.lineTo(xx, y + 3);
            text(canvas, i.toString(), xx - 3, y + 15);
            i--;
        }
        i = 1;
        for (var yy = y - rulerScale; yy > 0; yy -= rulerScale) {
            ctx.moveTo(x - 3, yy);
            ctx.lineTo(x + 3, yy);
            text(canvas, i.toString(), x + 4, yy + 4);
            i++;
        }
        i = -1;
        for (var yy = y + rulerScale; yy < h; yy += rulerScale) {
            ctx.moveTo(x - 3, yy);
            ctx.lineTo(x + 3, yy);
            text(canvas, i.toString(), x + 4, yy + 4);
            i--;
        }
    }
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
/**
 * 画坐标轴
 * @param canvas 画布
 * @param centerX 原点x
 * @param centerY 原点y
 */
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
/**
 *
 * @param canvas
 * @param x
 * @param scale
 * @param centerX
 */
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
function inverse(canvas, originX, originY, k, partial, scale) {
    if (partial === void 0) { partial = 2; }
    if (scale === void 0) { scale = 30; }
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    var x, y;
    if (partial === 1 || partial === 2) {
        for (var i = 1; i < (w - originX); i++) {
            x = i / scale, y = k / x;
            if (i === 1) {
                ctx.moveTo(originX + x * scale, originY - y * scale);
            }
            else {
                ctx.lineTo(originX + x * scale, originY - y * scale);
            }
        }
    }
    if (partial === 0 || partial === 2) {
        for (var i = -originX; i < 1; i++) {
            x = i / scale, y = k / x;
            if (i === 1) {
                ctx.moveTo(originX + x * scale, originY - y * scale);
            }
            else {
                ctx.lineTo(originX + x * scale, originY - y * scale);
            }
        }
    }
    ctx.stroke();
}
function drawInverseProportionalFunction(canvas, k, partial) {
    if (partial === void 0) { partial = 2; }
    var ctx = canvas.getContext('2d');
    var scale = 15;
    drawAxis(canvas);
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    if (partial === 2 || partial === 0) {
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, -canvas.width / 2), yCoord(canvas, inverseProportionalFunction(k, -canvas.width / 2)));
        for (var x = -canvas.width / 2; x < 0; x += 0.1) {
            var y = inverseProportionalFunction(k, x);
            ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x, scale), yCoord(canvas, y, scale));
        }
    }
    if (partial === 2 || partial === 1) {
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, 0.1, scale), yCoord(canvas, inverseProportionalFunction(k, 0.1), scale));
        // for (let x = 0.1; x < 1; x += 0.1) {
        //     let y = inverseProportionalFunction(k, x);
        //     ctx?.lineTo(xCoord(canvas, x, scale), yCoord(canvas, y, scale));
        // }
        for (var x = 0.1; x < canvas.width / 2; x += 0.1) {
            var y = inverseProportionalFunction(k, x);
            ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x, scale), yCoord(canvas, y, scale));
        }
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
    function inverseProportionalFunction(k, x) {
        return k / x;
    }
}
function linear(canvas, originX, originY, a, b, scale) {
    if (scale === void 0) { scale = 30; }
    var w = canvas.width, h = canvas.height;
    var x1 = -originX, y1 = a * x1 + b;
    var x2 = w - originX, y2 = a * x2 + b;
    x1 = x1 * scale + originX, x2 = x2 * scale + originX;
    y1 = originY - y1 * scale, y2 = originY - y2 * scale;
    console.log(x1, y1, x2, y2);
    line(canvas, x1, y1, x2, y2);
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
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, coords[0][0], scale, centerX), yCoord(canvas, coords[0][1], scale, centerY));
    for (var i = 1; i < coords.length; i++) {
        var x = xCoord(canvas, coords[i][0], scale, centerX);
        var y = yCoord(canvas, coords[i][1], scale, centerY);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(x, y);
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, coords[0][0], scale, centerX), yCoord(canvas, coords[0][1], scale, centerY));
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
function rect(canvas, x, y, w, h) {
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.strokeRect(x, y, w, h);
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
    console.log(xCoord(canvas, x1, scale, centerX), yCoord(canvas, y1, scale, centerY));
    console.log(xCoord(canvas, x2, scale, centerX), yCoord(canvas, y2, scale, centerY));
}
function line(canvas, x1, y1, x2, y2) {
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(x1, y1);
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(x2, y2);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function dashLine(canvas, x1, y1, x2, y2) {
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.setLineDash([6]);
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(x1, y1);
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(x2, y2);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function polygan(canvas, coords) {
    if (coords.length < 3)
        return;
    var scale = 1;
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(coords[0][0], coords[0][1]);
    for (var i = 1; i < coords.length; i++) {
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(coords[i][0], coords[i][1]);
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(coords[0][0], coords[0][1]);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function text(canvas, text, x, y, fontSize) {
    if (fontSize === void 0) { fontSize = 12; }
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.font = 'arials 200 ' + fontSize + 'px';
    ctx.fillText(text, x, y);
    ctx.restore();
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
function arc(canvas, x, y, radius, startAngle, endAngle) {
    if (startAngle === void 0) { startAngle = 0; }
    if (endAngle === void 0) { endAngle = 2 * Math.PI; }
    var ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, radius, startAngle, endAngle);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawText(canvas, text, x, y, fontSize, centerX, centerY) {
    if (fontSize === void 0) { fontSize = 12; }
    if (centerX === void 0) { centerX = canvas.width / 2; }
    if (centerY === void 0) { centerY = canvas.height / 2; }
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.font = fontSize + 'px';
    x = xCoord(canvas, x, 1, centerX);
    y = yCoord(canvas, y, 1, centerY);
    ctx.fillText(text, x, y);
    ctx.restore();
}
