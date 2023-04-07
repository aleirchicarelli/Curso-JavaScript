const numero = Number(prompt('Digite um número!'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<h2>Raiz quadrada: ${numero ** 0.5}. </h2> `;
texto.innerHTML += `<h2>É NaN: ${Number.isNaN(numero)}. </h2> `;
texto.innerHTML += `<h2>${numero} é inteiro: ${Number.isInteger(numero)}. </h2> `;
texto.innerHTML += `<h2>Arredondando para baixo: ${Math.floor(numero)}. </h2> `;
texto.innerHTML += `<h2>Arredondando para cima: ${Math.ceil(numero)}. </h2> `;
texto.innerHTML += `<h2>Com duas casas decimais: ${numero.toFixed(2)}. </h2> `;
