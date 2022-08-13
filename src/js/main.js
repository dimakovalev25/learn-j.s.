'use strict';

function showMess() {
	console.log('hello');
}
showMess();


function showMess(text) {
	console.log(text);
}
showMess('Hello!!!');


function showMess(a, b, c) {
	console.log(a * b / c + num);
	let num = 20;
}
showMess(10, 10, 5);
console.log(num);


let num = 10;
function showMess(a, b, c) {
	console.log();
	let num = 20;
}
showMess(10, 10, 5);
console.log(num);



console.log(calc(10, 77));
console.log(calc(10, 777));
console.log(calc(10, 7777));
console.log(calc(10, 77777));
console.log(calc(10, 777777));

function calc(a, b) {
	return (a + b);
}


function ret() {
	let num = 44;
	return num;
}
const numM = ret();
console.log(numM);


let log = function() {     /* function expression */
	console.log('hhh');
};
log();


const calc = (a, b) => a + b;    /*  стрелочная функция */
const calc = (a, b) => { return a + b };    /*  стрелочная функция */
const calc = a => a + b ;    /*  стрелочная функция если в одну строку!!!*/

const calc = (a, b) => {
	return a + b

};




let usd = 2.4;
let euro = 2.64;
function convert(a, b) {
	console.log(a * b);
}
convert(500, usd);
convert(500, euro);



let usd = 2.4;
let euro = 2.64;
let disc = 0.5;
function convert(a, b) {
	return a * b;
}
function promo(result) {
	console.log(result * disc);
}
promo(convert(500, usd));


function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if( i === 3 ) return
	}
	console.log('done')
}
test();
