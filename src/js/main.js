'use strict';

let arr = [1, 2 , 3, 4, 5,];
// arr.reverse();
let newArr = arr.reverse();  /* реверс массива! */
console.log(newArr);

let str = '12345';
let arr = str.split('');  
let arr2 = arr.reverse();
str = arr2.join(''); 
console.log(str);

let str = '12345';
let res = str.split('').reverse().join('');
console.log(res);

let arr = [1, 2, 3, 4, 6,];
let newArr = arr.slice(1, -1);
console.log(newArr);

let arr = [1, 2, 3, 4, 6,];
arr.splice(1, 0 );
// let del = arr.splice(1, 2);  /* в del сохраняються удаленные части объекта! */
console.log(arr);

let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 1, '1', 'bbbb'); удаляем и записываем 1 и bbbb
arr.splice(4, 0, 'done!!' ); /* ничего не удаляем и записываем done! */
console.log(arr);


let arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-1, 1); /* удаляем последний элемент массива! */
console.log(arr);

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.shift();  /*  удаляет первый элемент массива! */
console.log(arr);


let arr = ['a', 'b', 'c', 'd', 'e'];
let newArr = arr.pop();  /*  удаляет последний элемент массива! */
console.log(newArr);


let arr = ['1', '2', '3', '4', '5', '6'];  /* превращаем в строку 16-25-34 */
let result = [];
while (arr.length > 0) {
	let first = arr.shift();
	let last = arr.pop();
	let str = first + last;
	result.push(str);
}
result = result.join('-');
console.log(result);


let arr = [1, 5, 6];
arr.unshift('11', 22); /*  в начало массива добавим еще два новых элемента */
console.log(arr);

let arr = [1, 3,];
// push добавляет неограниченное количество элементов в конец массива
arr.push('gggg', '55555');
console.log(arr);



let arr = [];
// Заполним массив числами от 1 до 9:
for (let i = 1; i <= 19; i++) {  
	arr.push(i);
}
console.log(arr);


let arr = [2, 4, 5, 7, 9];
let res = arr.map(function(elem) {
	return elem * 2;
});
console.log(res);

let arr = [2, 4, 5, 7, 9];
let res = arr.map(function(elem, index) {
	return elem * index;
});

console.log(res);


let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
	sum += elem;
});

console.log(sum);


let numbers = [-2, 5, 1, -5, -1, 
	1, 3, 4, -1]; 

let result = numbers.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);


let a =[1, 2, 3];
let b =[4, 5, 6];
let c = a.concat(b);  /* объединение массовов */
let d = c.concat(a);


console.log(c);
console.log(d);

let arr =[1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

let arr =[1, 2, 3];
arr.reverse();
console.log(arr);

let arr =[1, 2, 3];
arr.push(44, 55,);
console.log(arr);
arr.unshift('22', 1, 1,);
console.log(arr);


let arr = ['js', 'css', 'jq'];
let a = arr.shift();
console.log(a);

let arr = ['js', 'css', 'jq'];
let a = arr.pop();
console.log(a);


let arr = [1, 2, 3, 4, 5];
let e = arr.slice(0, 3);
console.log(e);


let arr = [1, 2, 3, 4, 5];
let e = arr.slice(2, 4);
console.log(e);


let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let a = arr.splice(1, 3);
console.log(a);


let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);


let arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);

let obj = {
	js:'test',
	jq: 'hello',
	css: 'world'
};
console.log(Object.keys(obj));
