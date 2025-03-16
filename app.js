//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigoSecreto = []; //gerar lista vazia


function adicionarAmigo() { //função para adicionar amigo pelo html
    
    let amigo = document.getElementById("amigo"); //guardar na memoria o nome do amigo inserido
    //getElementById comando para pegar o valor inserido no html    
    if (amigo.value == ' ') { //impede que a lista conte um valor vazio
        alert ("Por favor, insira um nome.");
        return;
    }
    if (listaAmigoSecreto.includes(amigo.value)) { //impede que a lista contenha dois nomes exatamente iguais
        alert ("nome já utilizado");
        return;
    }
    
    const listaNomes = document.getElementById("listaAmigos"); //guarda a lista de nomes inseridos
    listaAmigoSecreto.push(amigo.value);
    console.log(listaAmigoSecreto);
    listaNomes.innerHTML += `<li> ${amigo.value} </li>`; //exibe os nomes inseridos em formato de lista
    limparCampo ()
}

function sortearAmigo() {
    if (listaAmigoSecreto.length < 2) {
        alert ('Minimo de participantes 2.');
        return
    }
    
    let aleatorio = Math.floor(Math.random() * listaAmigoSecreto.length); //gerando um indice aleatoriao da lista
    let amigoSorteado = listaAmigoSecreto[aleatorio]; //pegando o nome referente ao indice sorteado
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Seu amigo secreto é ${amigoSorteado}`;
    apagarNomes()
    
}

function limparCampo () {
    amigo = document.getElementById("amigo");
    amigo.value = " ";    
}

function apagarNomes() {
    amigo = document.getElementById("amigo");
    amigo.value = " ";
    listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = amigo.value;
}
    


