"use strict";
let num = 20;
function show(text) {
	console.log(text);
	// let num = 10;
	console.log(num); 
}
show('hello'); 
console.log(num);  


function calc (a, b) {
	return (a + b);
}

console.log(calc(4, 3));  
console.log(calc(55, 36));  
console.log(calc(4, 3));  
console.log(calc(4, 3));  



function ret() {
	let num = 50;

	return num;
}

const anNum = ret();
console.log(anNum);





const logger = function () {
	console.log('hello');
};
logger();



const calc = (a, b) => { return a + b };




const usd = 28;
const disc = 0.8;

function convert(amount, curr) {
	return curr * amount;
}
function prom(result) {
	console.log(result * disc);
}
prom(convert(100, usd));

function test() {
	for(let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return
	}
	console.log('done');
} 
test();


/* 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
P.S. возвращать - это использовать ключевое слово return.
P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20
Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде. */


function sayHello(name) {
	return `Привет, ${name}!`;
}

sayHello('Alex');

const str = 'asdf';
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);


console.log(60*60*24);

var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);

let num = 1;
num += 12;
console.log(num);

let num = 1;
num -= 14;
console.log(num);

let num = 1;
num *= 5;
console.log(num);

let num = 1;
num /= 7;
console.log(num);

let num = 1;
num++;
num--;
num--;
console.log(num);

let num = 3;
console.log(num);

let a = 10,
		b = 2;
		console.log(a * b);		
		console.log(a / b);		
		console.log(a - b);		
		console.log(a % b);	
		
let c = 15, 
		d = 2;
let result = (c + d);
console.log(result);				

let c = 15, 
		d = 2;
		e = 55
console.log(c + d + e);	

let a = 17, b = 10;
let c = (a - b);
let d = 7;
let result = (c + d);
console.log(result);

let str = "hello world";
let string =' MZF!';
console.log(str + string);

let name = 'dima';
console.log("hello, %name%");

let arr = ['hello', 'world'];
let str = arr[0] + arr[1];
console.log(str);

let arr = ['hello', 'world'];
arr[0] = 'h';
arr[2] = 'world';
console.log(arr);

let obj = {
	'kolia': 1000,
	'tolia' : 1000,
	'dima' : 1000};
obj.koliaa = 12000;
obj.vania = 11000;
obj.woomen = {};
obj.woomen = [];
obj.woomen.Katia = 5000;
obj.woomen.masha = 7000;
delete obj.koliaa;
// delete obj.woomen;
console.log(obj);
console.log(obj.kolia);

let user = {
	name: 'dima',
};
console.log(user.name);

const user = 90;
const userr = user;
console.log(userr);



let user = {};
console.log(user.name === undefined);
console.log('age' in user);

let user = {
	name: 'dima',
	age: 24,
	height: 200,
};
for (let key in user) {
	console.log(key);
	console.log(user[key]);
}


let user = {
	'-23': 4,
	4: 4,
	2: 2,
	34: 8,
	0: 88,
	name: 'dima',
	age: 24,
	height: 200,
};
console.log(user);


let user = {
	name: 'john',
	surname: 'smith',
	names: 'pets',

};

function isEmpty(user) {
	for (let key in user) {
		return false;
	}
	return true;
}
isEmpty();
let answer = isEmpty;
console.log(isEmpty);
console.log(user);
console.log(answer);



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);   /* считаем сумму всех ключей! */


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

let m = 'hellloooooo';
let n = m;
// m = 'hello';
console.log(m, n);




let name = 'dima';
console.log(`hello, ${'name'}`);

"" + 1 + 0    '10'
"" - 1 + 0    -1
true + false   1
6 / "3"    2
"2" * "3"    6
4 + 5 + "px"  '9px'
"$" + 4 + 5   '$45'
"4" - 2        2
"4px" - 2     NaN
"  -9  " + 5    '  -9    5'
"  -9  " - 5    -14
null + 1     1
undefined + 1     NaN
" \t \n" - 2     -2


let a = '1';
let b = '2';

console.log(a + b); // 12



let i = -8;

while (i) {
  console.log( i++ );
}

for (let i = 1; i < 11; i++) {
	if(i % 2 == 0){

		console.log(i);
	}
}


for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  console.log( `number ${i}!` );
  i++;
}


let num = 20;
let bam = 5;

function show() {
	num = 10;
	bam = 2;
	console.log(num, bam);
}
show();


function calc(a, b, c) {
	return(a * b / c);
}
console.log(calc(3, 9, 7));
console.log(calc(3, 11, 12));
console.log(calc(3, 66, 0));
console.log(calc(3, 90, 1));
console.log(calc(3, 900, 8));