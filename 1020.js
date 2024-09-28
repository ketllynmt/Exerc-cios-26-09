let qtdDiasInput = parseInt(lines.shift());
let anos = qtdDiasInput / 365;
anos = Math.floor(anos);
let meses = (qtdDiasInput - anos * 365) / 30;
meses = Math.floor(meses);
let dias = (qtdDiasInput - anos * 365 - meses * 30);

console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`);