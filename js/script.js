//Carne - 400gr por pessoa + de 6 horas = 650gr
//Cerveja - 1200ml por pessoa + de 6 horas = 2000ml
//Refrigerante/Agua - 1000ml por pessoa + de 6 horas = 1500ml

//Crianças valem  1/2

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  if (validacao(duracao, adultos, criancas)) {
    resultado.innerHTML = `<p>${qtdCarne(duracao, adultos, criancas) / 1000} Kl de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja(duracao, adultos) / 355)} Latinhas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdBebida(duracao, adultos, criancas) / 2000)} Pet's de 2L de Bebidas</p>`;
  } else {
    resultado.innerHTML = `<p><b>Revise os dados</b></p>`;
  }
}

function validacao(duracao, adultos, criancas) {
  if (duracao >= 0 && adultos >= 0 && criancas >= 0) {
    return true;
  } else {
    return false;
  }
}

function qtdCarne(duracao, adultos, criancas) {
  let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  return qtdCarne;
}

function qtdCerveja(duracao, adultos) {
  let qtdCerveja = cervejaPP(duracao) * adultos;
  return qtdCerveja;
}

function qtdBebida(duracao, adultos, criancas) {
  let qtdBebida =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;
  return qtdBebida;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}