//converter polegadas em centimetros;
function converter(pol){
return pol*2.54;
}
console.log("O valor em centimetros é: " + converter(10));

// Função para converter em URL:

function url(dominio){
    return "www."+dominio+".com.br"

}
console.log(url("bauducco"));

//função que recebe uma string e retorna a mesma frase.

function copiar(frase){
    return frase+"!";
}
console.log(copiar("Tenha um bom Dia"));

// Calcular idade dos cachorros:

function idadeCachorro(idadeHumana){
    return idadeHumana*7;
}
console.log("O seu cachorro tem "+idadeCachorro(7) + " anos");

// Calcular hora de Trabalho

function hora(salario){
return salario/160;
}
console.log("Sua hora de trabalho vale: "+ hora(3500));

//Calcular IMC

function imc(peso, altura){
    return peso/(altura*altura);
}
console.log("O seu IMC é: " + imc(83, 1.70));

//função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne;


    let text = "que dia lindo";
    let result = text.toUpperCase();
    console.log(result);

    //Função que receba um parâmetro e retorne o tipo de dado deste parâmetro

    function parametro(valor){
        return typeof valor;
    }
    console.log("Este tipo de dado é um: "+parametro("carro"));
    console.log("Este tipo de dado é um: "+parametro(34));

    // função pela qual passamos o raio de um círculo e ela retorna a circunferência:

    function raio(medida){
        return 2*Math.PI*medida;
    }

    console.log("A circunferencia do circulo a partir do raio é "+ raio(15));