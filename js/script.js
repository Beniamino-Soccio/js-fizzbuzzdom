console.log('JS OK');
//SCALETTA TRACCIA
// MILESTONE 1
/*
-Creo un ciclo che mi "conti" i numeri a partire da 1 fino a 100
-stampare in console i numeri
-calcolo se un numero è divisibile per 3 e al posto del numero ci stampo Fizz
-calcolo se un numero è divisibile per 5 e al posto del numero ci stampo Buzz
-calcolo se un numero è divisibile per 3 e per 5 e al posto del numero ci stampo FizzBuzz
*/
//milestone 2
/* 
-creiamo un elemento contenitore nel DOM
-recuperiamo l'elemento dal DOM
-stampiamo i numeri all'interno dell'elemento nel DOM
*/
//milestone 3
/* 
-personalizzare la pagina con css
*/

// !fase di preparazione
//prendo l'elemento contenitore dal DOM
const listNumbersElement = document.getElementById('list-numbers');

let list = '<ul>';

// !fase di elaborazione
//creo un ciclo che conti da 1 a 100 e stampo in consoleseguendo alcune regole:
/*
-se divisibile per 3 stampo fizz
-se divisibile per 5 stampo buzz
-se divisibile per 3 e 5 stampo fizzbuzz
*/

for (let i = 1; i <= 100; i++){
    
    if (i % 3 === 0 && i % 5 === 0){
        list += `<li class="bg-success bg-gradient bg-opacity-75 fs-6"> FizzBuzz </li>`
        console.log('FizzBuzz');
        //!fase output
        listNumbersElement.innerHTML = list;
    } else if (i % 3 === 0){
        list += `<li class="bg-warning bg-gradient bg-opacity-75 fs-5"> Fizz </li>`
        console.log('Fizz');
        //!fase output
        listNumbersElement.innerHTML = list;
    } else if (i % 5 === 0){
        list += `<li class="bg-primary bg-gradient bg-opacity-75 fs-5"> Buzz </li>`
        console.log('Buzz');
        //!fase output
        listNumbersElement.innerHTML = list;
    } else {
        list += `<li class="bg-danger bg-gradient bg-opacity-75 fs-5"> ${i} </li>`
        console.log(i);
        //!fase output
        listNumbersElement.innerHTML = list;
    }
}

