// 1 - Arrays
// const lista = [1, 2, 3, 4, 5];
// console.log(lista);

// console.log(typeof lista);

// const itens = [`Michel`, 17, true, 18.1, []];
// console.log(itens);

// // 2 - Mais sobre arrays
// const arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[6]);

// 3 - Propriedades
// const numbers = [5, 3, 4];
// console.log(numbers.length);
// console.log(numbers[`length`]);

// const myName = `Michel`
// console.log(myName.length);

// // 4 - Métodos
// const otherNumbers = [1, 2, 3];
// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);

// const text = `algum texto`;
// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf(`t`));

// 5 - Objetos
// const person = {
//     name: `Michel`,
//     age: 17,
//     job: `Programador`,
// }

// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: `VW`,
    model: `Tiguan`,
    km: 20000,
};

// console.log(car);

// car.doors = 4;
// console.log(car);

// delete car.km
// console.log(car);

// 7 - Mais sobre objetos
// const obj = {
//     a: `Teste`,
//     b: true
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// };

// Object.assign(obj2, obj);
// console.log(obj2);
// console.log(obj);

// // 8 - Conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));
// console.log(Object.entries(car));

// // 9 - Mutação
// const a = {
//     name: `Michel`
// };

// const b = a;

// console.log(a);
// console.log(b);
// console.log(a === b);

// a.age = 17;
// console.log(a);
// console.log(b);

// delete b.age
// console.log(a);
// console.log(b);

// 10 - Loops em arrays
// const users = [`Michel`, `Matheus`, `João`, `Felipe`];

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando os usúarios: ${users[i]}`);
// }

// // 11 - Push e pop
// const array = [`a`, `b`, `c`];
// array.push(`d`);
// console.log(array);

// console.log(array.length);

// array.pop();
// console.log(array);

// const itemRemovido = array.pop();
// console.log(itemRemovido);
// console.log(array);

// array.push(`z`, `x`, `y`);

// console.log(array);

// 12 - Shift e Unshift
// const letters = [`a`, `b`, `c`];
// const letter = letters.shift();
// console.log(letter);
// console.log(letters);

// letters.unshift(`p`, `q`, `r`, `s`);
// letters.unshift(`z`);
// console.log(letters);

// // 13 - IndexOf e lastIndexOf
// const myElements = [`Morango`, `Maça`, `Abacate`, `Pera`, `Abacate`];
// console.log(myElements.indexOf(`Maça`));
// console.log(myElements.indexOf(`Abacate`));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf(`Abacate`)]);

// console.log(myElements.lastIndexOf(`Abacate`));

// console.log(myElements.indexOf(`Mamão`));
// console.log(myElements.lastIndexOf(`Mamão`));

// 14 - Slice
// const testeSlice = [`a`, `b`, `c`, `d`, `e`, `f`];

// const subArray = testeSlice.slice(2, 4);

// console.log(testeSlice);
// console.log(subArray);

// const subArray2 = testeSlice.slice(2, 4 + 1);
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);
// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);
// console.log(subArray4);

// const myName = [`m`, `i`, `c`, `h`, `e`, `l`];
// const subMyName = myName.slice(0, 2 + 1);
// console.log(myName);
// console.log(subMyName);

// 15 - forEach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numeros) => {
//     console.log(`O numero é: ${numeros}`)
// });

// const posts = [
//     {title: `Primeiro post`, category: `PHP`},
//     {title: `Segundo post`, category: `JavaScript`},
//     {title: `Terceiro post`, category: `Python`},
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
// });

// 16 - Includes
// const brands = [`BMW`, `VW`, `Fiat`];
// console.log(brands.includes(`Fiat`));
// console.log(brands.includes(`Porsche`));

// if(brands.includes(`KIA`) === true) {
//     console.log(`Essa marca está registrada em nosso sistema!`)
// } else {
//     console.log(`Essa marca não está registrada em nosso sistema!`)
// };

// 17 - Reverse
// const reverseTest = [1, 2, 3, 4, 5];
// console.log(reverseTest);
// reverseTest.reverse();
// console.log(reverseTest);

// 18 - trim
// const trimTest = `  Testando \n  `;
// console.log(trimTest);
// console.log(trimTest.trim());

// console.log(trimTest.length);
// console.log(trimTest.trim().length);

// 19 - PadStart
// const testePadStart = `1`;
// console.log(testePadStart);
// const newNumber = testePadStart.padStart(4, `0`);
// console.log(newNumber);

// const testPadEnd = newNumber.padEnd(10, `0`);
// console.log(testPadEnd);

// 20 - Split
// const frase = `O rato roeu a roupa do rei de roma`;

// const arrayDaFrase = frase.split(` `);
// console.log(arrayDaFrase);

// const frase2 = `O michel é muito lindo`
// const arrayDaFrase2 = frase2.split(` `);
// console.log(arrayDaFrase2);

// // 21 - Join
// const fraseDeNovo = arrayDaFrase.join(` `);
// console.log(fraseDeNovo);
// const fraseDeNovo2 = arrayDaFrase2.join(` `);
// console.log(fraseDeNovo2);

// const itensParaComprar = [`Mouse`, `Teclado`, `Monitor`];
// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(`, `)}.`;
// console.log(fraseDeCompra);

// // 22 - repeat
// const palavra = `Testando `;
// console.log(palavra.repeat(5));