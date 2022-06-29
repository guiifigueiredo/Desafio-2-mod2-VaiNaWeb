let idade = 17
let condicaoHumana = true
let aninversario = 'setembro'
let nome = 'ricardo'
let sobrenome = 'valente'
//condição 1
if (idade > 18){
    console.log("você é maior de idade");
}else{
    console.log("você é menor de idade");
}


//condição 2
if (idade >= 18 && condicaoHumana == true){
    console.log("você é maior de idade e está em boas condições");
}else{
    console.log("você não é maior de idade e não está em boas condições");
}


//condição 3
if(aninversario == 'janeiro' || aninversario == 'dezembro'){
    console.log("o seu aniversário é em janeiro ou dezembro");
}else{
    console.log("o seu aniversário não é em janeiro ou dezembro");
}


//condição 4
if(nome[0] == 'r'){
    console.log("o seu nome começa com a letra R")
}else(
    console.log("o seu nome não começa com a letra R")
)

//condição 5
if(sobrenome.length > 6){
    console.log("o seu sobrenome tem mais de 6 letras");
}else{
    console.log("o seu sobrenome não tem 6 letras");
}