const { creatArchivoTabla } = require('./helpers/multiplicar');
const { b, l, h } = require('./config/yargs')


console.clear(); //Se limpa la consola automaticamente

creatArchivoTabla( b, l, h )
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err) );