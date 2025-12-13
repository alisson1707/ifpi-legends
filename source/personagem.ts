export class Personagem {
    private nome: string;
    private hp: number;
    private hpMax: number;
    private ataque: number;
    private defesa: number;
    private velocidade: number;
    private poderEspecial: string;

    constructor(nome: string, hp: number, atk: number, def: number, vel: number, poder: string) {
        this.nome = nome;
        this.hp = hp;
        this.hpMax = hp;
        this.ataque = atk;
        this.defesa = def;
        this.velocidade = vel;
        this.poderEspecial = poder;
    }

    getNome(): string { return this.nome; }
    getHp(): number { return this.hp; }
    getHpMax(): number { return this.hpMax; }
    getDefesa(): number { return this.defesa; }
    getVelocidade(): number { return this.velocidade; }
    estaVivo(): boolean { return this.hp > 0; }

    // Recebe dano
    receberDano(valor: number): void {
        this.hp -= valor;
        if (this.hp < 0) this.hp = 0;
    }

    // Chance de defesa baseada na velocidade
    defender(): boolean {
        const chance = 0.2 + this.velocidade * 0.005; 
        return Math.random() < chance;
    }

    // Ataca outro personagem
    atacar(alvo: Personagem): { descricaoAtaque: string; defesa?: string; dano?: number } {
        const descricaoAtaque = `${this.nome} atacou usando ${this.poderEspecial}!`;
        let defesaMsg: string | undefined = undefined;
        let dano: number | undefined = undefined;

        if (alvo.defender()) {
            defesaMsg = `${alvo.getNome()} se defendeu do golpe de ${this.nome}! ⚡ Velocidade: ${alvo.getVelocidade()}`;
        } else {
            dano = Math.max(this.ataque - alvo.getDefesa(), 1);
            alvo.receberDano(dano);
        }

        return { descricaoAtaque, defesa: defesaMsg, dano };
    }
}
