//DOM - DOCUMENT OBJECT MODEL (MODELO DE OBJETO DE DOCUMENTO)

//HTML é a estrutura da casa, o css a decoração, o js a eletricidade e o DOM é a planta da casa. Consigo ver tudo que está acontecendo e posso (ler elementos através de tags, id e class; criar novos elementos; excluir elementos; modificar elementos/ modificar estilos...)

//documento.querySelector vai capturar um elemento pelo nome da tag, id ou class. 

let cabecalho = document.querySelector("header")

function mudarHeader(){
    cabecalho.style.backgroundColor = "pink"
    cabecalho.style.color = "white"
}
mudarHeader()

//-----

let primeiroTitulo = document.querySelector("h1")

function acao(){
    primeiroTitulo.style.transition = "5s"
    //primeiroTitulo.style.transform = "rotate(360deg)"
    primeiroTitulo.style.backgroundColor="yellow"
    primeiroTitulo.style.color="red"
}
acao()