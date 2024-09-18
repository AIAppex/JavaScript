// Neste exercício, você vai criar 5 funções. Você pode escolher entre usar function ou arrow function.:
// * Soma: recebe dois números e retorna a soma
// * Subtrai: recebe dois números e retorna a diferença
// * Multiplica: recebe dois números e retorna o produto
// * Divide: recebe dois números e retorna o quociente
// * MostraResultado: recebe dois numeros e executa um console para cada operação, exibindo o nome da operação e o resultado
// Seu console deve ter o formato:
// console.log(`[nome_da_operacao] entre ${num1} e ${num2}`, fn(num1, num2))

function soma(x, y){
    return x + y
}

function subtrai(x, y){
    return x - y
}

function multiplica(x, y){
    return x * y
}

function divide(x, y){
    return x/y
}

function MostraResultado(num1, num2){
    console.log(`[soma] entre ${num1} e ${num2}`, soma(num1, num2))
    console.log(`[subtrai] entre ${num1} e ${num2}`, subtrai(num1, num2))
    console.log(`[multiplica] entre ${num1} e ${num2}`, multiplica(num1, num2))
    console.log(`[divide] entre ${num1} e ${num2}`, divide(num1, num2))
}