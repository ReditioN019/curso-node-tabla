const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es hasta que numero llega la tabla'
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true; //si no hay error return true
    })
    .argv;

module.exports = argv;