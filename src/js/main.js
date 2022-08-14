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



// const arr = [1, 2, 5, 7];
// arr[99] = 0;
// console.log(arr.length);  
// console.log(arr);



// const arr = [1, 2, 5, 7];
// arr.forEach(function(item, i, arr) { 
// 	console.log(`${i}: ${item} in ${arr}`);  /* перебор массива с нашими корректировками! */
// });

// const str = 'hello';
// const products = str.split(''); /* из строки массив! */
// products.sort();
// const newStr = products.join('; ');
// console.log(products);
// console.log(newStr);




// const arr = [55, 17, 8, 2, 1, -14, 0, 88, 115];
// arr.sort(com);

// function com(a, b) {
// 	return a - b;
// }
// console.log(arr);



// let a = 5;
// 		b = a;
// 		b = b + 5;
// 		console.log(a);
// 		console.log(b);


// const obj = {
// 	a: 5,
// 	b: 1,
// }
// const copy = obj;
// 			copy.a = 10;
// console.log(obj);
// console.log(copy);





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