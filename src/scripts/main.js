AOS.init();

function getNextBirthday() {
  const today = new Date();
  const currentYear = today.getFullYear();
  let birthday = new Date(`${currentYear}-07-13T00:00:00`);

  // Se já passou do aniversário neste ano, define para o próximo ano
  if (today > birthday) {
    birthday = new Date(`${currentYear + 1}-07-13T00:00:00`);
  }

  return birthday.getTime();
}

const timeStampDoEvento = getNextBirthday();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diaEmMs) / horaEmMs
  );
  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Feliz aniversário!";
  }
}, 1000);
