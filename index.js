class Personaje {
    constructor(nombre, edad, raza, poder){
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
    this.poder = poder
 }
};

let goku = new Personaje("Goku", 40, "Saiyan", 500000 );
let gohan = new Personaje("Gohan", 24, " Humano - Saiyan ", 270000 );


const entrenamiento = (Personaje, time) => {
    return Personaje.poder * 1.05 * time;
}


let entrenado = prompt("¿A quién te gustaria entrenar ahora? Podrias probar con Goku o con Gohan, pronto habra mas guerreros").toLowerCase();
let time = 0; 
let habitacionTiempo = 0; 



switch(entrenado){
    case "goku":
        alert("Genial, el poder de Goku es de 500000 por lo que puede entrenar el tiempo que desees")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + entrenado + " en esta ocasion?"))
        habitacionTiempo = entrenamiento(goku, time)
        alert("Increible, el nuevo poder de Goku es de " + habitacionTiempo)
        break;
    case "gohan":
        alert("Genial, el poder de Gohan es de 270000 por lo que puede entrenar hasta 15 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + entrenado + " en esta ocasion?"))
        while ( time > 15 ){
            time = parseInt(prompt("Eso es demasiado tiempo para Gohan, es muy arriesgado, Gohan puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(gohan, time)
        alert("Increible, el nuevo poder de Gohan es de " + habitacionTiempo)
        break;
    default:
        alert("Por favor, no repitas ese nombre, no es digno de la sala del tiempo")
        break;
};





alert("Suficiente entrenamiento por ahora, regresa en un rato")











