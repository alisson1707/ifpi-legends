// interação
import { Sekef } from "./components/sekef";
import { Iallen } from "./components/iallen";
import { Jeferson } from "./components/jeferson";
import { Jivago } from "./components/jivago";
import { Marcos } from "./components/marcos";
import { Maykol } from "./components/maykol";
import { Maylon } from "./components/maylon";

import { Batalha } from "./batalhas/batalhaUm";
import { Personagem } from "./personagem";

// Dicionário com os personagens jogáveis
const personagensDisponiveis: Record<string, () => Personagem> = {
  sekef: () => new Sekef(),
  iallen: () => new Iallen(),
  jeferson: () => new Jeferson(),
  jivago: () => new Jivago(),
  marcos: () => new Marcos(),
  maykol: () => new Maykol(),
  maylon: () => new Maylon(),
};

// Pegando elementos do HTML (AGORA DOIS SELECTS)
const select1 = document.getElementById("personagem1") as HTMLSelectElement;
const select2 = document.getElementById("personagem2") as HTMLSelectElement;
const btn = document.getElementById("iniciar") as HTMLButtonElement;
const log = document.getElementById("log") as HTMLDivElement;

// Função para escrever no log
function escreverLog(msg: string) {
  const p = document.createElement("p");
  p.textContent = msg;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

// Impedir personagens iguais
function bloquearIgual() {
  if (select1.value === select2.value) {
    alert("Os personagens não podem ser iguais! Escolha outro.");
    select2.selectedIndex = 0;
  }
}
select1.addEventListener("change", bloquearIgual);
select2.addEventListener("change", bloquearIgual);

// Classe de batalha com exibição no HTML
class BatalhaHTML extends Batalha {
  iniciar(): void {
    escreverLog("=== BATALHA INICIADA ===");

    let jogador = this.getP1();
    let inimigo = this.getP2();
    let turno = 1;

    while (jogador.estaVivo() && inimigo.estaVivo()) {
      escreverLog(`--- TURNO ${turno} ---`);

      const primeiro =
        jogador.getVelocidade() >= inimigo.getVelocidade()
          ? jogador
          : inimigo;

      const segundo = primeiro === jogador ? inimigo : jogador;

      primeiro.atacar(segundo);
      escreverLog(
        `${primeiro.getNome()} atacou ${segundo.getNome()}! HP Restante: ${segundo.getHp()}`
      );

      if (!segundo.estaVivo()) break;

      segundo.atacar(primeiro);
      escreverLog(
        `${segundo.getNome()} atacou ${primeiro.getNome()}! HP Restante: ${primeiro.getHp()}`
      );

      turno++;
    }

    const vencedor = jogador.estaVivo()
      ? jogador.getNome()
      : inimigo.getNome();

    escreverLog(`=== ${vencedor} VENCEU! ===`);
  }
}

// NOVA LÓGICA DO BOTÃO (permitindo modo 1x1 manual)
btn.addEventListener("click", () => {
  log.innerHTML = "";

  const nomeJogador = select1.value;
  const nomeInimigo = select2.value;

  if (nomeJogador === nomeInimigo) {
    alert("Escolha dois personagens diferentes!");
    return;
  }

  const jogadorFactory = personagensDisponiveis[nomeJogador];
  const inimigoFactory = personagensDisponiveis[nomeInimigo];

  if (!jogadorFactory || !inimigoFactory) {
    escreverLog("Erro: personagem inválido.");
    return;
  }

  const jogador = jogadorFactory();
  const inimigo = inimigoFactory();

  escreverLog(`👤 Jogador escolheu: ${jogador.getNome()}`);
  escreverLog(`👹 Inimigo escolhido: ${inimigo.getNome()}`);

  const batalha = new BatalhaHTML(jogador, inimigo);
  batalha.iniciar();
});
