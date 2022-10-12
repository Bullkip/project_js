'use strict';
let numberOfFilms;
numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
console.log(numberOfFilms);

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false 
};
for(let i =0; i<2;i++) {
    const latestViewFilm = prompt("Один из последних просмотренных фильмов ?", ""),
        ratingLatestViewFilm = +prompt("Насколько оцените его ?", "");
    if(latestViewFilm != null && ratingLatestViewFilm != null && latestViewFilm != "" && ratingLatestViewFilm != "" && latestViewFilm.length < 50 ) {
        personalMovieDB.movies[latestViewFilm] = ratingLatestViewFilm;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

 console.log(personalMovieDB); 