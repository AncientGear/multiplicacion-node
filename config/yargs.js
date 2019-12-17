const opt = {
    base:{
        demmand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
            .command('crear', 'Crea un archivo con la tabla de multiplicar con la base introducida y el limite introducido', opt)
            .help()
            .argv;


module.exports = {
    argv,
}