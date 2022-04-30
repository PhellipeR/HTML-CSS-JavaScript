// console.log('Phellipe é o melhor de todos, e tudo que ele quer ele consegue!');
// alert('Phellipe é o melhor de todos, e tudo que ele quer ele consegue!');

// let nome = 'Phellipe';
// let idade = 26;
// let pais = 'Brasil';

// console.log(nome);
// console.log(idade+ ' anos de idade!');
// console.log(pais);

// const valorIngresso = 20;

// console.log(valorIngresso);

// tipos primitivos =  tipos de referencia e tipos de valores
// usando o typeof e o nome da variavel consigo verifica o tipo dela direto no console

// let nome = 'Phellipe'; // String literal
// let idade = 26; // Number literal
// let estaAprovado = true; // Boolean
// let sobrenome = undefined ; // Undefined
// let corSelecionada = null; // Quando eu quiser redefinir um valor

//Como criar um objeto

let pessoa = {
    nome: 'Phellipe',
    idade: 26,
    estaAprovado: true,
    sobrenome: 'Rodrigues Alves da Silva'

};

console.log(pessoa);

let carro = {
    marca: 'BMW',
    modelo: 'BMW M4 2016',
    potencia: '300 Cavalos',
    cor: 'Azul',
    dono: 'Phellipe',
};

console.log(carro);

// Arrays

let familia = ['Maria Jose', 'Elinaldo Jose', 'Walter Junior', 'Priscilla', 'Phellipe'];
console.log(familia);

let nomeColega = ['Maria Clara', 26, 'Cachaceira', 'São Paulo'];
console.log(nomeColega);
console.log(nomeColega.every);

// Função Verbo + Substantivo
let corSite = "Preto";
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;


};

console.log(corSite);
resetaCor("Vermelho " ,"Escuro");
console.log(corSite);


let nome = 'Priscilla';
function alteraNome(alteraNome){

    nome = alteraNome;


}

console.log(nome);
alteraNome('Phellipe');
console.log(nome);

//2 Tipos de Funçoes no JavaScript, Executa uma tarefa e não retorna nada

function dizerNome(){
    console.log('Phellipe');
}

function multiplicarPorCinco(valor){
    return valor * 5;
}

//console.log(multiplicarPorCinco(5));

let resultado = multiplicarPorCinco(10);
console.log(resultado);

//  Comparação || = ou && = e

let media = true;
let pratica = false;
let passouAno = media && pratica ;

console.log('Pode aplicar', passouAno);






