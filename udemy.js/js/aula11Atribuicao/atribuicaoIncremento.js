/*
ATRIBUIÇÃO E INCREMENTO

 Operadores aritméticos .
+ => adição/concatenação.
++ => incrementação.
-- => decremento.
- => subtração.
* => multiplicação.
** => potenciação.
/ => divisão.
% => resto da divisão.

precedência doas operadores.
1°(),
2° **,
3° * / %, 
4° +-
*/

const { number } = require("prop-types");

// Sendo as duas variáveis number o sinal de + faz a soma.
const num1 = 10;
const num2 = 5;
console.log(num1 + num2); //Resultado = 15


// Sendo uma ou as duas variáveis string o sinal de + faz a concatenação.
const num3 = '10';
const num4 = 20;
console.log(num3 + num4);//concatenação 10 e 20/1020

const num5 = parseInt('10'); // parseInt converte string em number
const num6 = 20;
console.log(num5 + num6);//Resultado = 30

const num7 = parseFloat('10.5'); // parseFloat para números com ponto flutuante "ou inteiros"
const num8 = 20;
console.log(num7 + num8);//Resultado = 30.5

const num9 = Number('10.5'); // Number também para números com ponto flutuante "ou inteiros"
const num10 = 20;
console.log(num9 + num10);//Resultado = 30

const num11 =  10;
const num12 = Number ('Aleir');
console.log(num11 + num12);//Resultado NaN .

//Pode-se realizar varias operações.
const num13 = 10;
const num14 = 20;
const num15 = 30;
const num16 = 40;
console.log(num13 * (num14 + num15) - num16); //Resultado = 460

//incrementação "não pode usar const".
let contador = 10;
const passo = 50;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador); //Resultado = 60, 110, 160, 210

// É igual a "contador = contador + passo".
let contador1 = 10;
contador1 += 2; 
contador1 += 2; 
contador1 += 2; 
console.log(contador1); //Resultado = 16


let contador2 = 10;
contador2 *= 2; // Multiplicação
console.log(contador2); //Resultado = 20

let contador3 = 10;
contador3 **= 2; // Potenciação
console.log(contador3); //Resultado = 100

//  o incremento ou decremento pode vir pré ou pós o operador.
let contador4 = 10;
++ contador4;  // 1° faz a conta depois retorna o valor.
contador4 ++;  // 1° executa ação depois faz incremento.
console.log(contador4); //Resultado = 12

let contador5 = 10;
-- contador5; // 1° faz a conta depois retorna o valor.
contador5 --; // 1° executa ação depois faz decrementa.
console.log(contador5); //Resultado = 8

