'use strict';

const obj = {
	name: 'test',
	width: 1024,
	heigth: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() { /*  метод в объекте! */
		console.log('test');
	}
};

// деструктуризация объекта!
const {border, bg} = obj.colors;
console.log(border);

obj.makeTest();

console.log(Object.keys(obj));  /* получаем массив с ключами! */
console.log(Object.keys(obj).length);  /* получаем массив с ключами и его длину!!!! */
console.log(obj['colors']['border']);
console.log(obj.colors.bg);  /*  вывод свойств ключей */
console.log(obj['name']);
// delete obj.name;   удаление ключа!

let counter = 0;
for (let key in obj) {
	if (typeof(obj[key]) === 'object') {
		for (let i in obj[key]) {
			console.log(`свойство ${i} - ${obj[key][i]}`);  /*  перебор объекта в объекте! */
			counter++;
		}
	} else {
		console.log(`свойство ${key} - ${obj[key]}`);   /*  перебор объекта! */
		counter++;
	}
}
console.log(counter);

























const arr = [1, 2, 3, 4, 5, 6, 7];

arr.pop(); /* удаляет последний элемент массива */
arr.push(10, 11);  /* добавляет в конец массива! */


const arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);   /*  перебираем массив! */
}

const arr = [1, 2, 3, 4, 5, 6, 7];
for (let value of arr) {
	console.log(value);   /*  перебираем массив! */
}

const arr = [1, 2, 3, 4, 5, 6, 7];
arr[99] = 9;
console.log(arr.length);
console.log(arr);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.length);    /* чекаем длинну и добавляем точно в конец! */
arr[7] = 8;
console.log(arr);



const arr = [1, 2, 3, 4, 5, 6, 7];
arr .forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);  /*   выход:0: 1 внутри массива 1,2,3,4,5,6,7 */
});

const str = prompt('test','rest');
const products = str.split(', ');
console.log(products);
