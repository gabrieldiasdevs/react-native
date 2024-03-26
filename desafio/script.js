// let produtos = ["Computador", "Telefone", "Mouse", "Teclado"]

// console.log(produtos.length)

// produtos.splice(2, 1)

// console.log(produtos)

// let buscarItem = produtos.find(p => p === "Computador")

// if(buscarItem) {
//     console.log("ACHOUUU")
// } else {
//     console.log("NAO ACHOUUU")
// }

// produtos.splice(1, 1)

// console.log(produtos)

let numeros = [1, 3, 5, 7, 0, 9]

console.log(numeros.sort())

numeros.shift()

console.log(numeros)

console.log(numeros.reverse())

let hoje = "25/03/2024"
const [dia, mes, ano] = hoje.split("/")

console.log(dia)
console.log(mes)
console.log(ano)