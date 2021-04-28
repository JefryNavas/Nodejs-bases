const fs = require("fs");
var colors = require('colors');
let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej(`El valor de la base introducido '${base}' no es un número`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err)
                rej(err);
            else
                res(`tabla-${base}.txt ha sido creada!`);


        })
    })
}
let imprimirTabla = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej(`El valor de la base introducido '${base}' no es un número`)
            return;
        }
        console.log("-----------------------------------------".green);
        console.log(`TABLA DE MULTIPLICAR - ${base}`.green);
        console.log("-----------------------------------------".green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`.bgMagenta);
        }
    })
}
module.exports = { crearArchivo, imprimirTabla }