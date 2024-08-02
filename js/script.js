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
-creiamomo un elemento contenitore nel DOM
-recuperiamo l'elemento dal DOM
-stampiamo i numeri all'interno dell ' elemento nel DOM
*/
//milestone 3
/* 
-personalizzare la pagina con css
*/

// fase ---

//creo un ciclo che conti da 1 a 100 e stampo in consoleseguendo alcune regole:
/*
-se divisibile per 3 stampo fizz
-se divisibile per 5 stampo buzz
-se divisibile per 3 e 5 stampo fizzbuzz
*/

for (let i = 1; i <= 100; i++){
    
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    } else if (i % 3 === 0){
        console.log('fizz')
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
    
}
