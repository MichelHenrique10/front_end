// 1 - Métodos
// const animal = {
//     nome: `Bob`,
//     latir: function() {
//         console.log(`AU AU`);
//     }
// };

// console.log(animal.nome);
// animal.latir();

// 2 - Avançando em métodos
// const pessoa = {
//     nome: `Michel`,

//     getNome: function () {
//         return this.nome;
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.nome);
// console.log(pessoa.getNome());
// pessoa.setNome(`Matheus`);
// console.log(pessoa.getNome());

// 3 - Prototype
// const text = `asd`;
// console.log(Object.getPrototypeOf(text));

// const bool = true;
// console.log(Object.getPrototypeOf(bool));

// const arr = []
// console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre Prototype
// const myObject = {
//     a: `b`
// }

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);
// console.log(mySecondObject);
// console.log(mySecondObject.a);
// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes Básicas
// const cachorro = {
//     raca: null, 
//     patas: 4
// };

// const pastorAlemao = Object.create(cachorro);
// pastorAlemao.raca = `Pastor Alemão`;
// console.log(pastorAlemao);
// console.log(pastorAlemao.patas);

// const bullDog = Object.create(cachorro);
// bullDog.raca = `Bulldog`
// console.log(bullDog);

// 6 - Funções construtoras - Função como classe
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({});
//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// };

// const bob = criarCachorro(`Bob`, `Vira lata`);
// console.log(bob);

// const jack = criarCachorro(`Jack`, `Poodle`);
// console.log(jack);

// console.log(Object.getPrototypeOf(jack));

// 7 - Funções como classe
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro(`jake`, `Husky`);
// console.log(husky);

// // 8 - Métodos na função construtora
// Cachorro.prototype.uivar = function() {
//     console.log(`AUUUUUUU`)
// };
// console.log(Cachorro);

// husky.uivar();

// 8 - Classes ES6
// class CachorroClasse {
//     constructor(nome,raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse(`Jeff`, `Labrador`);
// console.log(jeff);

// // 10 - Mais sobre classes
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos
//         this.cor = cor
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(6, `Laranja`);
// console.log(scania);
// scania.descreverCaminhao();

// const c2 = new Caminhao(5, `Preto`);
// console.log(c2)
// c2.descreverCaminhao();


// Caminhao.prototype.motor = 4.0

// const c3 = new Caminhao(7, `Prata`);
// console.log(c3.motor);

// 11 - OverRide
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     };
// };

// const michel = new Humano(`Michel`, 18);
// console.log(michel);

// console.log(Humano.prototype.idade);

// Humano.prototype.idade = `Não definida`;
// console.log(michel.idade);

// console.log(Humano.prototype.idade);

// 12 - Symbol
class Aviao {
    constructor(marca, turbina) {
        this.marca = marca
        this.turbina = turbina
    }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;
const pilotos = Symbol();
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao(`Boeing`, 10);
console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);