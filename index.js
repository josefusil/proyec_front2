/*
// alert("Esto es una advertencia")
//let confirmacin = confirm("¿Estas seguro de que confias en el proceso?")
// console.log(confirmacin)

// let marca = prompt("que marca de zapatos te gustan")
// console.log(marca)
let suEdad = parseInt(prompt("Ingrese su edad (en numeros): "))
console.log (suEdad)
if (suEdad >= 18) {
    
    alert ("Puedes entrar")
}
else if (isNaN(suEdad)) {
    alert("Porfavor escriba un numero")
}else {
    let comprobar = confirm ("¿Eres Jose Alejandro?")
    if(comprobar===true) {
        alert("Felecidades eres el programador")
    }else{
        alert ("Lastimosamente no puedes entrar")
    }
    
}

// for in es para objetos
let persona = {
    nombre:"Jose",
    apellido: "Fusil",
    edad:16
}
for (let datos in persona) {
    console.log (datos, persona[datos])
}
// for of es para arrays y strings
let banco = [
    {
        nombre:"Angel",
        apellido:"Fusil",
        cuenta: "Ahorro"
    }, 
    {
        nombre:"Angelys",
        apellido:"Fusil",
        cuenta: "corriente"
    }, 
    {
        nombre:"Mireya",
        apellido:"Diaz",
        cuenta: "ahorro"
    }, 
    {
        nombre:"Kadelys",
        apellido:"Montenegro",
        cuenta: "corriente"
    }, 
]
for (let i of banco) {
    console.log(i.nombre)
}
*/

// Juego 

const juego = {
    1: `tijera`,
    2: `piedra`,
    3: `papel`,
}
let user
let pc
let puntosUser=0
let puntosPc=0

function pedirNUm () {
let userChoose = parseInt(prompt (`Elige una opcion: 
                            \n1. Tijera
                            \n2. Piedra
                            \n3. Papel`))
console.log (userChoose)
user = juego[userChoose]
console.log(user)
alert (`El usuario escogio ${user}`)
}

function numPC () {
let pcChoose = Math.round(Math.random()*2) + 1
pc = juego[pcChoose]
console.log(pc)
alert (`la pc escogio ${pc}`)
}

let win= "¡¡¡Ganaste!!!"
let losed="Perdiste... Intenta otra vez"

function ganador () {
switch (user) {
    case pc:
        alert("Empate")
        break
    case 'tijera':
        if (pc === juego[2]){
            alert(losed)
            puntosPc++
        }
        else if(pc ===juego[3]) {
            puntosUser++
            alert(win)}
        break;
    case 'piedra':
        if (pc === juego[3]){
            alert(losed)
            puntosPc++
        }
        else if(pc ===juego[1])  {
            puntosUser++
            alert(win)}
        break;
    case 'papel' :
        if (pc === juego[1]){
            alert(losed)
            puntosPc++
        }
        else if(pc ===juego[2])  {
            puntosUser++
            alert(win)}
        break;
    default:
        alert('escriba un codigo correcto')
        break;
}
}
let ganadorpc  = 'El ganador fue la pc.'
let ganadoruser = 'Felecidades ganaste el juego'
for (let i = 0; i < 3; i++) {
    console.log(`vuelta numero ${i}`)
    pedirNUm()
    numPC()
    ganador()
    let calcularGanador = function() {
        if (puntosPc === 2) {
            alert (ganadorpc)
            return 'gano la pc'
        } else if (puntosUser === 2) {
            alert(ganadoruser)
            return 'gano el usuario'
        }
    }
    calcularGanador()
    
}