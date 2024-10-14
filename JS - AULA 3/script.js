

// declarar variavel
var idade = 27

console.log(idade)

// tipos 
var nome = 'Pedro'

console.log(typeof nome) // mostra que é uma string 

// metodos e propriedades strings
var nome = 'Pedro '
var sobrenome = 'Vilela'
var nomeCompleto = nome.concat(sobrenome) // concatena as variaveis

var resultado = nome.length // mostra o tamanho da string
var resultado = nome.charAt(3) // mostra o valor na posição 3 da string

console.log(resultado) // propriedade 
console.log(nomeCompleto)

// metodos e propriedades de numbers
var numero = 10.1023

var resultado = numero.toFixed(2) // transforma o numero em duas casa decimais
var resultado = numero.toString() // transforma o numero em string

console.log(resultado)

// funções 
 // funçao declarar
function somarNumeros(n1, n2){ //os parametros sao variaveis da funçao
    return n1 + n2;
}

var resultado = somarNumeros(2, 5)

console.log(resultado)

// arrow function

var somarNumeross =(n1,n2)  =>{
    return n1 + n2
}

console.log(somarNumeross(3,3))

// acessando e manipulando a DOM

var titulo = document.querySelector('h1') // selecionar pelo nome da tag, id#, ou classe.
var titulo2 = document.getElementById('titulo2') // seleciona pelo id

console.log(titulo, titulo2)

// selecionando formularios

// var formulario = document.querySelector('form')

// var inputNome = formulario.nome // chamar pelo name do input

//var form = document.forms.namedItem('dados') // selecionou pelo name do formulario


//function verDados(){
 //   var nome = form.nome.value
  //  var email = form.email.value
 //  var telefone = form.telefone.value

//console.log(nome)
//console.log(email)
//console.log(telefone)
//}

// propriedade inner.html

var container = document.getElementById('container') // variavel global com valor vazio
var inputNome = document.getElementById('nome')
var inputSobrenome = document.getElementById('sobrenome')
//container.innerHTML = '<p>Olá Mundo</p>' // criou a tag

function mostrarNomeSobrenome(){

    var nome = inputNome.value
    container.innerHTML = `<p>Ola ${nome} ${sobrenome}</p>`
   // Colocar o valor do nome no input de resultado
    document.getElementById('resultado').value = `${nome} ${sobrenome}` // seleciona o eletemnto do HTML e armazena o que foi digitado no campo nome
}

// innertext

var paragrafo = document.querySelector('div p')

console.log(paragrafo.innerText)

// eventos
// get element by id
var botao = document.getElementById('btn')

function minhaFuncao(){

}

// add event listener
//botao.addEventListener('click', function(){
//})

// on change

var input = document.getElementById('nome')

input.onchange = (e) => {
    console.log(e.target.value)
}


// condicionais 

// var dia = 'calor'

// if (dia === 'frio') {
//     console.log('colocar blusa')
// } else {
//     console.log('não precisa de blusa')
// }


// function entradaNaFesta(idade, acompanhadaDosPais){
//     if(idade >= 18){
//         console.log('Permitida entrada')
//     } else {
//         if(acompanhadaDosPais){
//         console.log('Permitida entrada')
//         } else {
//         console.log('Entregada negada')
//         }
//     }
// }

// entradaNaFesta(15, true)


var form = document.forms.namedItem('verificaIdade');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // não recarregar a página

    var nomeUsuario = form.nome.value;
    var idadeUsuario = parseInt(form.idade.value);
    var acompanhadaDosPais = form.acompanhadoDosPais.checked; // Assumindo que é um checkbox

    verificaIdade(nomeUsuario, idadeUsuario, acompanhadaDosPais); // Chamar a função aqui
});

function verificaIdade(nome, idade, acompanhadaDosPais) {
    if (idade < 18 && !acompanhadaDosPais) {
        alert(`Olá ${nome}, você não pode entrar na festa!`);
    } else {
        alert(`Olá ${nome}, você pode entrar!`);
    }
}

// switch

var botao = document.querySelector('button');
var inputSomAnimal = document.querySelector('input');
var animalElemento = document.getElementById('animal');

function verificarAnimalPeloSom(som) {
    var animalTipo = '';

    switch(som) {
        case 'miau':
            animalTipo = 'gato';
            console.log('miau'); // Log aqui, se quiser, quando for miau
            break;
        case 'piu':
            animalTipo = 'pintinho';
            break;
        case 'mu':
            animalTipo = 'vaca';
            break;
        default: 
            animalTipo = 'animal desconhecido';
            break; // Adiciona o break para consistência
    }
    
    return animalTipo;
}

botao.addEventListener('click', () => {
    animalElemento.innerText = verificarAnimalPeloSom(inputSomAnimal.value);
});
        

//arrays

const nomes = ['Pedro'] ['Davi'] 

console.log(nomes)

// array de objetos
const pessoas = [ 
    {nome: 'Pedro', idade: 27},
    {nome: 'Davi', idade: 27},

]

const joao = pessoas[1] // acessar o objeto

console.log(joao)


const animais = [
    'Urso','Macaco', 'Tigre', 'Tartaruga', 'Crocodilo'
]

//metodo indexOf
const posicaoMacaco = animais .indexOf('Macaco') // buscou a posição

const macaco = animais[posicaoMacaco] // entrou no array animais 

// forEach

const nomeIdade = [ 
    {nome: 'Pedro', idade: 27, cargo: 'Desenvolvedor Servicenow'},
    {nome: 'Davi', idade: 27, cargo: 'Desenvolvedor Servicenow'},
    {nome: 'Felipe', idade: 27, cargo: 'Desenvolvedor Servicenow'}
]

nomeIdade.forEach(function(nomeIdade){ // =>
    console.log(`${nomeIdade.nome} tem ${nomeIdade.idade} anos e trabalha como ${nomeIdade.cargo}`)
})


const menorIdade = [ 
    {nome: 'Pedro', idade: 27},
    {nome: 'Davi', idade: 12},
    {nome: 'Felipe', idade: 17}
]
const localizarMenor = menorIdade.filter(menorIdade => menorIdade.idade < 18 )
// find localiza a primeira ocorrencia, o FILTER localiza todos
console.log(localizarMenor)

// loops

for (let i = 0; i <= 10; i++) { // i começa no 0 e verifica s eé menor que 10 
    // e acrecenta o 1, depois por conta do ++ adiciona mais um
    console.log(1)
}

const frutas = ['banana', 'maça', 'laranja']

for (let i = 0; i <= frutas; i++){
    console.log(frutas[i])
}


//  objetos 


// formualrio e tabela com array

const formulario = document.forms.namedItem('dados') // selecionou o formulario
const tabela = document.querySelector('table') // tabela 
const corpoTabela = document.getElementById('corpo_tabela') // corpo
const cadastros = [] // array vazio

function Cadastro(nomeCompleto, telefone, email) {
    this.nomeCompleto = nomeCompleto
    this.telefone = telefone
    this.email = email
}

function salvaCadastro(cadastro){
    cadastros.push(cadastro)
}

function verificaCadastros(){
    if(cadastros.length < 1){
        tabela.setAttribute('class', 'registros_tabela')
    } else {
        tabela.removeAttribute('class')
    }
}

function atualizaTabela(){
    corpoTabela.innerHTML =''
    cadastros.forEach((cadastro, i) => corpoTabela.innerHTML +=`
    <tr> 
        <td> ${cadastro.nomeCompleto}</td>
        <td> ${cadastro.telefone}</td>
        <td> ${cadastro.email}</td>
        <td onclick="excluirCadastro(${i})" 
        class="excluir"> 
        X
        </td>
    </tr>
    `) 

    verificaCadastros()
}

function excluirCadastro(cadastro) {
    if (window.confirm('Deseja mesmo excluir esse cadastro?')) {
        cadastros.splice(cadastro, 1)
        atualizaTabela()
    }
}

function limpaCampos(){
    formulario.reset()
    formulario.nome_completo.focus()
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()


const cadastro = new Cadastro(
    formulario.nome_completo.value,
    formulario.telefone.value,
    formulario.email.value,
)

salvaCadastro(cadastro)
atualizaTabela()
limpaCampos()


})


//  Riquisição API CEP XMLHTTP REQUEST

import { buscarEndereco } from "../buscarEndereco.js"
const formularioEndereco = document.forms.namedItem('endereco')
const inputCEP = document.getElementById('cep')

inputCEP.addEventListener('change', (evento) =>{
    const CEP = evento.target.value

    buscarEndereco(CEP, preencherCamposDeEndereço, tratarErro)
})

function preencherCamposDeEndereço(endereco) {
    formularioEndereco.rua.value = endereco.street
    formularioEndereco.bairro.value = endereco.neighborhood
    formularioEndereco.cidade.value = endereco.city
    formularioEndereco.estado.value = endereco.state
}

function tratarErro(erro) {
    const mensagemErro = erro.errors[8].message
    alert(mensagemErro)
    
}

// promisses

console.log('Pedir Uber')

const motoristaAceitouCorrida = true

const promessa = new Promise((resolve, reject) =>{
    if (motoristaAceitouCorrida) {
        return resolve('Corrida aceita!')
    } else {
        return reject('Corrida cancelada')
    }

})

promessa.then((resposta) => {console.log(resposta)})
.catch((erro) => console.log(erro))
.finally(() => console.log('Finalizado'))

console.log('Aguardando..')

// CRUD