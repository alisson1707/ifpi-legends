export class PersonagemUm{
    private heroi : string;
    private hp : number;
    private ataque : number ;
    private defesa : number;
    private velocidade : number;

    constructor(h: string ,hp : number , a : number, d: number, v: number){
        this.heroi = h;
        this.hp = hp; 
        this.ataque = a;
        this.defesa = d;
        this.velocidade = v;
    }
}



