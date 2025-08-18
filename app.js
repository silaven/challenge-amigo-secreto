// El principal objetivo de este desafío es fortalecer tus habilidades en lógica
//  de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista = document.getElementById("listaAmigos");
    
function agregarAmigo() {
    // Capturar el nombre del amigo desde la caja de texto y agregarlo a la lista
    let nombreDeUsuario = document.getElementById('amigo').value.trim();
    // Validar que el nombre no esté vacío
    if (nombreDeUsuario === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        // Ingresar a la lista el nombre
        nombreDeUsuario = document.getElementById('amigo').value.trim();
        amigos.push(nombreDeUsuario);
        limpiarCaja();
        actualizarLista();
        return
    }
}

function actualizarLista() {
    lista.innerHTML = '';
    // Recorrer el array de amigos y crear un elemento <li> por cada amigo en la lista
    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);                            
    }
}   

function sortearAmigo() {
    if (amigos.length === 0 || amigos.length <= 1) {
        alert('No hay amigos para sortear. Por favor, ingresa al menos dos amigos.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<li><strong>Amigo secreto: </strong> ${amigoSeleccionado}</li>`;   
}

// Función para limpiar la caja de texto    
function limpiarCaja(){
    document.getElementById('amigo').value = '';   // Limpia la caja de texto
    document.getElementById('resultado').innerHTML = ''; // Limpia el resultado del sorteo
}


