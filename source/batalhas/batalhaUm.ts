import { Personagem } from "../personagem";

export class Batalha {
    constructor(
        protected p1: Personagem,
        protected p2: Personagem
    ) {}

    iniciar(): void {
        console.log("===== BATALHA INICIADA! =====");

        let turno = 1;

        while (this.p1.estaVivo() && this.p2.estaVivo()) {
            console.log(`\n--- TURNO ${turno} ---`);

            // Determina quem ataca primeiro pela velocidade
            const primeiro = 
                this.p1.getVelocidade() >= this.p2.getVelocidade()
                    ? this.p1
                    : this.p2;

            const segundo = primeiro === this.p1 ? this.p2 : this.p1;

            // Primeiro ataca
            primeiro.atacar(segundo);

            if (!segundo.estaVivo()) break;

            // Segundo ataca
            segundo.atacar(primeiro);

            turno++;
        }

        console.log("\n===== FIM DA BATALHA =====");
        console.log(
            `${this.p1.estaVivo() ? this.p1.getNome() : this.p2.getNome()} venceu!`
        );
    }

    getP1() { return this.p1; }
    getP2() { return this.p2; }
}
