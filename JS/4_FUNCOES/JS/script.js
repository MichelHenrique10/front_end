// 1 - Criando uma função 
// function minhaFuncao() {
//     console.log(`Testando!`)
// }

// minhaFuncao();

// const minhaFuncaoEmVariavel = function() {
//     console.log(`Função em variavel`)
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro(`Imprimindo alguma coisa`);

// funcaoComParametro(`Outra função`);

// 2 - Return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, d));
// console.log(soma(500, 300));

// 3 - Escopo da Função
// let y = 10;
// function testandoEscopo() {
//     let y = 20
//     console.log(`Y dentro da função: ${y}`)
// }

// testandoEscopo();
// console.log(`Este é o Y fora da função: ${y}`)
// y = 15;
// console.log(y);
// testandoEscopo();
// console.log(y);

// 4 - Escopo aninhado
// let m = 10;

// function escopoAninhado() {
//     let m = 20
//     if(true) {
//         let m = 30

//         if(true) {
//             let m = 40

//             console.log(m)
//         }

//         console.log(m)
//     }

//     console.log(m)
// }

// escopoAninhado();
// console.log(m);

// 5 - Arrow Function
// const testeArrow = () => {
//     console.log(`Esta é uma arrow function`)
// }

// testeArrow();

// const multiplicacao = (n1, n2) => {
//     n1 = Number(prompt(`Insira o primeiro número`))
//     n2 = Number(prompt(`Insira o segundo numero`))
//     return console.log(n1 * n2)
// }

// multiplicacao();

// const parOuImpar = (n) => {
//     n = Number(prompt(`Insira um número para saber se é par ou impar.`))
//     if (n % 2 === 0) {
//         console.log(`Par`)
//         return
//     }
//     console.log(`Impar`)
//     return
// }

// parOuImpar();

// 6 - Mais sobre arrow function
// const raizQuadrada = (x) => {
//     return x*x;
// }

// console.log(raizQuadrada(10));

// const raizQuadrada2 = (x) => x*x;
// console.log(raizQuadrada2(4));

// const helloWorld = () => console.log(`Hello World!`);
// helloWorld();

// const multiplication = function(m,n) {
//     if (n === undefined) {
//         return m * 2
//     } else {
//         return m * n
//     }
// }

// console.log(multiplication(12));
// console.log(multiplication(5,2));

// const greeting = (name) => {
//     if (!name) {
//         console.log(`Olá!`)
//         return
//     }

//     console.log(`Olá ${name}!`)
// }

// greeting();
// greeting(`Michel`)

// 8 - Valor default
// const customGreeting = (name, greet = `Olá`) => {
//     return `${greet}, ${name}`
// }

// console.log(customGreeting(`Michel`));
// console.log(customGreeting(`João`, `Bom dia`));
// console.log(customGreeting(`Maria`, `Boa noite`));
// console.log(customGreeting(`Pedro`));

// const repeatText = (text, repeat = 2) => {
//     for(let i = 0; i < repeat; i++) {
//         console.log(text)
//     }
// }

// repeatText(`Testando!!!`);
// repeatText(`Agora repete 5 vezes`, 5);

// 9 - Closure
// function someFunction() {
//     let txt = `Alguma coisa`

//     function display() {
//         console.log(txt)
//     }

//     display();
// }

// someFunction();

// 10 - Mais sobre closure
// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n * m;
//     };
// };

// const c1 = multiplicationClosure(5);
// const c2 = multiplicationClosure(10);

// console.log(c1);
// console.log(c2);
// console.log(c1(5));
// console.log(c2(10));

// 11 - recursion
const untilTen = (n, m) => {
    if (n < 10) {
        console.log(`A função parou de executar!`)
    } else {

        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(100, 7);

function factorial(x) {
    if (x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 5;
const result = factorial(num);

console.log(`O fatorial do numero ${num} é ${result}`);