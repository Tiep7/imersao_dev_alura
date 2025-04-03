idade = prompt("Quantos anos você tem?");
if(idade < 18) {
  alert("Não pode jogar !");
} else if (idade >= 18) {
  escolha_jogador = prompt("Escolha 1-pedra,2-papel ou 3-tesoura: ");
  escolha_computador = Math.floor(Math.random()*3) + 1;
  if(escolha_jogador == escolha_computador) {
    alert("Empate");
  } else if(escolha_jogador == 1 && escolha_computador == 3) {
    alert("O jogador venceu");
  } else if(escolha_jogador == 1 && escolha_computador == 2) {
    alert("O computador venceu");
  } else if(escolha_jogador == 2 && escolha_computador == 3) {
    alert("O computador venceu");
  } else if(escolha_jogador == 3 && escolha_computador == 2) {
    alert("O jogador venceu");
  } else if(escolha_jogador == 2 && escolha_computador == 1) {
    alert("O jogador venceu");
  } else if(escolha_jogador == 3 && escolha_computador == 1) {
    alert("O computador venceu");
  }
  alert("O computador escolheu " + escolha_computador);
}