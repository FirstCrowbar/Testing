let number0Films = +prompt('Сколько фильмов вы уже посмотрели?', ''); /* Перем., содержащая ответ на вопрос о количестве */

let personalMovieDB = {             /* создаём объект */
    count: number0Films,            /* значением ключа count является значение переменной number0Films */
    movies: {},                     /* пустой объект */
    actors: {},                     /* пустой объект */
    genres: [],                     /* пустой массив */
    privat: false                   /* булевая переменная */
};

// ОТВЕТЫ НА КОЛИЧЕСТВО ПРОСМОТРЕННЫХ ФИЛЬМОВ
if (personalMovieDB.count <=10) {                   /* Если число просмотренных фильмов меньше либо равно десяти */
    alert ("Просмотрено довольно мало фильмов");    /* Вывести сообщение */
}   else if (personalMovieDB.count <30 ) {          /* Если число в диапазоне от 11 до 30 */
    alert("Вы классический зритель");               /* Вывести сообщение */
}   else if (personalMovieDB.count >=30) {          /* Если число больше или равно тридцати */
    alert("Да Вы киноман!");                        /* Вывести сообщение */
}   else {                                          /* Если что-то пошло не так */
    alert("Произошла ошибка");                      /* Вывести сообщение */
}

//ЦИКЛ ВОПРОСОВ О НАЗВАНИИ ФИЛЬМА И РЕЙТИНГЕ
for (let i = 0; i < 3; i++) {       /* Условие цикла: операнд i равен нулю, цикл повторяется пока i < 3, при каждой итерации происходит инкремент i */
    // ТЕЛО ДЕЙСТВИЯ ЦИКЛА
    const a = prompt('Один из последних просмотренных фильмов?', ''); /* рабочая переменная с ответом на вопрос */
    const b = prompt('На сколько оцените его?', '');                  /* рабочая переменная с ответом на вопрос */
    if (a != null && b != null && a != '' && b != '' && a.length <50) {         /* Тут куча всяких ограничений для строк в поле ввода */
        personalMovieDB.movies[a] = b;  /* помещаем в ключ movies объекта personaMovieDB значение перем. a и b, где a - ключ, b - значение */
        console.log('Done');            /* выводим в консоль сообщение Done */
    } else {                            /* в противном случае */
        console.log('error');           /* выводим сообщение об ошибке */
        i--;                            /* и проводим операцию декремента для главного операнда, чтобы произошёл сдвиг на одну итерацию назад */
    }
}

personalMovieDB.movies[a] = b;  /* помещаем в ключ movies объекта personaMovieDB значение перем. a и b, где a - ключ, b - значение */
console.log(personalMovieDB);   /* выводим в консоль содержание объекта personalMovieDB */