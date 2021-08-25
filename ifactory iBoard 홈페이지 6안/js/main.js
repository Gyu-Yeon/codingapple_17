let radius = 75
let thickness = 20
let innerRadius = radius - thickness
let x = 75
let y = 75
var canvas = document.getElementById('tutorial')
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#cbcbcb";

ctx.beginPath();
ctx.arc(x, y, radius, Math.PI * 1.5, Math.PI)
ctx.quadraticCurveTo((x - innerRadius) - thickness / 2, y - thickness, x - innerRadius, y)
ctx.arc(x, y, innerRadius, Math.PI, Math.PI * 1.5, true)
ctx.quadraticCurveTo(y - thickness, (x - innerRadius) - thickness / 2, x, y - innerRadius - thickness)
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#e69b42";
ctx.arc(x, y, radius, Math.PI * 1.5, Math.PI * 2)
ctx.quadraticCurveTo((x + innerRadius) + thickness / 2, y + thickness, x + innerRadius, y)
ctx.arc(x, y, innerRadius, Math.PI * 2, Math.PI * 1.5, true)
ctx.quadraticCurveTo(y - thickness, (x - innerRadius) - thickness / 2, x, y - innerRadius - thickness)
ctx.fill();




let radius_2 = 75
let thickness_2 = 20
let innerRadius_2 = radius_2 - thickness_2
let x_2 = 75
let y_2 = 75
var canvas_2 = document.getElementById('tutorial_2')
var ctx_2 = canvas_2.getContext('2d');
ctx_2.fillStyle = "#cbcbcb";

ctx_2.beginPath();
ctx_2.arc(x, y, radius_2, Math.PI * 1.5, Math.PI)
ctx_2.quadraticCurveTo((x_2 - innerRadius_2) - thickness_2 / 2, y_2 - thickness_2, x_2 - innerRadius_2, y_2)
ctx_2.arc(x_2, y_2, innerRadius_2, Math.PI, Math.PI * 1.5, true)
ctx_2.quadraticCurveTo(y_2 - thickness_2, (x_2 - innerRadius_2) - thickness_2 / 2, x_2, y_2 - innerRadius_2 - thickness_2)
ctx_2.fill();

ctx_2.beginPath();
ctx_2.fillStyle = "#e69b42";
ctx_2.arc(x_2, y_2, radius_2, Math.PI * 1.5, Math.PI * 2)
ctx_2.quadraticCurveTo((x_2 + innerRadius_2) + thickness_2 / 2, y_2 + thickness_2, x_2 + innerRadius_2, y_2)
ctx_2.arc(x_2, y_2, innerRadius_2, Math.PI * 2, Math.PI * 1.5, true)
ctx_2.quadraticCurveTo(y_2 - thickness_2, (x_2 - innerRadius_2) - thickness_2 / 2, x_2, y_2 - innerRadius_2 - thickness_2)
ctx_2.fill();




let radius_3 = 75
let thickness_3 = 20
let innerRadius_3 = radius_3 - thickness_3
let x_3 = 75
let y_3 = 75
var canvas_3 = document.getElementById('tutorial_3')
var ctx_3 = canvas_3.getContext('2d');
ctx_3.fillStyle = "#cbcbcb";

ctx_3.beginPath();
ctx_3.arc(x, y, radius_3, Math.PI * 1.5, Math.PI)
ctx_3.quadraticCurveTo((x_3 - innerRadius_3) - thickness_3 / 2, y_3 - thickness_3, x_3 - innerRadius_3, y_3)
ctx_3.arc(x_3, y_3, innerRadius_3, Math.PI, Math.PI * 1.5, true)
ctx_3.quadraticCurveTo(y_3 - thickness_3, (x_3 - innerRadius_3) - thickness_3 / 2, x_3, y_3 - innerRadius_3 - thickness_3)
ctx_3.fill();

ctx_3.beginPath();
ctx_3.fillStyle = "#e69b42";
ctx_3.arc(x_3, y_3, radius_3, Math.PI * 1.5, Math.PI * 2)
ctx_3.quadraticCurveTo((x_3 + innerRadius_3) + thickness_3 / 2, y_3 + thickness_3, x_3 + innerRadius_3, y_3)
ctx_3.arc(x_3, y_3, innerRadius_3, Math.PI * 2, Math.PI * 1.5, true)
ctx_3.quadraticCurveTo(y_3 - thickness_3, (x_3 - innerRadius_3) - thickness_3 / 2, x_3, y_3 - innerRadius_3 - thickness_3)
ctx_3.fill();

let radius_4 = 75
let thickness_4 = 20
let innerRadius_4 = radius_4 - thickness_4
let x_4 = 75
let y_4 = 75
var canvas_4 = document.getElementById('tutorial_4')
var ctx_4 = canvas_4.getContext('2d');
ctx_4.fillStyle = "#cbcbcb";

ctx_4.beginPath();
ctx_4.arc(x, y, radius_4, Math.PI * 1.5, Math.PI)
ctx_4.quadraticCurveTo((x_4 - innerRadius_4) - thickness_4 / 2, y_4 - thickness_4, x_4 - innerRadius_4, y_4)
ctx_4.arc(x_4, y_4, innerRadius_4, Math.PI, Math.PI * 1.5, true)
ctx_4.quadraticCurveTo(y_4 - thickness_4, (x_4 - innerRadius_4) - thickness_4 / 2, x_4, y_4 - innerRadius_4 - thickness_4)
ctx_4.fill();

ctx_4.beginPath();
ctx_4.fillStyle = "#e69b42";
ctx_4.arc(x_4, y_4, radius_4, Math.PI * 1.5, Math.PI * 2)
ctx_4.quadraticCurveTo((x_4 + innerRadius_4) + thickness_4 / 2, y_4 + thickness_4, x_4 + innerRadius_4, y_4)
ctx_4.arc(x_4, y_4, innerRadius_4, Math.PI * 2, Math.PI * 1.5, true)
ctx_4.quadraticCurveTo(y_4 - thickness_4, (x_4 - innerRadius_4) - thickness_4 / 2, x_4, y_4 - innerRadius_4 - thickness_4)
ctx_4.fill();


let radius_5 = 75
let thickness_5 = 20
let innerRadius_5 = radius_5 - thickness_5
let x_5 = 75
let y_5 = 75
var canvas_5 = document.getElementById('tutorial_5')
var ctx_5 = canvas_5.getContext('2d');
ctx_5.fillStyle = "#cbcbcb";

ctx_5.beginPath();
ctx_5.arc(x_5, y_5, radius_5, Math.PI * 1.5, Math.PI)
ctx_5.quadraticCurveTo((x_5 - innerRadius_5) - thickness_5 / 2, y_5 - thickness_5, x_5 - innerRadius_5, y_5)
ctx_5.arc(x_5, y_5, innerRadius_5, Math.PI, Math.PI * 1.5, true)
ctx_5.quadraticCurveTo(y_5 - thickness_5, (x_5 - innerRadius_5) - thickness_5 / 2, x_5, y_5 - innerRadius_5 - thickness_5)
ctx_5.fill();

ctx_5.beginPath();
ctx_5.fillStyle = "#e69b42";;
ctx_5.arc(x_5, y_5, radius_5, Math.PI * 1.5, Math.PI * 2)
ctx_5.quadraticCurveTo((x_5 + innerRadius_5) + thickness_5 / 2, y_5 + thickness_5, x_5 + innerRadius_5, y_5)
ctx_5.arc(x_5, y_5, innerRadius_5, Math.PI * 2, Math.PI * 1.5, true)
ctx_5.quadraticCurveTo(y_5 - thickness_5, (x_5 - innerRadius_5) - thickness_5 / 2, x_5, y_5 - innerRadius_5 - thickness_5)
ctx_5.fill();

