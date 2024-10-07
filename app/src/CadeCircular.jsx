class CadeCircular  {
    #pontos = [
        {nome: 'A', x: 0, y: 0,horarioChegada: 0},
        {nome: 'B', x: 0, y: 0,horarioChegada: 0},
        {nome: 'C', x: 0, y: 0,horarioChegada: 0},
        {nome: 'D', x: 0, y: 0,horarioChegada: 0},
        {nome: 'E', x: 0, y: 0,horarioChegada: 0},
        {nome: 'F', x: 0, y: 0,horarioChegada: 0},
    ]
    #yourPos=0;
    constructor(raio) {
        
    }
    get yourPos(){return this.#yourPos;}
    set yourPos(value){this.#yourPos=value;}
    get nomes (){ return this.#pontos.map(ponto => ponto.nome);}
    get pontos (){return this.#pontos;}
    PontobyIndex(index){return this.#pontos[index];}
    
}
const CadeCircular2 = new CadeCircular();
export default CadeCircular2;