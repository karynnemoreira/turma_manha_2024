//console.log("Sextou!!")


//Estruta de uma função

//PRIMEIRO PASSO PARA A CRIAÇÃO DE UMA FUNÇÃO: DECLARAÇÃO DELA.

//function + nome para a função + () parâmetro + {tarefa/retorno - o que quero que essa função faça }

function generosMusicaisLegais(){
console.log("Rock")
console.log("Samba")
console.log("Hoje é sexta dia 12/01, dia de curtir um bom rock")
}

//SEGUNDO PASSO É CHAMAR/EXECUTAR/INVOCAR/ATIVAR ESSA FUNÇÃO

generosMusicaisLegais()


//---------DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS -------

//ESTRUTURA

//Variável const que dei o nome de frutas, essa variável está recebendo uma function
// function (reservei o local 1, local2 e local 3)

let frutas = function (fruta1, fruta2, fruta3){
//console.log(fruta1)
//console.log(fruta2)
//console.log(fruta3)
console.log(fruta1, fruta2, fruta3)
}
frutas("Goiaba", "Manga", "uva")
//()argumentos , aqui colocamos o valor no local que tá sendo reservado


//Dúvida da turma sobre let e const, mudança de valores.
// frutas = "legumes"
// console.log(frutas)


//--Ex2 de função dentro de variáveis

const soma = function(numero1, numero2,numero3){
console.log(numero1 + numero2 + numero3)
}
soma(2,65,74)
soma(14, 10, 21)

// soma = "cachorrinho caramelo" erro pq a const é uma constante e não pode ser alterada


//-----USANDO VARIÁVEIS COMO VALOR DOS PARÂMETROS-----------

let meuAnimal = "Lua" //variável que guardei o valor "Lua"

//criei a função e dei o nome mostrarMeuAnimal
function mostrarMeuAnimal(gatinha){ //parâmetro está sendo reservado com o nome gatinha
    console.log(gatinha)

}
mostrarMeuAnimal(meuAnimal) 
//ativa a função (recebendo a variável meuAnimal)


// ex

let meuNome = "Karynne"
function mostrarNome(reservadoparaonome){
console.log(reservadoparaonome)
}
mostrarNome(meuNome)


//-------FUNÇÃO COM RETORNO----  

//Ex1 
function multiplicar(n1, n2){ //CRIEI A FUNÇÃO + NOME DA FUNÇÃO + PARÂMETRO, RESERVEI 2 VALORES N1 E N2
    return n1*n2 //RETORNA O VALOR RESERVADO E MULTIPLICA COM O OUTRO VALOR RESERVADO
    
}
console.log(multiplicar(10,4)) //MOSTRA PRA MIM NO CONSOLE LOG A MULTIPLICAÇÃO DESSES DOIS VALORES (ATIVEI A MINHA FUNÇÃO E DEI OS DOIS VALORES 10,4) 


//-------------------------

//EX2 função com retorno, Fazendo uma salada de frutas
//Nesse exemplo estou utilizando os valores de uma variável, a diferença é que criei a variável DEPOIS DO RETORNO


function saladaDeFrutas(frut1,frut2,frut3,frut4,preco){
return  `Primeiro corte a ${frut1} em rodelas, em seguida tire as sementes do ${frut2} e pique em cubinhos, aproveite para fazer a mesma coisa com a ${frut3} e para finalizar acrescente o suco da ${frut4}. Estará custando ${preco} reais`
}

const copo = saladaDeFrutas ("banana", "mamão", "maçã", "laranja", 15)

console.log(copo)
