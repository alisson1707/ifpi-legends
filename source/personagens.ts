export class Personagem {
    private nome: string;
    private hp: number;
    private ataque: number;
    private defesa: number;
    private velocidade: number;
    private poderEspecial: string;

    constructor(nome: string, hp: number, atk: number, def: number, vel: number, poder: string) {
        this.nome = nome;
        this.hp = hp;
        this.ataque = atk;
        this.defesa = def;
        this.velocidade = vel;
        this.poderEspecial = poder;
    }

    mostrarStatus(): void {
        console.log(`
===== STATUS DE ${this.nome} =====
HP: ${this.hp}
Ataque: ${this.ataque}
Defesa: ${this.defesa}
Velocidade: ${this.velocidade}
Poder Especial: ${this.poderEspecial}`);
    }

    atacar(alvo: Personagem): void {
        const dano = this.calcularDano(alvo);
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.getNome()} causando ${dano} de dano!`);
    }

    private calcularDano(alvo: Personagem): number {
        const bruto = this.ataque - alvo.defesa;
        return bruto > 0 ? bruto : 1; // sempre causa pelo menos 1 de dano
    }

    receberDano(valor: number): void {
        this.hp -= valor;
        if (this.hp < 0) this.hp = 0;
        console.log(`${this.nome} recebeu ${valor} de dano! HP atual: ${this.hp}`);
    }

    estaVivo(): boolean {
        return this.hp > 0;
    }

    getVelocidade(): number {
        return this.velocidade;
    }

    getNome(): string {
        return this.nome;
    }

    getHP(): number {
        return this.hp;
    }
    getAtaque(): number {
        return this.ataque;
    }
     getDefesa(): number {
        return this.defesa;
     }

    usarPoderEspecial(alvo: Personagem): void {
        const dano = this.ataque * 1.5 + this.velocidade * 0.5 - alvo.defesa * 0.3;
        const danoFinal = Math.max(this.ataque - alvo.defesa, 1); // sempre pelo menos 1
        alvo.receberDano(danoFinal);
        console.log(`${this.nome} usou ${this.poderEspecial} em ${alvo.getNome()}, causando ${danoFinal} de dano!`);
    }

    
}


