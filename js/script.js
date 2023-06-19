//pegar os elementos do HTML via DOM
const soma = document.getElementById('soma');
const subtracaoAB = document.getElementById('subtracaoAB');
const subtracaoBA = document.getElementById('subtracaoBA');
const multiplicacao = document.getElementById('multiplicacao');
const divisaoAB = document.getElementById('divisaoAB');
const divisaoBA = document.getElementById('divisaoBA');
const potenciaANaB = document.getElementById('potenciaANaB');
const potenciaBNaA = document.getElementById('potenciaBNaA');
const raizA = document.getElementById('raizA');
const raizB = document.getElementById('raizB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');
const porcentagemAB = document.getElementById('porcentagemAB');
const porcentagemBA = document.getElementById('porcentagemBA');
const smedia = document.getElementById('media');

soma.innerHTML = 0;
subtracaoAB.innerHTML = 0;
subtracaoBA.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoAB.innerHTML = 0;
divisaoBA.innerHTML = 0;
potenciaANaB.innerHTML = 0;
potenciaBNaA.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemAB.innerHTML = 0;
porcentagemBA.innerHTML = 0;
media.innerHTML = 0;

//construir as funções com os cálculos
function calcularSoma(a, b) {
  return a + b;
}

function calcularSubtracaoAB(a, b) {
  return a - b;
}

function calcularSubtracaoBA(a, b) {
  return b - a;
}

function calcularMultiplicacao(a, b) {
  return a * b;
}

function calcularDivisaoAB(a, b) {
  return (a / b).toFixed(2);
}

function calcularDivisaoBA(a, b) {
  return (b / a).toFixed(2);
}

function calcularPotenciaANaB(a, b) {
  return a ** b;
}

function calcularPotenciaBNaA(a, b) {
  return b ** a;
}

function calcularRaizA(a) {
  return Math.sqrt(a).toFixed(2);
}

function calcularRaizB(b) {
  return Math.sqrt(b).toFixed(2);
}

function calcularFatorialA(a) {
  var soma = 1;
  if (Number.isInteger(a) == true) {
    while (a > 0) {
      soma = soma * a;
      a--;
    }
    return soma;
  } else {
    alert('O PARÂMETRO NÃO É UM NÚMERO INTEIRO');
    return 0;
  }
}

function calcularFatorialB(b) {
  var soma = 1;
  if (Number.isInteger(b) == true) {
    while (b > 0) {
      soma = soma * b;
      b--;
    }
    return soma;
  } else {
    alert('O PARÂMETRO NÃO É UM NÚMERO INTEIRO');
    return 0;
  }
}

function calcularPorcentagemAB(a, b) {
  return ((a * 100) / b).toFixed(0) + '%';
}

function calcularPorcentagemBA(a, b) {
  return ((b * 100) / a).toFixed(0) + '%';
}

function calcularMedia(a, b) {
  return ((a + b) / 2).toFixed(2);
}

//criar a função para fazer os cálculos
function calcular() {
  const inputA = document.getElementById('primeiroNumero').value;
  const inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  console.log(calcularSoma(a, b));

  soma.innerHTML = calcularSoma(a, b);
  subtracaoAB.innerHTML = calcularSubtracaoAB(a, b);
  subtracaoBA.innerHTML = calcularSubtracaoBA(a, b);
  multiplicacao.innerHTML = calcularMultiplicacao(a, b);
  divisaoAB.innerHTML = calcularDivisaoAB(a, b);
  divisaoBA.innerHTML = calcularDivisaoBA(a, b);
  potenciaANaB.innerHTML = calcularPotenciaANaB(a, b);
  potenciaBNaA.innerHTML = calcularPotenciaBNaA(a, b);
  raizA.innerHTML = calcularRaizA(a);
  raizB.innerHTML = calcularRaizB(b);
  fatorialA.innerHTML = calcularFatorialA(a);
  fatorialB.innerHTML = calcularFatorialB(b);
  porcentagemAB.innerHTML = calcularPorcentagemAB(a, b);
  porcentagemBA.innerHTML = calcularPorcentagemBA(a, b);
  media.innerHTML = calcularMedia(a, b);
}
