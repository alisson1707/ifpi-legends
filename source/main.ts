import { Personagens } from "./personagens";
import { Batalha } from "./batalhaUm";

const heroi = new Personagens("Iallen", 100, 20, 5, 12, "Guitarra do Trovão");
const vilao = new Personagens("Sekef", 90, 15, 3, 8, "Controle Mental");

heroi.mostrarStatus();
vilao.mostrarStatus();

const batalha = new Batalha(heroi, vilao);
batalha.iniciar();
