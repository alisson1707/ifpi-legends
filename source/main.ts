// interação
import { Sekef } from "./components/sekef";
import { Iallen } from "./components/iallen";
import { Jeferson } from "./components/jeferson";
import { Jivago } from "./components/jivago";
import { Marcos } from "./components/marcos";
import { Maykol } from "./components/maykol";
import { Maylon } from "./components/maylon";

import { Batalha } from "./batalhas/batalhaUm";
import { Personagem } from "./personagem"; // arquivo correto

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

// Pegando elementos do HTML
const select = document.getElementById("personagem") as HTMLSelectElement;
const btn = document.getElementById("iniciar") as HTMLButtonElement;
const log = document.getElementById("log") as HTMLDivElement;

// Função para escrever no log da página
function escreverLog(msg: string) {
  const p = document.createElement("p");
  p.textContent = msg;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

// Classe que adapta a Batalha para exibir HTML
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

      // Primeiro ataca
      primeiro.atacar(segundo);
      escreverLog(
        `${primeiro.getNome()} atacou ${segundo.getNome()}! HP Restante: ${segundo.getHp()}`
      );

      if (!segundo.estaVivo()) break;

      // Segundo ataca
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

// Evento do botão
btn.addEventListener("click", () => {
  log.innerHTML = ""; // limpa log

  const escolhidos = personagensDisponiveis[select.value];

  if (!escolhidos) {
    escreverLog("Erro: personagem inválido.");
    return;
  }

  const jogador = escolhidos(); // personagem escolhido no select
  const inimigo = new Iallen(); // inimigo fixo (pode trocar depois)

  const batalha = new BatalhaHTML(jogador, inimigo);
  batalha.iniciar();
});
