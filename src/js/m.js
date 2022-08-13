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