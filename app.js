// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let titulo = document.querySelector('h1');
titulo.innerHTML = "Elige al Amigo Secreto";

let segundotitulo = document.querySelector('h2');
segundotitulo.innerHTML = "Ingrese un nombre y clickear el botón";

let listaDeNombres = [];
listaDeNombres.push('null');

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre === "") {
        alert("EL NOMBRE INGRESADO ES INVÁLIDO");
        document.getElementById('amigo').focus();
    } else {
        listaDeNombres.push(nombre);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();

        let li = document.createElement('li');
        li.textContent = nombre;
        document.getElementById('listaAmigos').appendChild(li);
    }
}

function sortearAmigo() {
    let valor2 = generarAmigo();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo seleccionado es "${listaDeNombres[valor2]}"`;
    ejecutarCelebracion();
    setTimeout(() => {
        vaciarLista();
    }, 10000);




    const nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo) {
        const lista = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);
        document.getElementById('amigo').value = '';
    }
}

function generarAmigo() {
    const lista = document.getElementById('listaAmigos');
    const cantidad = lista.children.length;
    console.log(`cantidad = ${cantidad}`);
    const valor = Math.floor(Math.random() * cantidad + 1);
    console.log(`valor = ${valor}`);
    return valor;
}

function vaciarLista() {
    let vaciar = document.getElementById('resultado');
    vaciar.innerHTML = "";

    let lista = document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    document.getElementById('amigo').focus();
}

