// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World')

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const valueOne = 1
const valueTwo = 2
console.log(valueOne + valueTwo);

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const value = 1
let isNumber = false

if (!isNaN(value)) {
    isNumber = true
}
console.log(`${isNumber ? 'É um numero' : 'Não é um Número'}`);

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const word = 'sosa'
let isString = false

if (typeof (word) == 'string') {
    isString = true
}
console.log(`${isString ? 'É uma String' : 'Não é uma String'}`);

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const trueOrFalse = true
let isBoolean = false

if (typeof (trueOrFalse) == 'boolean') {
    isBoolean = true
}
console.log(`${isBoolean ? 'É um booleano' : 'Não é um booleano'}`);

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
console.log(valueOne - valueTwo);

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
console.log(valueOne * valueTwo);

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
console.log(valueOne / valueTwo);

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let isPar = false

if (valueOne % 2 == 0) {
    isPar = true
}
console.log(`${isPar ? 'É Par' : 'É ímpar'}`);

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let isUnpaired = false

if (valueOne % 2 != 0) {
    isUnpaired = true
}
console.log(`${isUnpaired ? 'É ímpar' : 'É Par'}`);