const primeiroTitulo = document.querySelector("h1")

function acao(){
    primeiroTitulo.style.color = "red"
    primeiroTitulo.style.backgroundColor="yellow"
    primeiroTitulo.style.fontSize="6rem"
    primeiroTitulo.style.transition="3s"
}
 acao()

//querySelectorAll,  vai capturar os elementos pelos nomes das tags, class ou id e retornará em um array, chamado nodeList.

const lista = document.querySelectorAll("li")
console.log(lista)

lista[0].style.color = "green"
lista[1].style.color = "red"
lista[2].style.color = "purple"


const listUl = document.querySelector("ul")
function listaUl(){
    listUl.style.listStyle="none"
}
listaUl()



//onclick: É um evento de clique, quando o usuário clicar, a função vai ser executada. Esse eventos são passados nas tags, especialmente em button. 

const imagem = document.querySelector("img");
console.log(imagem)

function mostrarImagem(){
    imagem.src="https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/09/hqdefault.jpg"
}


//----- outro exemplo usando onclick

const tituloH2 = document.querySelector("h2")

function estiloDoH2(){
    tituloH2.style.color = "blue";
    tituloH2.style.backgroundColor = "pink"
}
