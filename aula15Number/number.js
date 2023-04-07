//Padrão do JavaScript IEEE 754-2008.

let num1 = 0.7; //Number.
let num2 = 0.1; //Number.


// num1 = num1.toFixed(2)//Assim ele arredonda para 1.00.
num1 = Number(num1.toFixed(2)) //POde-se resolver com parseFloat ou com Number.

//checando assim vai dizer que é um numero inteiro, mas nõ é.
console.log(num1);
console.log(Number.isInteger(1,00))

//Mas assim dá que não, é um numero ponto flutuante.
console.log(Number.isInteger(num1))

//Método .toString converte number em string mas não altera o valor
num1 = num1.toString(); // Esse método altera o number para string

console.log(num1.toString() + num2);

console.log(num1.toString(2)); //Representação binaria do numero

// console.log(num1.toFixed(3)); //Arredondamento de valores quebrados

//Retorna false pra números quebrados (10.5), ou true para números inteiros(10)
console.log(Number.isInteger(num1));

let temp = num1 + '5';
console.log(temp)//Retorna se a operação e true ou false

//Resolvendo com operação matemática obterá um resultado mais preciso..
num1 = (( num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = (( num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = (( num1 * 100) + (num2 * 100)) / 100; //1.0

console.log(num1);
console.log(Number.isInteger(num1))

//deDeveria ser, Mas não funciona.
num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

console.log(num1);
console.log(Number.isInteger(num1))

