import { Sekef } from "./components/sekef";
import { Iallen } from "./components/iallen";
import { Jeferson } from "./components/jeferson";
import { Jivago } from "./components/jivago";
import { Marcos } from "./components/marcos";
import { Maykol } from "./components/maykol";
import { Maylon } from "./components/maylon";
import { Personagem } from "./personagem";

const camposBatalhaDiv = document.getElementById("campos-batalha") as HTMLDivElement;
const btn = document.getElementById("iniciar") as HTMLButtonElement;
const select1 = document.getElementById("personagem1") as HTMLSelectElement;
const select2 = document.getElementById("personagem2") as HTMLSelectElement;

// =====================
// Funções auxiliares
// =====================
function criarLog(titulo: string): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "batalha";
    const h4 = document.createElement("h4");
    h4.textContent = titulo;
    container.appendChild(h4);
    camposBatalhaDiv.appendChild(container);
    return container;
}

function criarBarraHp(personagem: Personagem, container: HTMLDivElement): HTMLDivElement {
    const hpContainer = document.createElement("div");
    hpContainer.className = "hp-container";

    const label = document.createElement("span");
    label.className = "hp-label";
    label.textContent = personagem.getNome();
    hpContainer.appendChild(label);

    const barra = document.createElement("div");
    barra.className = "hp-bar";

    const barraInterna = document.createElement("div");
    barraInterna.className = "hp-bar-inner";
    barraInterna.style.width = "100%";
    barra.appendChild(barraInterna);

    hpContainer.appendChild(barra);
    container.appendChild(hpContainer);

    return barraInterna;
}

function atualizarBarraHp(personagem: Personagem, barra: HTMLDivElement) {
    const porcentagem = (personagem.getHp() / personagem.getHpMax()) * 100;
    barra.style.width = `${porcentagem}%`;
    if (porcentagem > 50) barra.style.backgroundColor = "#4caf50";
    else if (porcentagem > 20) barra.style.backgroundColor = "orange";
    else barra.style.backgroundColor = "red";
}

// =====================
// Batalha 1x1
// =====================
function batalhaSimples(p1: Personagem, p2: Personagem, logContainer: HTMLDivElement): Personagem {
    let turno = 1;

    const barraP1 = criarBarraHp(p1, logContainer);
    const barraP2 = criarBarraHp(p2, logContainer);

    function escreverLog(msg: string) {
        const p = document.createElement("p");
        p.textContent = msg;
        logContainer.appendChild(p);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    escreverLog(`🗡️ Batalha: ${p1.getNome()} VS ${p2.getNome()}`);

    while (p1.estaVivo() && p2.estaVivo()) {
        escreverLog(`--- TURNO ${turno} ---`);
        const primeiro = p1.getVelocidade() >= p2.getVelocidade() ? p1 : p2;
        const segundo = primeiro === p1 ? p2 : p1;

        // Ataque do primeiro
        const res1 = primeiro.atacar(segundo);
        escreverLog(res1.descricaoAtaque);
        if (res1.defesa) escreverLog(res1.defesa);
        if (res1.dano) atualizarBarraHp(segundo, barraP2);

        if (!segundo.estaVivo()) break;

        // Ataque do segundo
        const res2 = segundo.atacar(primeiro);
        escreverLog(res2.descricaoAtaque);
        if (res2.defesa) escreverLog(res2.defesa);
        if (res2.dano) atualizarBarraHp(primeiro, barraP1);

        turno++;
    }

    const vencedor = p1.estaVivo() ? p1 : p2;
    escreverLog(`💥 Vencedor: ${vencedor.getNome()} 💥`);
    return vencedor;
}

// =====================
// Torneio simultâneo
// =====================
function torneioSimultaneo(participantes: Personagem[]) {
    let rodada = 1;
    let competidores = [...participantes];

    while (competidores.length > 1) {
        const vencedores: Personagem[] = [];

        for (let i = 0; i < competidores.length; i += 2) {
            if (i + 1 >= competidores.length) {
                vencedores.push(competidores[i]);
            } else {
                const logDiv = criarLog(`Rodada ${rodada}: ${competidores[i].getNome()} VS ${competidores[i + 1].getNome()}`);
                const vencedor = batalhaSimples(competidores[i], competidores[i + 1], logDiv);
                vencedores.push(vencedor);
            }
        }

        competidores = vencedores;
        rodada++;
    }

    criarLog("🏆 Campeão Final 🏆").appendChild(
        document.createTextNode(`🏆 CAMPEÃO: ${competidores[0].getNome()} 🏆`)
    );
}

// =====================
// Mapeamento dos personagens
// =====================
const mapaPersonagens: Record<string, () => Personagem> = {
    sekef: () => new Sekef(),
    iallen: () => new Iallen(),
    jeferson: () => new Jeferson(),
    jivago: () => new Jivago(),
    marcos: () => new Marcos(),
    maykol: () => new Maykol(),
    maylon: () => new Maylon()
};

// =====================
// Botão iniciar
// =====================
btn.addEventListener("click", () => {
    camposBatalhaDiv.innerHTML = "";

    if (select1.value === select2.value) {
        alert("Escolha personagens diferentes!");
        return;
    }

    const escolhidos: Personagem[] = [
        mapaPersonagens[select1.value](),
        mapaPersonagens[select2.value]()
    ];

    for (const key in mapaPersonagens) {
        if (key !== select1.value && key !== select2.value) {
            escolhidos.push(mapaPersonagens[key]());
        }
    }

    torneioSimultaneo(escolhidos);
});
