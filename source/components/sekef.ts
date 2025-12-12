import { Personagem } from "../personagem";

export class Sekef extends Personagem {
    constructor() {
        super(
            "Sekef",
            95,    // hp
            30,    // ataque
            3,     // defesa
            12,    // velocidade
            "Leitura Mental"
        );
    }
}
