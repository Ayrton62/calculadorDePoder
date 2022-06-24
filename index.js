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

let time = 0;
let habitacionTiempo = 0;










