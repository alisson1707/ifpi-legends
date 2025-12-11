import { Personagens } from "../personagens";

export class Batalha {
    constructor(private p1: Personagens, private p2: Personagens) {}

    iniciar(): void {
        console.log("===== BATALHA INICIADA! =====");

        let turno = 1;

        while (this.p1.estaVivo() && this.p2.estaVivo()) {
            console.log(`\n--- TURNO ${turno} ---`);

            let primeiro;
            let segundo;

            // quem tem mais velocidade ataca primeiro
            if (this.p1.getVelocidade() >= this.p2.getVelocidade()) {
                primeiro = this.p1;
                segundo = this.p2;
            } else {
                primeiro = this.p2;
                segundo = this.p1;
            }

            primeiro.atacar(segundo);

            if (!segundo.estaVivo()) break;

            segundo.atacar(primeiro);

            turno++;
        }

        console.log("\n===== FIM DA BATALHA =====");

        if (this.p1.estaVivo()) {
            console.log(`${this.p1.getNome()} venceu!`);
        } else {
            console.log(`${this.p2.getNome()} venceu!`);
        }
    }
}
