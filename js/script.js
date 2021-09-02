
1.

// Вам даны две переменные x и y, менять их не нужно.При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".



// let x = 10, y = 7;


// Пользователь вводит какое - то число(num).Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».Если посетитель вводит четное число, то выводить «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное


// Напишите код, который предлагает пользователю ввести целое число.Нужно вывести на экран сколько в этом числе цифр, а также положительное оно или отрицательное.Например, "Число " + num + " однозначное положительное".Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать

// let a = 'string';
// console.log(a.length)

// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.Пользователь вводит поочерёдно через prompt числа.Используя конструкцию if..else, напишите код, который должен определять, какое из введенных чисел является наибольшим.


// У треугольника сумма любых двух сторон должна быть больше третьей.Иначе две стороны просто < лягут > на третью и треугольника не получится.Пользователь вводит поочерёдно через prompt длины трех сторон.Используя конструкцию if..else, напишите код, который должен определять, может ли существовать треугольник при таких длинах.Т.е.нужно сравнить суммы двух любых строн с оставшейся третьей стороной.Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

// 1.

let x = 10;
let y = 7;

(x > y) ? alert("x больше, чем y") : alert("y больше, чем x");


// 2.
let num = Number(prompt('Введите число'));

// if (num % 2 == 0) {
//     alert('Число ' + num +  ' четное')
// } else if (num % 2 !== 0) {
//     alert('Число ' + num +  ' нечетное')
// }
(num % 2 == 0) ? alert('Число ' + num + ' четное') : alert('Число ' + num + ' нечетное');

// 3.


let number1 = prompt('Введите число');
console.log(number1);
let numberLength = number1.length;
if (number1 < 0) {
    numberLength -= 1;
    console.log(numberLength);
}
console.log(numberLength);
// if (number1 > 0 && numberLength == 1) {
//     alert(`Число  ${number1}  однозначное положительное`);
// } else if (number1 < 0 && numberLength ===1){
//     alert(`Число  ${number1}  однозначное отрицательное`);
// } else if (number1 > 0 && numberLength ===2){
//     alert(`Число  ${number1}  двухзначное положительное`);
// } else if (number1 < 0 && numberLength ===2){
//     alert(`Число  ${number1}  двухзначное отрицательное`);
// } else if (number1 > 0 && numberLength ===3){
//     alert(`Число  ${number1}  трехзначное положительное`);
// } else if (number1 < 0 && numberLength ===3){
//     alert(`Число  ${number1}  трехзначное отрицательное`);
// } else {
//     alert(`Число  ${number1} более трёхзначное`)
// }
switch (true) {
    case number1 > 0 && numberLength == 1:
        alert(`Число  ${number1}  однозначное положительное`);
        break;
    case number1 < 0 && numberLength === 1:
        alert(`Число  ${number1}  однозначное отрицательное`);
        break;
    case number1 > 0 && numberLength === 2:
        alert(`Число  ${number1}  двухзначное положительное`);
        break;
    case number1 < 0 && numberLength === 2:
        alert(`Число  ${number1}  двухзначное отрицательное`);
        break;
    case number1 > 0 && numberLength === 3:
        alert(`Число  ${number1}  трехзначное положительное`);
        break;
    case number1 < 0 && numberLength === 3:
        alert(`Число  ${number1}  трехзначное отрицательное`);
        break;
    default:
        alert(`Число  ${number1} более трёхзначное`)
}


// 4.



let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
let num3 = Number(prompt('Введите третье число'));

// if ( num2 > num1 && num2 > num3) {
//     alert(`num2 ${num2} больше всех`);
// } else if (num1 > num2 && num1 > num3) {
//     alert(`num1 ${num1} больше всех`);
// } else {
//     alert(`num3 ${num3} больше всех`);
// }

switch (true) {
    case num2 > num1 && num2 > num3:
        alert(`num2 ${num2} больше всех`);
        break;
    case num1 > num2 && num1 > num3:
        alert(`num1 ${num1} больше всех`);
        break;
    default:
        alert(`num3 ${num3} больше всех`);
}

// 5.



let triangleSide1 = Number(prompt('ВВедите первую сторону'));
let triangleSide2 = Number(prompt('ВВедите вторую сторону'));
let triangleSide3 = Number(prompt('ВВедите третию сторону'));

if ((triangleSide2 + triangleSide3) > triangleSide1) {
    alert('Триугольник существует')
    console.log(1);
} else if ((triangleSide3 + triangleSide1) > triangleSide2) {
    alert('Триугольник существует')
    console.log(2);
} else if ((triangleSide1 + triangleSide2) > triangleSide3) {
    alert('Триугольник существует')
    console.log(3);
} else {
    alert('Триугольник не существует');
}