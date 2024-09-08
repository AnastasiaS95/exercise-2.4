//Задание 1
let age = 20;
1. if(age < 18) {
    console.log("Вы слишком молоды.")
}
2.if(age >= 18 && age <= 65) {
    console.log("Добро пожаловать!")
}
3. if(age >= 65) {
    console.log("Вам пора на пенсию.")
}
//Задание 2
let day = 5;
switch(true) {
    case (day === 1):
    console.log("понедельник");
    break;
    case (day === 2):
    console.log("вторник");
    break;
    case (day === 3):
    console.log("среда");
    break;
    case (day === 4):
    console.log("четверг");
    break;
    case (day === 5):
    console.log("пятница");
    break;
    case (day === 6):
    console.log("суббота");
    break;
    case (day === 7):
    console.log("воскресенье");
    break;
    default:
        console.log( "Некорректный день");
}

//Задание 3
let n = 10;
let sum = 0;
for(let i = 0; i <= n; i++) {
    if(i % 2 ===0) {
        sum++
    }
    console.log(i)
}
//Задание 4
let str = "Hello, how are you? Hello again!"; // Исходная строка
let subStr = "Hello"; // Подстрока для поиска
let count = 0;
// Напишите цикл здесь
for(let i = 0; i <= str.length; i++) {
    if(str[i] === subStr) {
        count++
    }
}
console.log(count)
//Задание 5
let n = 35;
for(let i = 0; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 3 === 0) {
            console.log("Fizz")
        }else if(i % 5 === 0) {
                console.log("Buzz")
            }else if(i % 3 === 0 && i % 5 ===0) {
                    console.log("FizzBuzz")
                }else {
                    console.log(n[i]);
                }
}
//Задание 6
let season = 'summer';
switch(true) {
    case (season === 'winter'):
    console.log("winter");
    break;
    case (season === 'spring'):
    console.log("spring");
    break;
    case (season === 'summer'):
    console.log("summer");
    break;
    case (season === 'autumn'):
    console.log("autumn");
    default;
}
let season = 'summer';
    if (season === 'winter'){
    console.log("winter");
    } else if (season === 'spring') {
    console.log("spring");
    } else if (season === 'summer') {
    console.log("summer");
    } else if(season === 'autumn') {
    console.log("autumn");
    }
//Задание 7
let number = 0;
while(i <= 10) {
    console.log("Число больше 10 введено!");
    i++
}
//Задание 8
let number = 0;
do {
    console.log("Число больше 10 введено!");
    i++
}
while(i <= 10);