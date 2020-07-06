"use strict";
var canvas = document.getElementById('canvas');
// drawAxis,xCoord,yCoord,drawInverseProportionalFunction
// inverseProportionalFunction,drawLinearFunction,drawQuadraticFunction
// drawPolygan,drawRect,drawLine,drawDashLine,drawArc,drawText
// drawInverseProportionalFunction(canvas, 2)`,
// drawInverseProportionalFunction(canvas, 10, 2)`,
// drawInverseProportionalFunction(canvas, 6, 1)`,
// `line(canvas, 50, 0, 50, 160)`,
// `line(canvas, 50, 160, 299, 160)`,
// `line(canvas, 50, 160, 110, 40)`,
// `line(canvas, 110, 40, 170, 40)`,
// `line(canvas, 170, 40, 250, 160)`,
// `dashline(canvas, 110, 40, 50, 40)`,
// `dashline(canvas, 50, 70, 190, 70)`,
// `dashline(canvas, 110, 160, 110, 40)`,
// `dashline(canvas, 170, 40, 170, 160)`,
// `dashline(canvas, 190, 70, 190, 160)`,
// `text(canvas, 'y/min`, 55, 10)`,
// `text(canvas, '1200`, 20, 45)`,
// `text(canvas, '900`, 25, 75)`,
// `text(canvas, 'O`, 35, 165)`,
// `text(canvas, '15`, 105, 170)`,
// `text(canvas, '35`, 185, 170)`,
// `text(canvas, '50`, 245, 170)`,
// `text(canvas, 't/min`, 275, 170)'
// polygan(canvas, [[10, 180], [160, 180], [10, 10]]);
// axis(canvas, 60, 130, 0);
// axisName(canvas, 60, 130);
// inverse(canvas, 60, 130, 2, 1);
// linear(canvas, 60, 130, 1, -1);
// line(canvas, 60, 70, 90, 130);
// line(canvas, 60, 70, 120, 100)
// text(canvas, 'C', 50, 75);
// text(canvas, 'B', 90, 140);
// text(canvas, 'A', 125, 100);
// dashLine(canvas, 60, 100, 120, 100);
// text(canvas, 'D', 50, 105);
// axis(canvas, 100, 170, 0);
// axisName(canvas, 100, 150, 't/h', 'S/平方米');
// line(canvas, 100, 170, 160, 140);
// dashLine(canvas, 160, 170, 160, 140);
// line(canvas, 160, 140, 250, 30);
// dashLine(canvas, 250, 30, 250, 170);
// dashLine(canvas, 250, 30, 100, 30);
// dashLine(canvas, 216, 70, 100, 70);
// dashLine(canvas, 216, 70, 216, 170);
// text(canvas, '1200', 70, 75);
// text(canvas, '1650', 70, 35);
// text(canvas, '2', 156, 180)
// text(canvas, '4', 212, 180)
// text(canvas, '5', 246, 180)
// axis(canvas, 100, 100, 0);
// axisName(canvas, 100, 100);
// drawQuadraticFunction(canvas, 0.1, -3, -10, 100, 100);
// dashLine(canvas, 130, 180, 130, 0);
grid(canvas, 30, 50, 6, 6, 20, 50);
line(canvas, 30, 150, 300, 150);
line(canvas, 30, 150, 30, 10);
// axisName(canvas, 30, 150, '年份/年', '工业生产总值/亿元');
line(canvas, 30, 140, 80, 130);
line(canvas, 80, 130, 180, 90);
line(canvas, 180, 90, 230, 50);
text(canvas, '2010', 20, 160);
text(canvas, '2011', 70, 160);
text(canvas, '2012', 120, 160);
text(canvas, '2013', 170, 160);
text(canvas, '2014', 220, 160);
text(canvas, '20', 10, 135);
text(canvas, '40', 10, 115);
text(canvas, '60', 10, 95);
text(canvas, '80', 10, 75);
text(canvas, '100', 10, 55);
text(canvas, '工业生产总值/亿元', 35, 20);
text(canvas, '年份/年', 260, 160);
