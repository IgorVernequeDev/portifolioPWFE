//Variáveis do primeiro exercício.
var valor_a = document.getElementById("valor_a")
var valor_b = document.getElementById("valor_b")
var valor_c = document.getElementById("valor_c")
var calculo = document.getElementById("calculo")

//Formação da equação e cálculo da fórmula de Bhaskara.
function bhaskara() {
    calculo.innerHTML += `<p style="color:white">A equação atual é: ${Number(valor_a.value)}x² + ${Number(valor_b.value)}x + ${Number(valor_c.value)} = 0</p>
    
    <p style="color:white">O cálculo realizado será: △ = ${Number(valor_b.value)}² - 4 . ${Number(valor_a.value)} . ${Number(valor_c.value)}</p>
    
    <p style="color:white">O valor calculado foi = ${Number(valor_b.value) ** 2 - 4 * Number(valor_a.value) * Number(valor_c.value)}</p>`
}   

//Variáveis do segundo exercício.
var nome_aluno = document.getElementById("nome_aluno")
var nota_1 = document.getElementById("nota_1")
var nota_2 = document.getElementById("nota_2")
var resultado = document.getElementById("resultado")

//Cálculo da média para descobrir a situação do aluno.
function situacao() {
    let media = (Number(nota_1.value)+Number(nota_2.value))/2
    if (media < 3)  {
        resultado.innerHTML = `<p style="color:white">${nome_aluno.value} está REPROVADO.</p>`
    }
    else if (media >= 3 && media <= 6)  {
        resultado.innerHTML = `<p style="color:white">${nome_aluno.value} está de RECUPERAÇÃO.</p>`
    }
    else {
        resultado.innerHTML = `<p style="color:white">${nome_aluno.value} está APROVADO.</p>`
    }
}

//Variáveis do terceiro exercício.
var nome = document.getElementById("nome")
var idade = document.getElementById("idade")
var dias = document.getElementById("dias")

//Cálculos para descobrir o desconto.
function resposta() {
    if (idade.value < 18) {
    res.innerHTML = `<p style="color:white">Você não tem idade o suficiente para ir ao show.</p>`
    }
    else {
        if (dias.value == 1) {
            res.innerHTML = `<p style="color:white">${nome.value} irá ao show por ${dias.value} dia(s) e pagará R$950,00</p>`
        }
        else if (dias.value == 2) {
            res.innerHTML = `<p style="color:white">${nome.value} irá ao show por ${dias.value} dia(s) e pagará R$900,00</p>`
        }
        else {
            res.innerHTML = `<p style="color:white">${nome.value} irá ao show por ${dias.value} dia(s) e pagará R$850,00</p>`
        }
    }
}