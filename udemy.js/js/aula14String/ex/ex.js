const nome = prompt('')
document.body.innerHTML = `O seu nome é <strong> => ${nome}</strong><br />`;
document.body.innerHTML += `O seu nome tem => <strong>${nome.length}</strong> letras<br />`;
document.body.innerHTML += `O segunda letra do seu nome é => <strong>${nome.charAt(1)}</strong><br />`;
document.body.innerHTML += `O primeiro índice da letra A do seu nome é N° => <strong> ${nome.indexOf('a')}</strong><br />`;
document.body.innerHTML += `O ultimo índice da letra A do seu nome é N° => <strong>${nome.lastIndexOf('a')}</strong><br />`;
document.body.innerHTML += `Ultimas três letra do seu nome são => <strong>${nome.slice(-3)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nao são => <strong>${nome.split(' ')}</strong><br />`;
document.body.innerHTML += ` Seu nome com letras <strong>maiúsculas</strong> é => <strong>${nome.toLocaleUpperCase()}</strong><br />`;
document.body.innerHTML += ` Seu nome com letras <strong>minusculas</strong> é => <strong>${nome.toLowerCase()}</strong><br />`;

