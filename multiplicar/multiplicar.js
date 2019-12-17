// requieres
const fs = require('fs');
const color = require('colors');

// const fs = require('fs');
// const fs = require('express'); -> Paquete no nativo de node
// const fs = require('./fs'); -> Archivos que nosotros escribimos

let listarTabla = (base, limite=10) => {
    
    console.log('===================================='.green);
    console.log(`tabla de ${base} al ${limite}`.green);
    console.log('===================================='.green);

    for(let i = 1; i <= limite; i++){
        console.log(`${base}*${i}=${i*base}`);
    }
    
}

let crearArchivo = (base, limite=10) =>{

    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`El valor introducido '${base}' no es un número`.red);
            return;
        }
        if(!Number(limite)){
            reject(`El valor '${limite}' no es un número`.red);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data +=`${base}*${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) 
            reject (err);
            else 
                resolve(`tabla-${base}-al-${limite}.txt`.yellow);

        });
    });
        
    
}

module.exports = {
    crearArchivo,
    listarTabla,
}