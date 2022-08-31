const nome = prompt("Qual é o seu nome?")
const cor = prompt("Qual sua cor favorita?")
const citacao = prompt("Qual sua citação favorita?")
console.log(nome, cor)

// COM CONCATENAÇÃO:
console.log("O nome da pessoa é "+ nome + " e a cor favorita é "  + cor)
// COM TEMPLATE STRING:
console.log(`O nome da pessoa é ${nome}  e a cor favortita é ${cor}`)

// Coloando aspas nas aspas
console.log("O nome da pessoa é " + nome + " a cor favorita é " + cor + " e sua citação favorita é \""  + 
citacao + "\".")

// transformando em minusculo e maiusculo
const nomeMaisuculo = nome.toUpperCase()
const corMinuscula = cor.toLowerCase()
console.log(`Nome: ${nomeMaisuculo}\nCor: ${corMinuscula}`)

// contando caracteres
console.log(`Quantidade de caracteres do nome: ${nome.length}`)

// buscando caracteres
console.log(`Essa pessoa possui a letra A no nome? ${nome.includes("a")}`)

// EMAIL DE USUARIO E NOME 
const nomeUsuario = prompt("Olá, para se cadastrar nos informe seu nome!")
const emailUsuario = prompt("Agora nos diga seu email para cadastro")
const nomeUsurarioNova =(nomeUsuario.replaceAll("r", "l"))
console.log(`Olá, seu email é: ${emailUsuario.trim()}, boas vindas ${nomeUsuario.trim()}!\nO nome do usuário tem: ${nomeUsuario.length} caracteres`)
console.log(`Email válido! ${emailUsuario.includes("@")}`)
console.log(nomeUsurarioNova)

