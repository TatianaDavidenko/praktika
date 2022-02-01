'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

// const personalMovDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genres: [],
//       privat: false
// };

// const lastOfFilms = prompt('Один из последних просмотренных фильмов?', ' '),
//       ratingOfFilms = +prompt('На сколько оцените его?', '10'),
//       lastOfFilms2 = prompt('Один из последних просмотренных фильмов?', ' '),
//       ratingOfFilms2 = +prompt('На сколько оцените его?', '10');

// personalMovDB.movies[lastOfFilms] = ratingOfFilms;
// personalMovDB.movies[lastOfFilms2] = ratingOfFilms2;

// console.log(personalMovDB);



// 2-е задание

// const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?', '');

// if (numberOfFilms <= 10) {
//   alert('Просмотрено довольно мало фильмов');
// } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
//   alert('Вы обычный зритель');
// } else if (numberOfFilms > 30) {
//   alert('Вы киноман');
// } else {
//   alert('Произошла ошибка');
// }

// const personalMovDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// for (let i = 0; i < 2; i++) {
//   const lastOfFilms = prompt('Один из последних просмотренных фильмов?', '');

//   if (lastOfFilms == '' || lastOfFilms == null || lastOfFilms.length > 50) {
//     i--;

//   } else {
//     const ratingOfFilms = +prompt('На сколько оцените его?', '10');
//     personalMovDB.movies[lastOfFilms] = ratingOfFilms;
//   }
// }

// console.log(personalMovDB);


// 3-e задание

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastOfFilms = prompt('Один из последних просмотренных фильмов?', '');

    if (lastOfFilms == '' || lastOfFilms == null || lastOfFilms.length > 50) {
      i--;

    } else {
      const ratingOfFilms = +prompt('На сколько оцените его?', '10');
      personalMovDB.movies[lastOfFilms] = ratingOfFilms;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovDB.count > 10 && personalMovDB.count <= 30) {
    alert('Вы обычный зритель');
  } else if (personalMovDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovDB);
  }
}

showMyDB(personalMovDB.privat);

// console.log(personalMovDB);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();