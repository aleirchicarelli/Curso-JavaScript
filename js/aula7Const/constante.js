// Não podemos criar constantes com palavras reservadas
// Variáveis precisam ter nomes significativos com seu valor
//Não pode começar o nome de uma constantes com numero
//Não pode conter traços ou espaços
// No caso de nomes compostos, usa-se camelCase (nomeCliente)
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST.
// + adição; - subtração, * multiplicação, / divisão
// string = text ('oi/cinco')
//number = numero (5)

//Cost não pode ser modificada
// const nome = "João";
// nome = Paulo;
// console.log(nome);
//Let pode ser modificada

// const resultadoDuplicado = resultado * 2;
// const resultadoTriplicado = resultado * 3;


let nome = "João";
let sobrenome = "Paulo"
nome = "Pedro";
sobrenome = "Paulo"
console.log(nome, sobrenome);


const numero1 = 20;
const numero2 = "5";
const resultado1 = numero1 + numero2;
console.log(resultado1) //number com string concatenação = 205

const numero3 = 20;
const numero4 = 5;
const resultado2 = numero3 + numero4;
console.log(resultado2);// number com number operação = 25

const numero5 = 20;
const numero6 = '5';
const resultado = numero1 * numero2 // Multiplica 20x5=100
const resultadoDuplicado = resultado * 2; //Duplica o resultado = 200
console.log(resultadoDuplicado);
console.log(typeof numero5); //Identifica se o atributo é (string)
console.log(typeof numero6); // ou (number) ou NaN 