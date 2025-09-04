//Задача №1. Генерация произвольных массивов и адаптирование кода под существующую ситуацию

let count = 42; // Количество элементов, которые нужно сгенерировать в массиве
let n = -3;  // Нижняя граница диапазона (может быть больше m — это учтено ниже)
let m = -10;  // Верхняя граница диапазона

let arr = [];  // Инициализация пустого массива для хранения случайных чисел

let min = Math.min(n, m); // Вычисление минимального значения из n и m
let max = Math.max(n, m); // Вычисление максимального значения из n и m
let range = Math.abs(max - min);  // Длина диапазона (включительно), гарантирует положительное значение

for(let i = 0; i < count; i++){  // Цикл, который выполнится count раз
let j = Math.floor((Math.random() * (range + 1)) + min);
// Генерация случайного целого числа от min до max включительно:
// Math.random() → [0, 1), умножаем на (range + 1) → [0, range + 1). ПОТОМУ ЧТО Math.random() даёт число от 0 (включительно) до 1 НО!(не включительно)
//(range + 1)  → чтобы включить верхнюю границу max! 
//Почему +min?
//Потому что Math.random() всегда стартует с 0. Чтобы сдвинуть диапазон от [0, range] к [min, max], мы просто прибавляем min.
// Math.floor(...) → округление вниз до целого
// + min → сдвиг диапазона к нужному интервалу
arr.push(j); // Добавление сгенерированного числа в массив  
}

console.log(arr); // Вывод готового массива в консоль

//Задача 2

let array = [];
let count2 = 5;


for (let i = 1; i <= count2; i++) {
array.push(i);
}

console.log(array);


for (let i = 0; array[i]; i++) {
j = (Math.round(Math.random() * count2));
temp = array[i];
array[i] = array[j];
array[j] = temp; 
} 

console.log(array);

//Задача 3

for (i = 0; array[i]; i++) {
  let index = [-1];
  let n = [3];
 if (n == array[i]) {
 index = [i];
 console.log(array); + console.log(`n = ${n};` + ' ' + `индекс элемента = ${index}`);
  break;
 }else {
  console.log(array + ' ' + `n = ${n}; элемент не найден`);
 }
}


//Задача 4

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

let arr2 = [12, 44, 23, 5];

for (i = 0; i < arr2[i]; i++) {
        arr1.push(arr2[i]);
}

console.log(arr1);


//Задача. Сложение элементов массива

let arr4 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

let arr5 = [12, 44, 23, 5];

let result1 = [];

for (i = 0; arr4[i] && arr5[i]; i++) {
    result1.push(arr4[i] + arr5[i]);
}

console.log(result1);


//Задача. Объединение двух массивов, чередуя их элементы (не закончена)

let arr6 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

let arr7 = [12, 44, 23, 5];

let result2 = [];

for (i = 0; arr6[i] + arr7[i]; i++) {
    result2.push(arr6[i], arr7[i]);
}

console.log(result2);


//Задача. Объединение двух массивов, чередуя их элементы (не закончена)

// let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

// let arr2 = [12, 44, 23, 5];

// let result = [];

// for (i = 0; i < arr1[i] || i < arr2[i]; i++) {
//     result.push(arr1[i]);
//     result.push(arr2[i]);
// }

// console.log(result);