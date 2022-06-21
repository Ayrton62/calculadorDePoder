class Personaje {
    constructor(name, race, power) {
        this.name = name
        this.race = race
        this.power = power
    }
};
const personajes = [
    {
        name: "Goku",
        race: "Saiyan",
        power: 500000,
        img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png"
    },
    {
        name: "Vegeta",
        race: "Saiyan",
        power: 495000,
        img: "https://www.pngmart.com/files/2/Vegeta-PNG-Photos.png"
    },
    {
        name: "Gohan",
        race: "Saiyan - Humano",
        power: 215000,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmjuhn-d96f723c-2abf-4a03-ae6d-9f3c034a043c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtanVobi1kOTZmNzIzYy0yYWJmLTRhMDMtYWU2ZC05ZjNjMDM0YTA0M2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ld-YmuCCfORBh5jrPUvl5Cf11JMTAF_OLTimXsSvqIQ"
    }
]

const entrenamiento = (Personaje, time) => {
    return Personaje.power * 1.05 * time;
}

let trained = prompt("¿A quién te gustaria entrenar ahora? Podrias probar con Goku, con Vegeta o con Gohan, pronto habra mas guerreros").toLowerCase();
let time = 0;
let habitacionTiempo = 0;

switch (entrenado) {
    case "goku":
        alert("Genial, el poder de Goku es de 500000 por lo que puede entrenar hasta 25 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + trained + " en esta ocasion?"))
        while (time > 25) {
            time = parseInt(prompt("Eso es demasiado tiempo para Goku, no lo salvan ni las semillas del hermitaneo, Goku puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(personajes.find(p => p.name == "Goku"), time)
        alert("Increible, el nuevo poder de Goku es de " + habitacionTiempo)
        break;
    case "vegeta":
        alert("Genial, el poder de Vegeta es de 495000 por lo que puede entrenar hasta 25 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + trained + " en esta ocasion?"))
        while (time > 25) {
            time = parseInt(prompt("Eso es demasiado tiempo para Vegeta, ni siquiera el principe de lo saiyan se banca tanto, Vegeta puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(personajes.find(p => p.name == "Vegeta"), time)
        alert("Increible, el nuevo poder de Vegeta es de " + habitacionTiempo)
        break;
    case "gohan":
        alert("Genial, el poder de Gohan es de 215000 por lo que puede entrenar hasta 15 dias")
        time = parseInt(prompt("¿Por cuantos dias te gustaria que entrene " + trained + " en esta ocasion?"))
        while (time > 15) {
            time = parseInt(prompt("Eso es demasiado tiempo para Gohan, acordate que gohan ahora estudia, Gohan puede entrenar hasta 15 dias"))
        }
        habitacionTiempo = entrenamiento(personajes.find(p => p.name == "Gohan"), time)
        alert("Increible, el nuevo poder de Gohan es de " + habitacionTiempo)
        break;
    default:
        alert("Por favor, no repitas ese nombre, no es digno de la sala del tiempo")
        break;
};
alert("Suficiente entrenamiento por ahora, regresa en un rato")











