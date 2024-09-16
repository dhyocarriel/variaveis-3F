const prompt = require('prompt-sync')
const entrada = prompt();

let idade = 17;
const anoNascimento = 2007 ;
let anoAtual = 2024 ;
const nomeCompleto = "Dhyovana Carriel";

console.log("Meu nome é " + nomeCompleto + " nascida no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1
console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agencia de viagens
const ListaDeDestinos = new Array (
  "Gramado",
  "São Paulo",
  "Porto Alegre",
  "Brasilia"
);

console.log(ListaDeDestinos);
console.log(ListaDeDestinos[4]);
ListaDeDestinos.push("Coronel Vivida");
ListaDeDestinos.push("Belo Horizonte");
ListaDeDestinos.push("Salvador");
ListaDeDestinos.push("Fortaleza");
console.log (ListaDeDestinos);

var idadeComprador = entrada("Qual a sua idade?") 
var nomeComprador = entrada("Qual o seu nome?")

if(idadeComprador >=18 ) {
  console.log("Olá Sr(a)" + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Destinos disponiveis: " + ListaDeDestinos);
} else {
  console.log("Olá Sr(a)" + nomeComprador)
  console.log("Não é permitido a venda para menores de idade");
  console.log("Você é menor de idade");
}