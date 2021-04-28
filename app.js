const { crearArchivo, imprimirTabla } = require("./controlador/multiplicar");
const { argv } = require("./config/yargs");
let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];
switch (comando) {
    case "crear":
        crearArchivo(base, limite)
            .then(resultado => console.log(resultado))
            .catch(err => console.log(err));

        break;
    case "listar":
        imprimirTabla(base, limite)
            .catch(err => console.log(err));
        break;

    default:
        console.log("Comando no válido");
        break;
}