let opciones = {
    base: {
        demand: true,
        alias: "b",
        desc: "la base de la tabla de multiplicar"
    },
    limite: {
        alias: "l",
        default: 10,
        desc: "límite de la tabla de multiplicar"
    }
}
const argv = require("yargs")
    .command("crear", "Crea un archivo con la tabla de multiplicar", opciones)
    .command("listar", "Lista la tabla de multiplicar", opciones)
    .help()
    .argv;

module.exports = { argv }