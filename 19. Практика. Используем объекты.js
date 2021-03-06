
//-------------------------------------------------------------------------------------------------
//ГЛАВНЫЙ ОБЪЕКТ, СОДЕРЖИТ В СЕБЕ ОСНОВНЫЕ ДАННЫЕ
let personalMovieDB = {             /* создаём объект */
    count: {},                      /* Количество просмотренных фильмов */
    movies: {},                     /* пустой объект */
    actors: {},                     /* пустой объект */
    genres: [],                     /* пустой массив */
    privat: false,                  /* Булевая переменная. Позволяет запретить или разрешить вывод в консоль */
    logic: {                        /* Объект, содержащий в себе все функции */

        //-----------------------------------------------------------------------------------------------------------
        //СКОЛЬКО ФИЛЬМОВ ПОСМОТРЕЛИ?
        detectPersonaLevel: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');       /* Перем., содержащая ответ на вопрос о количестве */
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {             /* цикл, продолжающийся до тех пор, пока не выполнены условия в скобках */
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
            if (personalMovieDB.count <= 10) {                   /* Если число просмотренных фильмов меньше либо равно десяти */
                alert("Просмотрено довольно мало фильмов");    /* Вывести сообщение */
            } else if (personalMovieDB.count < 30) {          /* Если число в диапазоне от 11 до 30 */
                alert("Вы классический зритель");               /* Вывести сообщение */
            } else if (personalMovieDB.count >= 30) {          /* Если число больше или равно тридцати */
                alert("Да Вы киноман!");                        /* Вывести сообщение */
            } else {                                          /* Если что-то пошло не так */
                alert("Произошла ошибка");                      /* Вывести сообщение */
            }
        },

        //______________________________________________________________________________________________________________
        //ЛЮБИМЫЕ ЖАНРЫ
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {       /* Условие цикла: операнд i равен нулю, цикл повторяется пока i <= 3, при каждой итерации происходит инкремент i */
                const genre = prompt(`Ваш любимый жанр под номером ${i}`);  /* Запрос данных от пользователя */
                if (genre === '' || genre == null) {                                /* Цикл с условиями для ввода */
                    console.log('Вы ввели некорректные данные');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;    /* записываем ответы пользователя в массив */
                }
            }
            personalMovieDB.genres.forEach((item, i) => {       /* Запускаем метод перебора массива, чтобы извечь из него данные для сообщения ниже */
                console.log(`любимый жанр ${i + 1} - это ${item}`)
            });


        },

        //_______________________________________________________________________________________________________________
        //ФИЛЬМЫ И РЕЙТИНГ
        rememberMyFilms: function() {
            for (let i = 0; i < 3; i++) {       /* Условие цикла: операнд i равен нулю, цикл повторяется пока i < 3, при каждой итерации происходит инкремент i */
                // ТЕЛО ДЕЙСТВИЯ ЦИКЛА
                a = prompt('Один из последних просмотренных фильмов?', ''); /* рабочая переменная с ответом на вопрос */
                b = prompt('На сколько оцените его?', '');                  /* рабочая переменная с ответом на вопрос */
                while (b == '' || b == null || isNaN(b)) {                                  /* цикл, продолжающийся до тех пор, пока не выполнены условия в скобках */
                    b = prompt('На сколько оцените его?', '');
                }
                if (a != null && b != null && a != '' && b != '' && a.length <50) {         /* Тут куча всяких ограничений для строк в поле ввода */
                    personalMovieDB.movies[a] = b;  /* помещаем в ключ movies объекта personaMovieDB значение перем. a и b, где a - ключ, b - значение */
                    console.log('Done');            /* выводим в консоль сообщение Done */
                } else {                            /* в противном случае */
                    console.log('error');           /* выводим сообщение об ошибке */
                    i--;                            /* и проводим операцию декремента для главного операнда, чтобы произошёл сдвиг на одну итерацию назад */
                }
            }
        },

        //_______________________________________________________________________________________________________________
        //ФУНКЦИЯ ВЫВОДА БАЗЫ ДАННЫХ В КОНСОЛЬ
        showMyDB: function(hidden) {                    /* создаём функцию со свойством hidden */
            if (!hidden) {                              /* Условие: если не-hidden */
                console.log(personalMovieDB);           /* то выводим в консоль содержание объекта personalMovieDB */
            }
        },
        //ПЕРЕКЛЮЧАТЕЛЬ ПРИВАТНОСТИ (TOGGLE)
        toggleVisibleMyDB: function () {                /* При вызове функции включается/выключается приватность */
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }

        }

    }
};

//________________________________________________________________________________________________________________________________________________
//КОНСОЛЬНЫЕ КОМАНДЫ ДЛЯ ЗАПУСКА ФУНКЦИЙ
// personalMovieDB.logic.detectPersonaLevel();
// personalMovieDB.logic.writeYourGenres();
// personalMovieDB.logic.rememberMyFilms();
// personalMovieDB.logic.toggleVisibleMyDB();

