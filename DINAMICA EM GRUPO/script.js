
let banda = ["Lady", "Madonna", "Beyonce", "Rihanna", "Taylor"]

banda.push("Britney", "Florence")
//console.log(banda)

//Exemplo adicionando dois nomes utilizando o método splice.
// banda.splice(5,2,"Britney", "Florence")
// console.log(banda)


//Exemplo removendo duas nomes utilizando o método splice. 
banda.splice(5,2) //à partir da posição 5, remova 2 itens
//console.log(banda)

//Exemplo substituindo um nome utilizando o método splice. 

//    0         1          2          3         4
//[ 'Lady', 'Madonna', 'Beyonce', 'Rihanna', 'Taylor' ]

//POSIÇÃO É DIFERENTE DE ÍNDICE,SE QUERO A POSIÇÃO 3, ENTÃO O ÍNDICE É O 2
//QUERO SUBSTITUIR 1 ITEM 
//NO CASO, QUERO SUBSTITUIR A BEYONCE PELA A KATY
banda.splice(2,1,"Katy") 
//console.log(banda)

//[ 'Lady', 'Madonna', 'Katy', 'Rihanna', 'Taylor' ]

banda.pop() //remove o último
//console.log(banda)


banda.push("Demi")  //inseri no final
//console.log(banda)

banda.shift() //remove o primeiro
//console.log(banda)

banda.unshift("Shakira") // inseri no começo
console.log(banda)

banda.reverse() //Coloca os itens da array em ordem contrária
console.log(banda)




