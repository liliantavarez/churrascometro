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

  let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtdCerveja = cervejaPP(duracao) * adultos;
  let qtdBebida =  bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p>${qtdCarne/1000} Kl de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdCerveja/355)} Latinhas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdBebida/2000)} Pet's de 2L de Bebidas</p>`

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
