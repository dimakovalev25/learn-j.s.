'use strict';

const str = prompt('test','rest');
const products = str.split(', ');  /*  вопросы записываем в массив! */
products.sort();  /* сортируем по порядку вводимые данные! */
console.log(products.join('; ')); /*  склеиваем массив в строку!! */
console.log(products);



const arr = [1, 44, 65, 21, 33, 65, 21, 8];
arr.sort(compareNum);   /* массив из цифр по порядку не отсортирует так как сортирует по строкам!!! */
function compareNum(a, b) {
	return a - b;
}
console.log(arr);




const str = 'aa@aa@bb@';
console.log(str.replace('@', '!')); /* заменяет на ! */
console.log(str.replace(/@/g, '!'));   /* глобальный поиск и замена на  ! */

const string = 'aaabbbnnn';
console.log(string.slice(0, 3));
console.log(string.substring(4, 6));


let date = '2025-12-31';
let arr = date.split('-');   /* с помощью метода split разобьем нашу строку '2025-12-31' в массив по разделителю '-' */

let newDate = arr[2] + '/' + arr[1] + '/' + arr[0];  /* обращаясь к разным элементам массива по их ключам, сформируем нужную нам строку: */
console.log(newDate);


let str = 'sSsSsSsS';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);


/* Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str. */

let str = 'qwertyuiopqwertyuig';
// console.log(str.length); 
if(str.length > 28) {
	let result = str + '...';
	console.log("done"); 
	console.log(result); 
} else {
	let result = str;
	console.log(result);
}

let str = 'Я учу java script!';
console.log(str.replace(/' '/g, '!'));
console.log(str.split(''));
console.log(str.split(' '));




/* Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+! */

let arr = ['я', 'учу', 'javascript', '!'];
let str = arr.join();
console.log(str);
let newStr = str.replace(/,/g, '+');
console.log(newStr);

/* Преобразуйте первую букву строки в верхний регистр. */
let str = '--555fg ';
let newStr = str[0].toUpperCase() + str.slice(1);

console.log(newStr);

let date = '2025-12-31';
let arr = date.split('-');
console.log(arr);
let newDate = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(newDate);


let str = 'var_test_text';






