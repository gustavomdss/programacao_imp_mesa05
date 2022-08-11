// Numeros Randomicos

console.log (Math.random());

//Definindo e invocando uma função;

function cumprimentar(nome){
    console.log("Olá " + nome + " ,seja bem vindo!");
}
cumprimentar("Gustavo");

// Um case estranho

function cumprimentarA(nome){
    const frase = "Olá, seja bem vindo ";
    console.log(frase+nome)
}

cumprimentarA("Gustavo");
cumprimentarA("João");

//Funções que retornam valor:

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
   }
   multiplicarPorDoisESomarCinco(1);
   multiplicarPorDoisESomarCinco(5);
   const erick=5;
   multiplicarPorDoisESomarCinco(erick) ;

   const valor= multiplicarPorDoisESomarCinco(erick);
   console.log(valor);
