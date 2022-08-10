let arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr[1][0]);

let obj = {
	js:['jQuery', 'Angular'], 
	php: 'hello', 
	css: 'world'
};
console.log(obj.js[0]);

let mass = {
	en:['monday', 'saterday'],
	ru:['понедельник', 'суббота']

};
console.log(mass.en[0], mass.ru[0]);


var test = true;
if (!test) {
	console.log('Верно!');
} else {
	console.log('Неверно!');
} 

let a = 4;
if(a > 0 && a < 5){
	console.log('Верно!');
} else {
	console.log('Неверно!');
} 

let b = -2;
if(b == 2 || b == 0){
	console.log(b+7);
} else {
	console.log(b/10);
}     

let a = 1;
let b = 8;
if(a <= 1 && b >= 3) {
	console.log(a+b);
} else {
	console.log(a-b);
}


let str ='asdfg';
if(str[0] == 'a'){
	console.log('ok');
}

let num = "112345";
// let digit = num.toString();
var digit = (''+num)[1];
if(num[0] == 1){
	console.log('1!!!!');
} else {
	console.log('ne 1');
}

let str = '454454';
const count = str[0];
const countt = str[1];
const counttt = str[2];
const ount = str[3];
const ountt = str[4];
const ounttt = str[5];
let countNum = Number(count);
let counttNum = Number(countt);
let countttNum = Number(counttt);
let ountNum = Number(ount);
let ounttNum = Number(ountt);
let ountttNum = Number(ounttt);

let result = countNum + counttNum + countttNum;
let resultt = ountNum + ounttNum + ountttNum;
if(result == resultt){
	console.log("done!");
}


for(i = 0; i <= 50; i++){
	console.log(i);
}

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}



for (let i = 0; i <= 50; i++) {
	console.log(i);
}

let arr = [1, 2, 3, 4, 5, 7, 888];
	for(i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}

	let res = 1;
	let arr = [2, 3, 4, 5];
	for(i = 0; i < arr.length; i++) {
		res = res * arr[i];

}
console.log(res);





var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};

for(let key in obj) {   /*Цикл for-in выводим ключи */
console.log(key);
}

for(let key in obj) {     /* Цикл for-in выводим значения ключей */
	console.log(obj[key]);
}
for(let key in obj) {
	console.log(key + ' - это ' + obj[key] + '.');
}


var obj = {
	2 : 17,
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};
for(let key in obj) {   /*Цикл for-in выводим ключи */
console.log(key + 1);
}

for(let i = 11; i < 34; i++)
console.log(i);

var i = 0;
while (i <= 100) {
	if(i % 2 == 0)
	console.log(i);
	i++;
}
var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
console.log(result);

for(let i = 0; i < 52; i++)
if(i % 2 == 0) {
	console.log(i);
}

let res = 0;
for(let i = 1; i < 101; i++) {
  res = res + i;
}
console.log(res);

let res = 0;
var i = 1;
while (i <= 100) {
	i++;
	res = res + i;
}
console.log(res);

let arr = [1, 2, 3, 4, 5, 888, 'ff'];
for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let result = 0;
let arr = [1, 2, 3, 4, 5, 5];
for(let i = 0; i < arr.length; i++) {
	result = result + arr[i];
} 
console.log(result);

let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for(let key in obj) {
	console.log(key);
	console.log(obj[key]);

}

let obj = {
	'peet': 200,
	'peter': 400,
	'nick': 250,

}
for(let key in obj) {
	console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
}

let arr = [2, 5, 9, 15, 0, 4];
for(let i = 1; i < arr.length; i++)
 if(i > 3 && i < 10) {
		console.log(i);
	}

let res = 0;
let arr = [-2, -5, -6, -2, 5, 9, 15, 0, 4,];
for(let i = 0; i < arr.length; i++)
  if(arr[i] > 0) {
		res = res + arr[i];
	}
	console.log(res);


let arr = [-2, -5, -6, -2, 5, 9, 15, 0, 4, 66, 78];
for(let i = 0; i < arr.length; i++)
	if(arr[i] == 4) {
		console.log('done!');
		return;
	}
console.log(arr[i]);


let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}



let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
	let num = String(arr[i]);
	let ret = num[0];
	if(ret == 1 || ret == 2) {
		console.log(num);
	}
}

let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
	let str =('-' + arr[i] + '-');
	console.log(str);
}

let list = [1, 2, 3, 4];
let str = list.toString();
console.log(str);

// let strr = list.toString();