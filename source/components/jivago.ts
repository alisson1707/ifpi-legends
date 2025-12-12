import { Personagem } from "../personagem";

export class Jivago extends Personagem {
    constructor() {
        super(
            "Jivago",
            85,    // hp
            30,    // ataque
            6,     // defesa
            10,    // velocidade
            "Super força"
        );
    }
}
