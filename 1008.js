let numero = parseInt(lines.shift());
let qtdHoras = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());
let salario = qtdHoras * valorHora

console.log('NUMBER = ' + numero + '\nSALARY = U$ ' + salario.toFixed(2))