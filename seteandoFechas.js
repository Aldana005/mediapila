// definición de variables
const flechaIzq = document.querySelector("#flechaIzq"),
    flechaDer = document.querySelector("#flechaDer"),
    fechaDomingo = document.querySelector("#fechaDomingo"),
    fechaLunes = document.querySelector("#fechaLunes"),
    fechaMartes = document.querySelector("#fechaMartes"),
    fechaMiercoles = document.querySelector("#fechaMiercoles"),
    fechaJueves = document.querySelector("#fechaJueves"),
    fechaViernes = document.querySelector("#fechaViernes"),
    fechaSabado = document.querySelector("#fechaSabado"),
    mesActual = document.querySelector("#mes"),
    anioActual = document.querySelector("#anioActual"),
    mesesTreinta = [11, 4, 6, 9],
    mesesTreintant = [1, 3, 5, 7, 8, 10, 12],
    fecha = new Date(),
    anio = fecha.getFullYear(),
    mes = fecha.getMonth() + 1,
    dia = fecha.getDate(),
    diaSemana = fecha.getDay(),
    fechaHoy = `${dia}/${mes}/${anio}`

let fechaSelec = fecha,
    anioSelec = anio,
    mesSelec = mes,
    diaSelec = dia,
    limiteMes, limiteMesAnterior, fechasSemana, limiteMesAnteriorS


limiteMes = sacarLimiteDias(mes, anio)
limiteMesAnterior = sacarLimiteDias((mes > 1) ? mes - 1 : 12, anio)
limiteMesSelec = limiteMes
limiteMesAnteriorS = limiteMesAnterior

// Funciones auxiliares
function anioBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)
}

function sacarLimiteDias(mes, anio) {
    if (mesesTreinta.includes(mes)) return 30
    if (mesesTreintant.includes(mes)) return 31
    return anioBisiesto(anio) ? 29 : 28
}


//Asignación de Mes
function setearMes(mes) {
    const nombres = [
        "", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    mesActual.textContent = nombres[mes];
    anioActual.textContent = anioSelec;
}


//----- SETEAR SEMANA EN CALENDARIO
function setearDias(diaSemana, dia, limiteMes, limiteMesAnterior) {

    let inicioSemana = dia - diaSemana;
    let fechasSemana = [];

    for (let i = 0; i < 7; i++) {
        let diaCalculado = inicioSemana + i;

        if (diaCalculado < 1) {
            diaCalculado = limiteMesAnterior + diaCalculado;
        }

        if (diaCalculado > limiteMes) {
            diaCalculado = diaCalculado - limiteMes;
        }

        fechasSemana.push(diaCalculado);
    }

    fechaDomingo.textContent = fechasSemana[0];
    fechaLunes.textContent = fechasSemana[1];
    fechaMartes.textContent = fechasSemana[2];
    fechaMiercoles.textContent = fechasSemana[3];
    fechaJueves.textContent = fechasSemana[4];
    fechaViernes.textContent = fechasSemana[5];
    fechaSabado.textContent = fechasSemana[6];
}



//----- BOTONES SEMANA SIG / ANT
let adelantarSemana = function () {

    diaSelec += 7;

    if (diaSelec > limiteMesSelec) {
        diaSelec -= limiteMesSelec;
        (mesSelec < 12) ? mesSelec++ : (mesSelec = 1, anioSelec++);
        limiteMesAnteriorS = limiteMesSelec;
        limiteMesSelec = sacarLimiteDias(mesSelec, anioSelec);
    }

    const nuevaFecha = new Date(anioSelec, mesSelec - 1, diaSelec);
    const nuevoDiaSemana = nuevaFecha.getDay();

    setearMes(mesSelec);
    setearDias(nuevoDiaSemana, diaSelec, limiteMesSelec, limiteMesAnteriorS);

    if (typeof actualizarColoresSemana === "function") actualizarColoresSemana();
};


let retrocederSemana = function () {

    diaSelec -= 7;

    if (diaSelec < 1) {
        (mesSelec > 1) ? mesSelec-- : (mesSelec = 12, anioSelec--);
        limiteMesSelec = sacarLimiteDias(mesSelec, anioSelec);
        diaSelec += limiteMesSelec;
    }

    const nuevaFecha = new Date(anioSelec, mesSelec - 1, diaSelec);
    const nuevoDiaSemana = nuevaFecha.getDay();

    setearMes(mesSelec);
    setearDias(nuevoDiaSemana, diaSelec, limiteMesSelec, limiteMesAnteriorS);

    if (typeof actualizarColoresSemana === "function") actualizarColoresSemana();
};

flechaDer.addEventListener("click", adelantarSemana);
flechaIzq.addEventListener("click", retrocederSemana);



// Debés usar el día real de la fecha seleccionada.
const fechaInicial = new Date(anioSelec, mesSelec - 1, diaSelec);
const diaSemanaInicial = fechaInicial.getDay();

setearMes(mesSelec);
setearDias(diaSemanaInicial, diaSelec, limiteMes, limiteMesAnterior);
