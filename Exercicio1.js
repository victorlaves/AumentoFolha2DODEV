var resultado
var numInteiro
RecebeValor()
console.log(numInteiro, " = ", resultado)

function RecebeValor()
{
    numInteiro = parseInt(prompt("Digite um numero"))
    if(numInteiro > 0)
    resultado = 1
    else if(numInteiro < 0)
    resultado = -1
    else
    {
       resultado = 0
    }
    return resultado
}