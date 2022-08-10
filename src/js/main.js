'use strict';

function first() {
	setTimeout(function() {
		console.log(1);
	}, 1500);
}

function second() {
	console.log(2);
}
first();
second();



function learnJS(lang, callback) {
	console.log(`learn ${lang}`);
	callback();
}

learnJS('JS', function () {
	console.log('lesson finisht');
});