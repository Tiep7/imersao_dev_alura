rodada = 1;
while(rodada <= 3) {
  console.log("Rodada: " + rodada);
  escolha_jogador = prompt("Nível " + rodada + ", escolha vidro(1,2 ou 3)? ");
  piso_quebrado = Math.floor(Math.random()*3) + 1;
  if(escolha_jogador == piso_quebrado) {
    alert("O vidro quebrou");
    alert("Fim de jogo !");
    break;
  } else if(escolha_jogador > 3) {
    alert("Tente novamente, digite um número entre 1,2 e 3");
    rodada--;
  } else {
    alert("Passou de rodada, o piso danificado estava no " + piso_quebrado);
  }
  rodada++;
}
if (rodada == 4) {
  alert("---Parabéns---")
}