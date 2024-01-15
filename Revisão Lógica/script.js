// //console.log("Sextou!!")


// //Estruta de uma função

// //PRIMEIRO PASSO PARA A CRIAÇÃO DE UMA FUNÇÃO: DECLARAÇÃO DELA.

// //function + nome para a função + () parâmetro + {tarefa/retorno - o que quero que essa função faça }

// function generosMusicaisLegais(){
// console.log("Rock")
// console.log("Samba")
// console.log("Hoje é sexta dia 12/01, dia de curtir um bom rock")
// }

// //SEGUNDO PASSO É CHAMAR/EXECUTAR/INVOCAR/ATIVAR ESSA FUNÇÃO

// generosMusicaisLegais()


// //---------DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS -------

// //ESTRUTURA

// //Variável const que dei o nome de frutas, essa variável está recebendo uma function
// // function (reservei o local 1, local2 e local 3)

// let frutas = function (fruta1, fruta2, fruta3){
// //console.log(fruta1)
// //console.log(fruta2)
// //console.log(fruta3)
// console.log(fruta1, fruta2, fruta3)
// }
// frutas("Goiaba", "Manga", "uva")
// //()argumentos , aqui colocamos o valor no local que tá sendo reservado


// //Dúvida da turma sobre let e const, mudança de valores.
// // frutas = "legumes"
// // console.log(frutas)


// //--Ex2 de função dentro de variáveis

// const soma = function(numero1, numero2,numero3){
// console.log(numero1 + numero2 + numero3)
// }
// soma(2,65,74)
// soma(14, 10, 21)

// // soma = "cachorrinho caramelo" erro pq a const é uma constante e não pode ser alterada


// //-----USANDO VARIÁVEIS COMO VALOR DOS PARÂMETROS-----------

// let meuAnimal = "Lua" //variável que guardei o valor "Lua"

// //criei a função e dei o nome mostrarMeuAnimal
// function mostrarMeuAnimal(gatinha){ //parâmetro está sendo reservado com o nome gatinha
//     console.log(gatinha)

// }
// mostrarMeuAnimal(meuAnimal) 
// //ativa a função (recebendo a variável meuAnimal)


// // ex

// let meuNome = "Karynne"
// function mostrarNome(reservadoparaonome){
// console.log(reservadoparaonome)
// }
// mostrarNome(meuNome)


// //-------FUNÇÃO COM RETORNO----  

// //Ex1 
// function multiplicar(n1, n2){ //CRIEI A FUNÇÃO + NOME DA FUNÇÃO + PARÂMETRO, RESERVEI 2 VALORES N1 E N2
//     return n1*n2 //RETORNA O VALOR RESERVADO E MULTIPLICA COM O OUTRO VALOR RESERVADO

// }
// console.log(multiplicar(10,4)) //MOSTRA PRA MIM NO CONSOLE LOG A MULTIPLICAÇÃO DESSES DOIS VALORES (ATIVEI A MINHA FUNÇÃO E DEI OS DOIS VALORES 10,4) 


// //-------------------------

// //EX2 função com retorno, Fazendo uma salada de frutas
// //Nesse exemplo estou utilizando os valores de uma variável, a diferença é que criei a variável DEPOIS DO RETORNO


function saladaDeFrutas(frut1, frut2, frut3, frut4, preco) {
    return `Primeiro corte a ${frut1} em rodelas, em seguida tire as sementes do ${frut2} e pique em cubinhos, aproveite para fazer a mesma coisa com a ${frut3} e para finalizar acrescente o suco da ${frut4}. Estará custando ${preco} reais`
}

const copo = saladaDeFrutas("banana", "mamão", "maçã", "laranja", 15)

//console.log(copo)

//--------------------

//Exemplo de função com retorno - calculando o IMC

//peso, altura são os parâmetros 
function imc(peso, altura) {
    const imc = peso / (altura * altura) //peso dividido pela a altura ao quadrado (altura*altura)
    return imc //retorna o valor da variável imc
}
//console.log(imc(75, 1.65)) //console.log mostrar na tela o que está acontecendo. imc() ativando/invocando a função (54, 1.65) valores que dados para o parâmetro peso, altura.

//CONDIÇÃO - IF, ELSE, ELSE IF 

//IF = SE (SE A INFORMAÇÃO FOR VERDADEIRA, FAÇA ISSO)

//ELSE IF = SENÃO SE (USADO PARA NOS DAR MAIS OPÇÕES DE ESCOLHA)

//ELSE = SENÃO (SE TODAS AS INFORMAÇÕES FOREM FALSAS, CAI NO ELSE)

// let numeroDaSorte = 3

// if(numeroDaSorte == 3){
// console.log("Parabéns, você foi o primeiro sorteado")
// } 

// else if(numeroDaSorte == 6){
// console.log("Parabéns você foi o segundo sorteado")}

// else if(numeroDaSorte == 10){
//     console.log("Parabéns você foi o terceiro sorteado")}

// else{
//     console.log("Você não tem sorte")
// }

//OPERADORES LÓGICOS 

//! (NOT) - ELE INVERTE UM VALOR QUE É DADO A ELE 

// let segunda = true
// console.log(!segunda)

// let terca = false
// console.log(!terca)

// || (OU) - COMPARA DE UM OU O OUTRO SÃO VERDADEIROS 

// let aniversario = "Maio"

// if(aniversario == "Dezembro" || aniversario == "Janeiro" || aniversario == "Junho"){
//     console.log(`Você faz aniversário no mês de ${aniversario} `)
// }else (
//     console.log("Você não faz aniversário em Dezembro, Janeiro e Junho")
// )

// // && (E) - COMPARA SE AS DUAS OU MAIS INFORMAÇÕES SÃO VERDADEIRAS. "UMA E A OUTRA"

// let a = "Carol"
// let b = "Oliveira" 

// //  não, está recebendo Carol E não, está recebendo Oliveira
// if(a == "Karynne" && b == "Oliveira"){
// console.log("Ta tudo certo!")
// } else{
//     console.log("Respostas incorretas")
// }


//-------------

// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL
// != SE O VALOR É DIFERENTE
// !== SE O VALOR E O TIPO SÃO DIFERENTES
//  == VERIFICA SE O VALOR É IGUAL 
// === VERIFICA SE O VALOR E O TIPO SÃO IGUAIS

//------- LOOPS - laços de repetição
//  variável; condição, execução
for (let numero = 1; numero <= 10; numero++) {
    //console.log(numero)
}

//numero = numero +1 (numero ++) //abreviação

// numero = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 1 = 4 
// 4 + 1 = 5
// 5 + 1 = 6
// 6 + 1 = 7
// 7 + 1 = 8
// 8 + 1 = 9
// 9 + 1 = 10 // chegou a 10? PARA! 

//CONTAGEM REGRESSIVA 

for (let number = 10; number >= 1; number--) { //number = number - 1
    //console.log(number)
}

//OPERADORES DE ATRIBUIÇÃO
//SOMA COMPLETA =  PRECO = PRECO + 2 
//SOMA SIMPLIFICADA = PRECO +=2 


//NÚMEROS PARES 
for (let par = 0; par <= 50; par += 2) {
    //console.log(par)
}

//NÚMEROS PARES 
for (let impar = 1; impar <= 50; impar += 2) {
    // console.log(impar)
}


//ARRAY [] , cada item separado por vírgula , cada elemento possui uma posição numerada conhecida como index.

//métodos de array
let numeros = [4, 10, 5]
numeros.push(12) //inseri um item no final da array

numeros.unshift(2) //inseri um item no começo da array


numeros.shift()// remove o primeiro item da array 
console.log(numeros)

numeros.pop() //remove o último item da array
console.log(numeros)


numeros.splice(0,1) // à partir do índice 0, remove 1 item 
console.log(numeros)

numeros.splice (0, 0, 95) //à partir do índice 0, adicione o valor 95
console.log(numeros)

numeros.splice(1,1,24) //substitui o índice 1 pelo o valor 24
console.log(numeros)

