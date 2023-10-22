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
 let userChoose = parseInt(prompt (`Elige una opcion: 
                            \n1. Tijera
                            \n2. Piedra
                            \n3. Papel`))
console.log (userChoose)
let user = juego[userChoose]
console.log(user)
alert (`El usuario escogio ${user}`)
let pcChoose = Math.round(Math.random()*2) + 1
let pc = juego[pcChoose]
console.log(pc)
alert (`la pc escogio ${pc}`)
let win= "¡¡¡Ganaste!!!"
let losed="Perdiste... Intenta otra vez"
switch (user) {
    case 'tijera':
        if (pc === juego[2]){alert(losed)}
        else if(pc ===juego[3]) {alert(win)}
        else{alert(`empate`)}
        break;
    case 'piedra':
        if (pc === juego[3]){alert(losed)}
        else if(pc ===juego[1]) {alert(win)}
        else{alert(`empate`)}
        break;
    case 'papel' :
        if (pc === juego[1]){alert(losed)}
        else if(pc ===juego[2]) {alert(win)}
        else{alert(`empate`)}
        break;
    default:
        alert('escriba un codigo correcto')
        break;
}