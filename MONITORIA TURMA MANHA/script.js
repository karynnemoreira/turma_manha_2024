// function semana(){
//     console.log("Segunda")
// }
// semana()

// //-----

// let cantora = "Mariah"
// function mostrarCantora(reservandoesselocal){
// console.log(`é a top das tops ${reservandoesselocal}`)
// }

// mostrarCantora(cantora)//chamando a variável

// //--- 
// function multiplicar(reservarn1, reservarn2){
//     return reservarn1 * reservarn2
// }
// console.log(multiplicar(4, 18))

// //---

// function ifood(comida1, comida2, comida3){
//     return `Coloquei no carrinho  ${comida1}, ${comida2} e ${comida3}`
// }

// let comidas = ifood("hamburguer", "pizza", "strogonoff")
// console.log(comidas)


// //CONDIÇÃO IF, ELSE, ELSE IF 

// //if e else, são duas opções somente, verdade ou mentira
// let animal = "gato"

// if(animal == "canguru"){
// console.log("Você adivinhou meu animal favorito")
// } else{
//     console.log("Você chutou errado")
// }

// //------ else if, nos dar mais opções de escolha

// let cor = "verde"

// if(cor == "amarelo"){
// console.log("Você adivinhou minha cor favorita")
// } 
// else if(cor == "verde"){
// console.log("Também gosto dessa cor")
// }
// else if(cor == "azul"){
// console.log("Amo essa cor")
// }
// else{
//     console.log("Você chutou errado")
// }


//---- operadores

let a = '3' //aqui é um 3 string

if(a === 3){ //aqui ta perguntando se o '3' é igual a 3 (NÃO SÃO IGUAIS)
console.log("Hoje é sexta")
} else{
    console.log("Que triste")
}

//== compara se os valores são iguais 
// === compara se o valor e o tipo são iguais


let b = 'Maria' //aqui é uma string

if(b !== 3){ //aqui ta perguntando se "Maria" é diferente de 3 
console.log("Meu nome é Maria")
} else{
    console.log("Você não acertou meu nome")
}

// != se o valor é diferente(Maria é diferente de 3? )
// !== se o valor e o tipo são diferentes (Maria string é diferente de 3 number? 


//LOOPS - LAÇOS DE REPETIÇÃO, ENQUANTO FOR VERDADE EXECUTE ISSO. 

//1 é o valor inicial; enquanto o valor for menor ou igual a 10; acrescente 1 valor nesse número
for(let numero = 1; numero <= 10; numero++){
console.log(numero)
}

//++ incremento , somar 1 (uma unidade) valor
// numero = numero + 1  - forma mais completa de escrever
//<= menor ou igual


//contagem regressiva
for(let numeroNovo = 10; numeroNovo >= 1; numeroNovo--){
    console.log(numeroNovo)
    }

    //NÃO FAÇA ISSO! VAI DAR LOOP - NÃO TIRE O COMENTÁRIO DO CONSOLE.LOG


for(let fazendoLoop = 1; fazendoLoop <= 10; fazendoLoop--){
    //console.log (fazendoLoop)
    }
// 0 - 1 = -1 
// -1 -1 = -2 
// -2 - 1 = -3 
//TODO O VALOR NEGATIVO É MENOR QUE POSITIVO +

// -- DECREMENTO - RETIRE UM VALOR (1 UNIDADE) 
// FAZENDOLOOP = FAZENDOLOOP - 1