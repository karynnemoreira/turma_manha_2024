
//function nomedafunção
function informacoes(){
console.log("Quartou!")
}
informacoes() //ativando essa função


//DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS

// const variável = function(){

//}

// variável - nome da variável - função - parâmetro (valor 1 nome, valor 2idade, valor 3cidade){ retorno}

const cadastro = function(nome,idade,cidade){
//console.log(nome) mostrando o 1º parâmeto 
//console.log(idade) mostrando o 2º parâmeto
//console.log(cidade) mostrando o 3º parâmeto

console.log(nome, idade, cidade)
console.log(`Olá me chamo ${nome}, tenho ${idade} anos e moro na cidade de ${cidade} `) //usando o templatestring
}

cadastro(`Joy`, 20, "São Paulo" )


//FUNÇÃO COM PARÂMETRO 

//EXEMPLO 1
//O nome dessa função é cores (parâmetro,apelido)
    function cores(cor){
        console.log(cor)
    }
    cores('beyonce00548@hotmail.com') 
    //string(texto), pode ser envolvido por aspas simples, duplas com crase '', "" ou ``
    //templateString é uma string (texto) mais poderosa `${}`
  //number não é envolvido por aspas ou crase
  //boolean não é envolvido por aspas ou crase

  //EXEMPLO 2 - FUNÇÃO COM PARÂMETRO

  function mostrarAnimais(animal1, animal2, animal3){
    console.log(animal1 , animal2, animal3)
  }
  mostrarAnimais("macaco","papagaio","elefante" )
  //macaco = aniamal1
  //papagaio = animal2
  //elefante = animal3

//EXEMPLO 3 - FUNÇÃO COM PARÂMETRO

function nomeDaFuncao(valor) {
    console.log(`Mostra pra mim o meu valor ${valor}`)
}
nomeDaFuncao("1real")


//FUNÇÃO COM RETURN 

//EXEMPLO 1
function dobro(numero){
    return numero * 2
}
console.log(dobro(19))

//EXEMPLO 2
 function triplo(numero){
    return numero * 3
 }
 console.log(triplo(17))