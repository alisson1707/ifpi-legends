// habilidades.ts
import { Personagem } from "./personagem";

// Classe base abstrata
export abstract class Habilidade {
    constructor(
        protected nome: string,
        protected danoBase: number,
        protected custoEnergia: number
    ) {}

    // Método abstrato que cada habilidade precisa implementar
    abstract usar(alvo: Personagem): string;

    // Método comum opcional
    info(): string {
        return `${this.nome} causa ${this.danoBase} de dano e custa ${this.custoEnergia} de energia.`;
    }
}

// Habilidade concreta principal
export class HabilidadeGuitarra extends Habilidade {
    private usarDescricao: string;

    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }

    usar(alvo: Personagem): string {
        return `${this.nome} foi usada em ${alvo.getNome()} causando ${this.danoBase} de dano!`;
    }
}

// Outras habilidades podem ser abstratas ou concretas também
export abstract class HabilidadeGelo extends Habilidade {
    protected usarDescricao: string;
    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }
}

export abstract class HabilidadeTelepatia extends Habilidade {
    protected usarDescricao: string;
    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }
}

export abstract class HabilidadeEletricidade extends Habilidade {
    protected usarDescricao: string;
    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }
}
export abstract class HabilidadeSuperHack extends Habilidade {
    protected usarDescricao: string;
    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }
}
export abstract class HabilidadeHellFlame extends Habilidade {
    protected usarDescricao: string;
    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }
}
export abstract class HabilidadeSuperForca extends Habilidade {
    protected usarDescricao: string;
    constructor(nome: string, danoBase: number, custoEnergia: number, usarDescricao: string) {
        super(nome, danoBase, custoEnergia);
        this.usarDescricao = usarDescricao;
    }
}


// E assim por diante para HabilidadeEletricidade, HabilidadeSuperHack, etc.
