export function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    return media
}


export function definirStatus(media) {
  if (media < 4) return "REPROVADO";
  if (media < 6) return "RECUPERAÇÃO";
  return "APROVADO";
}