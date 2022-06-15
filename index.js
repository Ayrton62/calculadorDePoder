class Personaje {
    constructor(nombre, edad, raza, poder){
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
    this.poder = poder
 }
};
const personajes =[
{ "Goku" 40 "Saiyan" 500000 } 
{"Vegeta" 46, "Saiyan", 495000 }
{"Gohan" 24 " Humano - Saiyan " 270000}
]

const entrenamiento = (Personaje, time) => {
    return  * 1.05 * time;
}

let entrenado = prompt("¿A quién te gustaria entrenar ahora? Podrias probar con Goku, con Vegeta o con Gohan, pronto habra mas guerreros").toLowerCase();
let time = 0; 
let habitacionTiempo = 0; 

switch(entrenado){
    case "goku":
        alert("Genial, el poder de Goku es de 500000 por lo que puede entrenar hasta 25 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + entrenado + " en esta ocasion?"))
        while ( time > 25 ){
            time = parseInt(prompt("Eso es demasiado tiempo para Goku, no lo salvan ni las semillas del hermitaneo, Goku puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(goku, time)
        alert("Increible, el nuevo poder de Goku es de " + habitacionTiempo)
        break;
    case "vegeta":
        alert("Genial, el poder de Vegeta es de 495000 por lo que puede entrenar hasta 25 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + entrenado + " en esta ocasion?"))
        while ( time > 25 ){
            time = parseInt(prompt("Eso es demasiado tiempo para Vegeta, ni siquiera el principe de lo saiyan se banca tanto, Vegeta puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(vegeta, time)
        alert("Increible, el nuevo poder de Vegeta es de " + habitacionTiempo)
        break;
    case "gohan":
        alert("Genial, el poder de Gohan es de 270000 por lo que puede entrenar hasta 15 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + entrenado + " en esta ocasion?"))
        while ( time > 15 ){
            time = parseInt(prompt("Eso es demasiado tiempo para Gohan, acordate que gohan ahora estudia, Gohan puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(gohan, time)
        alert("Increible, el nuevo poder de Gohan es de " + habitacionTiempo)
        break;
    default:
        alert("Por favor, no repitas ese nombre, no es digno de la sala del tiempo")
        break;
};
alert("Suficiente entrenamiento por ahora, regresa en un rato")











