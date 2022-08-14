'use strict';

// if (4 == 7) {
// 	console.log('ok'); 
// } else {
// 	console.log('error');
// }

// let num = 49;
// if (num <= 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log('much');
// } else {
// 	console.log('ok!');
// }

// let num = 50;
// (num === 50) ? console.log('ok') : console.log('error!');  

// let numm = 50;
// swith (numm) {
// 	case 49: 
// 		console.log('error');
// 		break;
// 	case 100:
// 		console.log('error');
// 		break;
// 	case 50:
// 		console.log('ok');
// 		break;

// }

let nu = 50;
while (nu < 55) {
	console.log(nu);
	nu++;
}


let num = 50;
do {
	console.log(num);
	num++;
}
while (num < 55);



let num = 50;
for (let i = 1; i < 8; i++) {
	console.log(num);
	num++;
}

for (let i = 1; i < 8; i++) {
	if (i === 6) {
		break;  /* останавливает цикл на условии */
	}
	console.log(i);
}


for (let i = 1; i < 8; i++) {
	if (i === 6) {
		continue;  /* пропускает по условияю */
	}
	console.log(i);
}

// цикл в цикле!
for (let i = 1; i < 3; i++) {
	console.log(i);
	for (let j = 1; j < 3; j++) {
		console.log(j+'ggg');
	}
} 

// *
// **
// ***
// *****
// ******

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
	for (let j = 0; j < i; j++) {
		result +='*';
	}
		result +='\n';  /* переход на новую строку! */
}
console.log(result);


first: for (let i = 1; i < 3; i++) { /*  метка!!!! first: */
	console.log(i);
	for (let j = 1; j < 3; j++) {
		console.log(j+'!!!');
		for (let k = 1; k < 5; k++) {
			if (k === 2) continue first; /*  метка!!!! first: */
			console.log(k+'KKK');
		}
	}
} 


// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

for (let i = 5; i <= 10; i++) {
	console.log(i);
}

for (let i = 20; i >= 10; i--) {
		console.log(i);
	if (i === 13) {
		break;
	}
}

for (let i = 2; i <= 10; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}


let arr =[];
for (let i = 5; i <= 10; i++) {
	arr.push(i);
}
console.log(arr);


// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
	result[i] = arr[i];

}
console.log(result);


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

let newArr = [];
const arr = [5, 10, 'Shopping', 20, 'Homework'];
	for (i = 0; i < arr.length; i++) {
		if (typeof(arr) == "number") {
			let newArr = arr[i] * 2;
		}
	}
	console.log(newArr);





	const arr = [3, 5, 8, 'done'];
	const nar = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === 'number') {
			nar[i] = arr[i] * 2;
		} else if (typeof(arr[i]) === 'string') {
			nar[i] = arr[i] + " - done!";
		}
	}
	console.log(nar);
	
	
	const arr = [3, 5, 8, 'done'];
	for (let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === 'number') {
			arr[i] = arr[i] * 2;
		} else if (typeof(arr[i]) === 'string') {
			arr[i] = arr[i] + " - done!";
		}
	}
	console.log(arr);


	const arr = [3, 5, 8, 'done'];
	arr.reverse();
	console.log(arr);



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



function learnJS(lang, callback) {   /*  callback */
	console.log(`i learn ${lang}`);
	callback();
}

learnJS('JS', function() {
	console.log('i finisht this lesson');
});



const options = {
	name: 'test',
	width: 21,
	colors: {
		bg: 'red',
	}
};
// console.log(options.name);
// console.log(options.name[0]);
// delete options.name;
// console.log(options);
let counter = 0; 
for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`свойство  ${i}  - значение ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`свойство  ${key}  - значение ${options[key]}`);
		counter++;
	}
}

console.log(counter);

const options = {
	name: 'test',
	width: 21,
	colors: {
		bg: 'red',
	}
};

console.log(Object.keys(options).length);

const options = {
	name: 'test',
	width: 21,
	colors: {
		bg: 'red',
	},
	makeTest: function() {
		console.log('test');
	}
};
options.makeTest();

const options = {  /*  деструктуризация объекта! */
	name: 'test',
	width: 21,
	colors: {
		bg: 'red',
	}
};
const {bg} = options.colors;
console.log(bg);


// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно


const personalPlanPeter = {
	experience: '1 month',
	hack: 'js',
};
function showExperience() {
	const {experience} = personalPlanPeter;
	console.log(experience);
	// console.log(personalPlanPeter);
} 
showExperience();




// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

const personalPlanPeter = {
	js: '20%',
	php: '10%',
	ruby: '28%',
	pyton: '1%',
	
};
function showProgrammingLangs() {
	for(let key in personalPlanPeter) {
		if(typeof(personalPlanPeter[key]) === 'string') {
			console.log(`Язык ${key} изучен на ${personalPlanPeter[key]}`);
		} 
	}
}
showProgrammingLangs();


// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

const personalPlanPeter = {
	age: 29,
	lang: 'RU',
	langs: 'EN',
	showAgeAndLangs: function() {
		console.log(`Мне ${personalPlanPeter.age} и я владею языками: ${personalPlanPeter.lang}, ${personalPlanPeter.langs}`);
	}
};
personalPlanPeter.showAgeAndLangs();



const options = {
	name: 'test',
	width: 21,
	colors: {
		bg: 'red',
	},
	makeTest: function() {
		console.log('test');
	}
};
options.makeTest();




const arr = [1, 2, 5, 7];
arr.push(10, 77);
console.log(arr); /* пушим в массив */

const arr = [1, 2, 5, 7];
	for (let i = 0; i < arr.length; i++) {  /* перебор массива! */
	console.log(arr[i]);
}
console.log(arr);


const arr = [1, 2, 5, 7];
for (let value of arr) {
	console.log(value);  /* перебор массива! */
}



const arr = [1, 2, 5, 7];
arr[99] = 0;
console.log(arr.length);  
console.log(arr);



const arr = [1, 2, 5, 7];
arr.forEach(function(item, i, arr) { 
	console.log(`${i}: ${item} in ${arr}`);  /* перебор массива с нашими корректировками! */
});

const str = 'hello';
const products = str.split(''); /* из строки массив! */
products.sort();
const newStr = products.join('; ');
console.log(products);
console.log(newStr);




const arr = [55, 17, 8, 2, 1, -14, 0, 88, 115];
arr.sort(com);

function com(a, b) {
	return a - b;
}
console.log(arr);



let a = 5;
		b = a;
		b = b + 5;
		console.log(a);
		console.log(b);


const obj = {
	a: 5,
	b: 1,
}
const copy = obj;
			copy.a = 10;
console.log(obj);
console.log(copy);





function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];    /* функция копия объекта!!! */
	}
	return objCopy;
}


const number = {
	a: 5,
	b: 1,
	c: {
		v: 6,
	}
};

const newNumber = copy(number);
newNumber.a = 10;
console.log(number);
console.log(newNumber);



const number = {
	a: 5,
	b: 1,
	c: {
		v: 6,
	}
};


const add = {
	o: 66,
	a: 55,
}

console.log(Object.assign(number, add));



const add = {
	o: 66,
	a: 55,
};
const clone = Object.assign({}, add);
clone.a = 66;
console.log(add);
console.log(clone);




const arr = ['a', 'b', 'c'];
const newArr = arr.slice();
newArr[0] = 'ffffff';
console.log(arr);
console.log(newArr);

const video = ['youtube', 'vimeo'];
			blogs = ['world', 'livej'];
			internet = [...video, ...blogs, 'vk'];
			console.log(internet);

			


function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
const num = [2, 5, 8];
log(...num);


const num = [2, 5, 8];
const newNum = [...num];
console.log(newNum);


const add = {
	o: 66,
	a: 55,
};

const edd = {...add};
console.log(edd);


// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

const personalPlanPeter = {
	js: '20%',
	php: '10%',
	ruby: '28%',
	pyton: '1%',
	
};
function showProgrammingLangs() {
	for(let key in personalPlanPeter) {
		if(typeof(personalPlanPeter[key]) === 'string') {
			console.log(`Язык ${key} изучен на ${personalPlanPeter[key]}`);
		} 
	}
}
showProgrammingLangs();



// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex',];
	function showFamily() {
		let str = family.toString("");
		if (str !== '') {
			console.log(`Семья состоит из ${str}`);
		}
		if (str == '') {
		console.log('Семья пуста');
	}	
} 
showFamily();

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin

const family = ['PETER', 'ANN',];
	function standardizeStrings() {
		family.forEach(function(item, i, family) {
			console.log(`${item}`.toLowerCase());
		});
}
standardizeStrings();



console.log(str.toLowerCase());

const arr = [1, 2, 5, 7];
arr.forEach(function(item, i, arr) { 
	console.log(`${i}: ${item} in ${arr}`);  /* перебор массива с нашими корректировками! */
});



// Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

const str = 'This is some strange string';
function reversStr() {
	let arr = [];
	arr = str.split('');
	arr.reverse();
	let strr = '';
	strr = arr.join();
	console.log(arr);
	console.log(strr);
}
reversStr();



arr.revers();

var myArray = ['один', 'два', 'три'];
myArray.reverse();

console.log(myArray)



let str = 'some';
let strNew = new String(str);

console.log(typeof(str));
console.log(typeof(strNew));


console.dir([1, 2]);




