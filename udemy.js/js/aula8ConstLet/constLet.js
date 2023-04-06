const nome = 'Aleir';
const sobrenome = 'Chicarelli Teixeira';
const idade = 41;
const peso = 90;
const alturaEmMt = 1.80;
let indiceMassaCorporal; //peso / (altura²)
let anoNascimento;
let profissão = 'desenvolvedor web fronte-end'
let localização = 'Carangola-MG';

indiceMassaCorporal = peso / (alturaEmMt * alturaEmMt);
anoNascimento = 2023 - idade;

//Template strings ${}
console.log(`O senhor ${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso} KG`);

console.log(`tem ${alturaEmMt} de altura e seu IMC é de ${indiceMassaCorporal}`);

console.log(`${nome} nasceu em ${anoNascimento}` )

console.log(`e trabalha Como ${profissão}`)

console.log(`e mora em ${localização}` )