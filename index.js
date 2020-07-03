"use strict";
function showPaper(paperNo) {
    const elPaper = document.querySelector('.paper');
    const elMenu = document.querySelector('.menu');
    const elContent = document.querySelector('.paper .content');
    const elTitle = document.querySelector('.title');
    const elBack = document.querySelector('.back');
    const elSummary = document.querySelector('.summary');
    const htmls = [];
    const questions = papers[paperNo].questions;
    const answers = papers[paperNo].answers;
    if (papers.length <= 1)
        elBack.classList.add('hide');
    questions.forEach((v, i) => {
        const html = `
            <div class="qa">
                <div class="q">
                    <div class="key" data-id="#answer-${i}">
                        ${i + 1}🔑
                    </div>
                    <div class="question">
                    </div>
                </div>
                <div class="question-pictures" id="question-pictures-${i}"></div>
                <div id="answer-${i}" class="answer hide"></div>
                <div id="answer-pictures-${i}" class="answer-pictures hide"></div>
            </div>`;
        htmls.push(html);
    });
    elContent.innerHTML = htmls.join('\n');
    elTitle.innerHTML = (paperNo + 1) + '.' + papers[paperNo].title + '(共' + papers[paperNo].questions.length + '题)';
    const elQuestions = document.querySelectorAll('.question');
    const elAnswers = document.querySelectorAll('.answer');
    const elKeys = document.querySelectorAll('.key');
    for (let i = 0; i < elQuestions.length; i++) {
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
        elKeys[i].addEventListener('click', (e) => {
            const target = e.target;
            const id = target.dataset.id;
            const elAnswer = document.querySelector(id);
            const elAnswerPictures = document.querySelector('#answer-pictures' + id.replace('#answer', ''));
            if (elAnswer) {
                elAnswer.classList.toggle('hide');
                elAnswerPictures === null || elAnswerPictures === void 0 ? void 0 : elAnswerPictures.classList.toggle('hide');
            }
        });
        if (questions[i].images) {
            let images = questions[i].images;
            let id = `question-pictures-${i}`;
            let elImages = document.getElementById(id);
            let htmls = [];
            let len = images.length;
            for (let j = 0; j < len; j++) {
                let image = images[j];
                htmls.push(`<div><canvas id="canvas-question-${i}-${j}" width="180px" height="180px">
                    </canvas><div style="width:180px;text-align:center;font-size:12px;">${image.subtitle}</div></div>`);
            }
            elImages.innerHTML = htmls.join('');
            for (let j = 0; j < len; j++) {
                let id = `canvas-question-${i}-${j}`;
                let el = document.getElementById(id);
                if (el) {
                    images[j].image.forEach(item => {
                        eval(item.replace('canvas', 'el'));
                    });
                }
            }
        }
        if (answers[i].images) {
            let images = answers[i].images;
            let id = `answer-pictures-${i}`;
            let elImages = document.getElementById(id);
            let htmls = [];
            let len = images.length;
            for (let j = 0; j < len; j++) {
                let image = images[j];
                htmls.push(`<div><canvas id="canvas-answer-${i}-${j}" width="180px" height="200px">
                    </canvas><div style="width:180px;text-align:center;font-size:12px;">${image.subtitle}</div></div>`);
            }
            elImages.innerHTML = htmls.join('');
            for (let j = 0; j < len; j++) {
                let id = `canvas-answer-${i}-${j}`;
                let el = document.getElementById(id);
                if (el) {
                    images[j].image.forEach(item => {
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
    const elMenu = document.querySelector('.menu');
    const elPaper = document.querySelector('.paper');
    const elSummary = document.querySelector('.summary');
    const htmls = [];
    for (let i = 0; i < papers.length; i++) {
        htmls.push(`<div class="menu-item" data-no="${i}">❓${i + 1}--${papers[i].title}(${papers[i].questions.length}题)</div>`);
    }
    elMenu.innerHTML = htmls.join('');
    const elMenuItems = document.querySelectorAll('.menu-item');
    for (let i = 0; i < elMenuItems.length; i++) {
        elMenuItems[i].addEventListener('click', (e) => {
            const target = e.target;
            const no = target.dataset.no;
            showPaper(+no);
        });
    }
    elMenu.classList.remove('hide');
    elPaper.classList.add('hide');
    elSummary.classList.add('hide');
}
function showSummary() {
    const elMenu = document.querySelector('.menu');
    const elPaper = document.querySelector('.paper');
    const elSummary = document.querySelector('.summary');
    const elTitle = document.querySelector('.paper .head .title');
    const text = elTitle.innerText;
    const pos = text.indexOf('.');
    if (pos === -1)
        return;
    const elSummaryContent = document.querySelector('#summary-content');
    const index = +text.substring(0, pos) - 1;
    // console.log(text, 'pos:', pos, 'index = ', index, text.substring(0, pos))
    if (papers[index].summary.length < 1) {
        closeSummary();
        return;
    }
    const htmls = [];
    for (let i = 0; i < papers[index].summary.length; i++) {
        htmls.push(`<div class="summary-item">${i + 1}、<div id="summary-item-${i}"></div></div>`);
    }
    elSummaryContent.innerHTML = htmls.join('');
    for (let i = 0; i < papers[index].summary.length; i++) {
        const summary = papers[index].summary[i];
        const el = document.querySelector(`#summary-item-${i}`);
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
    const elMenu = document.querySelector('.menu');
    const elPaper = document.querySelector('.paper');
    const elSummary = document.querySelector('.summary');
    elMenu.classList.add('hide');
    elPaper.classList.remove('hide');
    elSummary.classList.add('hide');
}
/**
 * 画坐标轴
 * @param canvas 画布
 * @param centerX 原点x
 * @param centerY 原点y
 */
function drawAxis(canvas, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
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
function xCoord(canvas, x, scale = 10, centerX = canvas.width / 2) {
    return x * scale + centerX;
}
function yCoord(canvas, y, scale = 10, centerY = canvas.height / 2) {
    return centerY - y * scale;
}
function drawInverseProportionalFunction(canvas, k, partial = 2) {
    const ctx = canvas.getContext('2d');
    const scale = 15;
    drawAxis(canvas);
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    if (partial === 2 || partial === 0) {
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, -canvas.width / 2), yCoord(canvas, inverseProportionalFunction(k, -canvas.width / 2)));
        for (let x = -canvas.width / 2; x < 0; x += 0.1) {
            let y = inverseProportionalFunction(k, x);
            ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x, scale), yCoord(canvas, y, scale));
        }
    }
    if (partial === 2 || partial === 1) {
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, 0.1, scale), yCoord(canvas, inverseProportionalFunction(k, 0.1), scale));
        // for (let x = 0.1; x < 1; x += 0.1) {
        //     let y = inverseProportionalFunction(k, x);
        //     ctx?.lineTo(xCoord(canvas, x, scale), yCoord(canvas, y, scale));
        // }
        for (let x = 0.1; x < canvas.width / 2; x += 0.1) {
            let y = inverseProportionalFunction(k, x);
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
function drawLinearFunction(canvas, a, b, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    const scale = 10;
    drawAxis(canvas);
    const x1 = xCoord(canvas, -canvas.width / 2, scale, centerX), y1 = yCoord(canvas, linearFunction(a, b, -canvas.width / 2), scale, centerY);
    const x2 = xCoord(canvas, canvas.width / 2, scale, centerX), y2 = yCoord(canvas, linearFunction(a, b, canvas.width / 2), scale, centerY);
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
function drawQuadraticFunction(canvas, a, b, c, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    drawAxis(canvas, centerX, centerY);
    const scale = 2;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, -canvas.width / 2, scale, centerX), yCoord(canvas, quadracticFunction(a, b, c, -canvas.width / 2), scale, centerY));
    for (let x = -canvas.width / 2; x < canvas.width / 2; x++) {
        let y = quadracticFunction(a, b, c, x);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x, scale, centerX), yCoord(canvas, y, scale, centerY));
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
    function quadracticFunction(a, b, c, x) {
        return a * x * x + b * x + c;
    }
}
function drawPolygan(canvas, coords, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    if (coords.length < 3)
        return;
    const scale = 1;
    const ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, coords[0].x, scale, centerX), yCoord(canvas, coords[0].y, scale, centerY));
    for (let i = 1; i < coords.length; i++) {
        let x = xCoord(canvas, coords[i].x, scale, centerX);
        let y = yCoord(canvas, coords[i].y, scale, centerY);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(x, y);
    }
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, coords[0].x, scale, centerX), yCoord(canvas, coords[0].y, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawRect(canvas, x, y, w, h, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    const scale = 1;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.strokeRect(xCoord(canvas, x, scale, centerX), yCoord(canvas, y, scale, centerY), w, h);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawLine(canvas, x1, y1, x2, y2, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    const scale = 1;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, x1, scale, centerX), yCoord(canvas, y1, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x2, scale, centerX), yCoord(canvas, y2, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawDashLine(canvas, x1, y1, x2, y2, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    const scale = 1;
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.setLineDash([8]);
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(xCoord(canvas, x1, scale, centerX), yCoord(canvas, y1, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(xCoord(canvas, x2, scale, centerX), yCoord(canvas, y2, scale, centerY));
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawArc(canvas, radius, startAngle = 0, endAngle = 2 * Math.PI, x = canvas.width / 2, y = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, radius, startAngle, endAngle);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
function drawText(canvas, text, x, y, fontSize = 12, centerX = canvas.width / 2, centerY = canvas.height / 2) {
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.font = fontSize + 'px';
    x = xCoord(canvas, x, 1, centerX);
    y = yCoord(canvas, y, 1, centerY);
    ctx.fillText(text, x, y);
    ctx.restore();
}
