/*
function pessoas(nome, sobrenome, idade, civil) {
  return { nome, sobrenome, idade, civil };
}
const cliente1 = pessoas("João", "Pereira", "45 anos", "é Solteiro");
const cliente2 = pessoas("Maria", "Antonieta", "55 anos", " é casada");
const cliente3 = pessoas("José", "Henrique", "15 anos", "é viúvo");
const cliente4 = pessoas("Matheus", "Pereira", "22 anos", "é divorciado");

console.log(cliente1.nome, cliente1.sobrenome, cliente1.idade, cliente1.civil);
console.log(cliente2.nome, cliente2.sobrenome, cliente2.idade, cliente2.civil);
console.log(cliente3.nome, cliente3.sobrenome, cliente3.idade, cliente3.civil);
console.log(cliente4.nome, cliente4.sobrenome, cliente4.idade, cliente4.civil);
*/

const pessoa1 = {
 nome: 'Luiz',
 sobrenome: 'Miranda',
 idade: 25,

 fala() {
  console.log(`${this.nome} ${this.sobrenome} tem' ${this.idade} 'anos'`)
 }
};

pessoa1.fala();