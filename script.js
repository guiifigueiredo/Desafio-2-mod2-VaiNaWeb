let idade = 17
let condicaoHumana = true
let aninversario = 'setembro'

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