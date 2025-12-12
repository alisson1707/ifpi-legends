import { Personagem } from "../personagem";

export class Iallen extends Personagem {
    constructor() {
        super(
            "Iallen",
            100,     // hp
            20,      // ataque
            5,       // defesa
            10,      // velocidade
            "Guitarra do Trovão"
        );
    }
}
