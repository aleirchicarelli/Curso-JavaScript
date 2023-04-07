//Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol )
/*
let nome = "Luiz";
nome = "Otávio";
console.log(nome);
*/

/*
let a = 'A';
let b = a;//Cópia
console.log(a, b)

b = 'Nada';

console.log(a, b);
*/

//Referencia (mutável) - array, object, function.

let a = [1, 2, 3];
let b = a; 
console.log(a, b);

a.push(4);// Acrescenta um valor.
console.log(a, b);

b.pop();//Remove um valor.
console.log(b); 