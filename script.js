// Query selector tem como retorno a TAG
import { calcularMedia, definirStatus } from "./opc.js";

const linhas = document.querySelectorAll("tbody tr");

for (let i = 0; i < linhas.length; i++) {
  const linha = linhas[i];
  const tds = linha.querySelectorAll("td");

  const n1 = parseInt(tds[1].textContent);
  const n2 = parseInt(tds[2].textContent);
  const n3 = parseInt(tds[3].textContent);

  const media = calcularMedia(n1, n2, n3);

  tds[4].textContent = media.toFixed(2);
  tds[5].textContent = definirStatus(media);
}
