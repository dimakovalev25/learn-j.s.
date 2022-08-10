'use strict';


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
} 
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('последний фильм?', '').trim(),
					b = prompt('его оценка', '');

		if (a != null && b != null && a !='' && b !='' && a.length < 50) { /* прописываем условия */
			personalMovieDB.movies[a] = b;
			console.log('done!');
		} else {
			console.log('error!'); /* если условия не выполнилось минусуем -- */
			i--;
		}	
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('((((');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('norm');
	} else if (personalMovieDB.count >= 30) {
		console.log('much!!!');
	} else {
		console.log('errorrr');
	}
}
// detectPersonalLevel();


function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
	personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
	}
}
writeYourGenres();
