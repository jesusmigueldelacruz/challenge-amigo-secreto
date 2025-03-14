let amigos = [];
let sorteados = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
    alert("El nombre solo debe contener letras.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);
  input.value = "";

  actualizarLista();
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre) => {
    let item = document.createElement("li");
    item.textContent = nombre;

    item.style.padding = "10px";
    item.style.margin = "5px 0";
    item.style.backgroundColor = "#f0f0f0";
    item.style.borderRadius = "8px";
    item.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
    item.style.textAlign = "center";

    lista.appendChild(item);
  });

  lista.style.display = "block"; // Asegurar que la lista se muestre
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un amigo antes de sortear.");
    return;
  }

  if (sorteados.length === amigos.length) {
    alert("Todos los amigos han sido sorteados.");
    document.getElementById("btnReiniciar").style.display = "block"; 
    return;
  }

  let amigoSorteado;
  do {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceAleatorio];
  } while (sorteados.includes(amigoSorteado));

  sorteados.push(amigoSorteado);

  let lista = document.getElementById("listaAmigos");
  lista.style.display = "none";

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto 🎉</li>`;
  resultado.style.fontSize = "20px";
  resultado.style.color = "#05DF05";
  resultado.style.fontWeight = "bold";
  resultado.style.textAlign = "center";

  if (sorteados.length === amigos.length) {
    document.getElementById("btnReiniciar").style.display = "block";
  }
}

function reiniciarLista() {
  amigos = [];
  sorteados = [];
  
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("listaAmigos").style.display = "block"; 
  document.getElementById("btnReiniciar").style.display = "none"; 
}
