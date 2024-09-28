let vertebra = lines.shift();
let tipo = lines.shift();
let dieta = lines.shift();

if (vertebra == 'vertebrado') {
    if (tipo == 'ave') {
        if (dieta == 'carnivoro') {
            console.log('aguia');
        }
        else {
            console.log('pomba');
        }
    }
    else {
        if (dieta == 'onivoro') {
            console.log('homem');
        }
        else {
            console.log('vaca');
        }
    }
}
else {
    if (tipo == 'inseto') {
        if (dieta == 'hematofago') {
            console.log('pulga');
        }
        else {
            console.log('lagarta');
        }
    }
    else {
        if (dieta == 'hematofago') {
            console.log('sanguessuga');
        }
        else {
            console.log('minhoca');
        }
    }
}