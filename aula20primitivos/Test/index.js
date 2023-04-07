function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  
   const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    
    pessoas.push({
     nome: nome.value,
     sobrenome: sobrenome.value,
     peso: peso.value,
     altura: altura.value,
    });

   resultado.innerHTML += 
   `<p> <strong> Sr(a). </strong>${nome.value} ${sobrenome.value}</p>
    <p><strong>pesa</strong> ${peso.value} <strong>Kg,</p>
    <p> e tem </strong>${altura.value} <strong>metros de altura.</strong> </p>`
   
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();

//Uma maneira de envio de formulário
  /*
  form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1);
    console.log("oi");
  };*/
