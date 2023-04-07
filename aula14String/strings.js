//string = texto

// let umaString = 'Um "texto"'; //Usar aspas diferentes (Um "texto").
// let umaString = "Um \"texto\""; // Escape (Um "texto").
// let umaString = "Um \texto"; // Espaço, (Um      exto). 
// let umaString = "Um \\texto"; // Um (\texto).

//---------------01234567 
let umaString = 'Um texto';

console.log(umaString[4]) //exibir a posição numérica do carácter no palavra.(e)

 console.log(umaString.charAt(4)) //Da o mesmo resultado (e) e se colocar um numero inexistente da undefined  

//Todos terão o mesmo resultado (CONCATENAÇÃO).
console.log(umaString.concat(' em um lindo dia') )

console.log(umaString +' em um lindo dia')

console.log(`${umaString} em um lindo dia`) 
  
//Buscar índice da palavra (a primeira letra ' Um texto').

console.log(umaString.indexOf('o')) //Rs. 7

console.log(umaString.lastIndexOf('m' , 3)) //Rs. 1

//Expressões regulares =/Um/
console.log(umaString.match(/[a-z]/g)) //Retorna todas as letras minusculas Rs. [ 'm', 't', 'e', 'x', 't', 'o' ].

console.log(umaString.search(/[a-z]/)) //Similar ao indexOff Rs.1.

console.log(umaString.search(/x/)) //Similar ao indexOff Rs.5-.

let umaString1 = "O rato roeu a roupa de rei de roma";

console.log(umaString1.replace(/r/g, 'p')) //Substitui um caracteres. r por p

console.log(umaString1.length) //Quantidade de caracteres Rs. 34 

console.log(umaString1.length -3) //Remove caractere Rs. 31.

console.log(umaString1.slice(2, 6)) //Determina o incio e o fim  Rs. rato. 

//Ambos dão o mesmo resultado Rs. Rato.
console.log(umaString1.slice(-2, umaString1 - 6));

console.log(umaString1.slice(-2, -6)); // Abreviado

console.log(umaString1.substring(-2, umaString1 - 6));

console.log(umaString1.split(' ')); // Rs.['O', 'rato', 'roeu',  'a', 'roupa', 'de','rei',   'de' 'Roma']

console.log(umaString1.split(' ', 2));//Rs. [ 'O', 'rato' ]

console.log(umaString1.split(' ', 3));//Rs. [ 'O', 'rato', 'roeu' ]

console.log(umaString1.split('r')); // Rs.[ 'O ', 'ato ', 'oeu a ', 'oupa de ', 'ei de oma' ]

console.log(umaString1.toUpperCase());//\\muda para maiúsculas Rs. O RATO ROEU A ROUPA DE REI DE ROMA

console.log(umaString1.toLowerCase());//\\muda para  Minúsculas Rs. o rato roeu a roupa de rei de roma
