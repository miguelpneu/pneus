let lanceAtual = 18000;

function aumentarLance() {
  lanceAtual += 500;
  document.getElementById("lance").textContent = lanceAtual.toLocaleString("pt-BR");
}
