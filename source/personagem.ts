export class Personagem {
    private nome: string;
    private hp: number;
    private hpMax: number; // HP máximo
    private ataque: number;
    private defesa: number;
    private velocidade: number;
    private poderEspecial: string;

    constructor(nome: string, hp: number, atk: number, def: number, vel: number, poder: string) {
        this.nome = nome;
        this.hp = hp;
        this.hpMax = hp; // inicializa o HP máximo
        this.ataque = atk;
        this.defesa = def;
        this.velocidade = vel;
        this.poderEspecial = poder;
    }

    // Exibe status no console
    mostrarStatus(): void {
        console.log(`
===== STATUS DE ${this.nome} =====
HP: ${this.hp}/${this.hpMax}
Ataque: ${this.ataque}
Defesa: ${this.defesa}
Velocidade: ${this.velocidade}
Poder Especial: ${this.poderEspecial}`);
    }

    // Ataca outro personagem
    atacar(alvo: Personagem): string {
        const dano = this.calcularDano(alvo);
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.getNome()} causando ${dano} de dano!`);
        return this.poderEspecial; 
    }

    // Calcula dano considerando defesa do alvo
    private calcularDano(alvo: Personagem): number {
        const bruto = this.ataque - alvo.getDefesa();
        return bruto > 0 ? bruto : 1; // sempre pelo menos 1 de dano
    }

    // Recebe dano, podendo ser usado para defesa no futuro
    receberDano(valor: number): void {
        this.hp -= valor;
        if (this.hp < 0) this.hp = 0;
        console.log(`${this.nome} recebeu ${valor} de dano! HP atual: ${this.hp}/${this.hpMax}`);
    }

    // Verifica se o personagem ainda está vivo
    estaVivo(): boolean {
        return this.hp > 0;
    }

    // === GETTERS ===
    getNome(): string {
        return this.nome;
    }

    getHp(): number {
        return this.hp;
    }

    getHpMax(): number {
        return this.hpMax;
    }

    getAtaque(): number {
        return this.ataque;
    }

    getDefesa(): number {
        return this.defesa;
    }

    getVelocidade(): number {
        return this.velocidade;
    }

    // Poder especial
    usarPoderEspecial(alvo: Personagem): void {
        const danoFinal = Math.max(this.ataque - alvo.getDefesa(), 1);
        alvo.receberDano(danoFinal);
        console.log(`${this.nome} usou ${this.poderEspecial} em ${alvo.getNome()}, causando ${danoFinal} de dano!`);
    }
}
