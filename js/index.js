//infantil A = 5 - 7 anos
//infantil B = 8-10 anos
//juvenil A = 11-13 anos
//juvenil B = 14-17 anos
//adulto = maiores de 18 anos

var age = parseInt(prompt("Digite sua idade"))

if ( age >=18 ) {
    document.body.append("Você é da categoria adulta");
} else {
 if (age >=14 && age <=17) {
    document.body.append("Você é da categoria juvenil B");
} else {
 if (age >=11 && age <=13){
    document.body.append("Você é da categoria juvenil A");
} else {
 if (age >=8 && age <=10) {
    document.body.append("Você é da categoria infantil B");
} else { 
    if (age >=5 && age <=7){
    document.body.append("Você é da categoria infantil A");
} else {
        document.body.append("Você não pertence a nenhuma categoria");}
} } } } 
