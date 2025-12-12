import { Personagem } from "../personagem";

export class Batalha {
  constructor(protected p1: Personagem, protected p2: Personagem) {}

  getP1(): Personagem { return this.p1; }
  getP2(): Personagem { return this.p2; }
}
