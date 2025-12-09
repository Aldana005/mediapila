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
      mesesTreinta = [11,4,6,9],
      mesesTreintant = [1,3,5,7,8,10,12],
      fecha = new Date(),
    //   para testear fechas poner dentro de los paréntesis de Date otra fecha en este formato: 1997, 8, 10, 16, 35, 0, 0 --> donde el primer numero es el año, el segundo numero de mes (que va de 0 -enero- a 11 -diciembre-), el tercero el día, el cuarto es la hora, el quinto son los minutos, y los sexto-septimos corresponden a los segundos
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
limiteMesAnterior = sacarLimiteDias((mes>1)? mes-1 : 12, anio)
limiteMesSelec = limiteMes
limiteMesAnteriorS = limiteMesAnterior

// Declaracion de funciones

function anioBisiesto (anio) {return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)}
function sacarLimiteDias(mes,anio) {if (mesesTreinta.includes(mes)) {limiteDias = 30} else if (mesesTreintant.includes(mes)) {limiteDias = 31} else {if (anioBisiesto(anio)) {limiteDias = 29} else {limiteDias = 28}} return limiteDias}



//Asignación de Mes
function setearMes(mes) {
    switch (mes) {
        case 1:
            mesActual.textContent = "Enero"
        break
        case 2:
            mesActual.textContent = "Febrero"
        break
        case 3:
            mesActual.textContent = "Marzo"
        break
        case 4:
            mesActual.textContent = "Abril"
        break
        case 5:
            mesActual.textContent = "Mayo"
        break
        case 6:
            mesActual.textContent = "Junio"
        break
        case 7:
            mesActual.textContent = "Julio"
        break
        case 8:
            mesActual.textContent = "Agosto"
        break
        case 9:
            mesActual.textContent = "Septiembre"
        break
        case 10:
            mesActual.textContent = "Octubre"
        break
        case 11:
            mesActual.textContent = "Noviembre"
        break
        case 12:
            mesActual.textContent = "Diciembre"
        break
    }
    anioActual.textContent = anioSelec
}

// Asinacion día-fecha
function setearDias (diaSemana, dia, limiteMes, limiteMesAnterior) {
    switch(diaSemana) {
        case 0:
            fechasSemana = [dia,dia+1,dia+2,dia+3,dia+4,dia+5,dia+6]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`         
        break
        case 1:
            fechasSemana = [dia-1,dia,dia+1,dia+2,dia+3,dia+4,dia+5]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]<1) {fechasSemana[i]+=limiteMesAnterior} else if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}        
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`
        break
        case 2:
            fechasSemana = [dia-2,dia-1,dia,dia+1,dia+2,dia+3,dia+4]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]<1) {fechasSemana[i]+=limiteMesAnterior} else if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}        
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`
        break
        case 3:
            fechasSemana = [dia-3,dia-2,dia-1,dia,dia+1,dia+2,dia+3]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]<1) {fechasSemana[i]+=limiteMesAnterior} else if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}        
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`
        break
        case 4:
            fechasSemana = [dia-3,dia,dia-2,dia-1,dia,dia+1,dia+2]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]<1) {fechasSemana[i]+=limiteMesAnterior} else if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}        
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`
        break
        case 5:
            fechasSemana = [dia-5,dia-4,dia-3,dia-2,dia-1,dia,dia+1]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]<1) {fechasSemana[i]+=limiteMesAnterior} else if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}        
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`
        break
        case 6:
            fechasSemana = [dia-5,dia,dia-4,dia-3,dia-2,dia-1,dia]
            for (let i = 0; i < 7; i++) {if (fechasSemana[i]<1) {fechasSemana[i]+=limiteMesAnterior} else if (fechasSemana[i]>limiteMes) {fechasSemana[i]-=limiteMes}}        
            fechaDomingo.textContent = `${fechasSemana[0]}`
            fechaLunes.textContent = `${fechasSemana[1]}`
            fechaMartes.textContent = `${fechasSemana[2]}`
            fechaMiercoles.textContent = `${fechasSemana[3]}`
            fechaJueves.textContent = `${fechasSemana[4]}`
            fechaViernes.textContent = `${fechasSemana[5]}`
            fechaSabado.textContent = `${fechasSemana[6]}`
        break
    }
}




let adelantarSemana = function () {
    diaSelec += 7
    if (diaSelec > limiteMesSelec) {
        diaSelec -= limiteMesSelec;        
        (mesSelec < 12)? mesSelec += 1 : (mesSelec = 1, anioSelec++);
        limiteMesAnteriorS = limiteMesSelec;
        limiteMesSelec = sacarLimiteDias(mesSelec, anioSelec)
    }
    setearMes(mesSelec)
    setearDias(diaSemana, diaSelec, limiteMesSelec, limiteMesAnteriorS)
}
let retrocederSemana = function () {
    diaSelec -= 7
    if (diaSelec < 1) {
        (mesSelec > 1)? mesSelec -= 1 : (mesSelec = 12, anioSelec--)       
        limiteMesSelec = sacarLimiteDias(mesSelec, anioSelec)        
        diaSelec += limiteMesSelec
    }
    setearMes(mesSelec)
    setearDias(diaSemana, diaSelec, limiteMesSelec, limiteMesAnteriorS)
}


flechaDer.addEventListener("click", adelantarSemana)
flechaIzq.addEventListener("click", retrocederSemana)
setearMes(mes)
setearDias(diaSemana, dia, limiteMes, limiteMesAnterior)
