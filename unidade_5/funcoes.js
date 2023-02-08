function somar(num1, num2) {
  return num1 + num2;
}

console.log(somar(4, 5));
console.log(somar(245, 20));
console.log(somar(-500, 60));

function mostreNomeEIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(mostreNomeEIdade(`Michael`, 25));

function multiplicar(num1 = 1, num2 = 2) {
  return num1 * num2;
}

console.log(multiplicar());

