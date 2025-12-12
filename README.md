# 🏆 IFPI Legends – Mini RPG de Batalha  
### Simulação de Threads com Professores de ADS

Bem-vindo ao **Mini RPG de Batalha entre Professores**, um projeto criado para demonstrar, de forma divertida, conceitos de **Threads**, **concorrência** e **prioridade de execução**, usando um sistema de batalha inspirado em RPG.

Cada professor funciona como uma **thread**, com atributos próprios, disputando a CPU em batalhas automáticas.

---

## 🎯 Objetivo do Projeto

Este trabalho tem como propósito:

- 🧵 Simular *threads* utilizando personagens (professores) em **TypeScript**  
- ⚔️ Demonstrar conceitos como prioridade, quantum e competição por recursos  
- 🖥️ Criar uma **interface visual simples** para acompanhar as batalhas  

---

## 🛠️ Tecnologias Utilizadas

- TypeScript  
- HTML + CSS  
- Parcel (ou outro bundler equivalente)

---

## 📁 Estrutura do Projeto
source/
│
├── batalhas/
│ └── batalhaUm.ts
│
├── components/
│ ├── iallen.ts
│ ├── jeferson.ts
│ ├── jivago.ts
│ ├── marcos.ts
│ ├── maykol.ts
│ ├── maylon.ts
│ ├── sekef.ts
│ └── habilidades.ts
│
├── personagem.ts
├── main.ts
├── index.html
└── style.css


Cada arquivo dentro de **components/** representa um professor (uma *thread*).

---

## ⚔️ Como Funciona a Batalha

### ✔️ 1. Escolha do Personagem  
O usuário seleciona um professor para entrar no torneio.

### ✔️ 2. Início da Batalha  
A lógica funciona assim:

- O professor com **maior velocidade** ataca primeiro  
- Cada ataque mostra no log:
  - Quem atacou  
  - Nome do ataque (golpe especial)  
  - Dano causado  
  - HP restante do oponente  

### ✔️ 3. Final da Partida  
O torneio termina quando:

- ❌ O jogador perde uma batalha  
- 🏆 Ou derrota todos os professores  

---

## 🧠 Relação com Threads – Simulação

| Elemento do Jogo | Conceito de SO           |
|------------------|---------------------------|
| Velocidade       | Prioridade                |
| Turnos           | Quantum                   |
| Batalha          | Competição por CPU        |
| Logs             | Troca de contexto         |

---

## 👨‍🏫 Personagens (Professores)

Cada professor possui:

- Nome  
- HP  
- Ataque  
- Defesa  
- Velocidade  
- Golpe especial único  

### Exemplo:

```ts
export class Iallen extends Personagem {
    constructor() {
        super("Iallen", 100, 20, 5, 10, "Guitarra do Trovão");
    }
}
````

---

### 👤 Autores

- ALISSON RAMIRES SENA DA SILVA
- Deric Rodrigues de Sousa
- MARIA CLARA ALMEIDA MARTINS
- Curso: Tecnologia em Análise e Desenvolvimento de Sistemas – IFPI
- Disciplina: Sistemas Operacionais
