const fs = require('fs') //IMportamos el file Sistem

//ponemos la base por defecto en 5
const creatArchivoTabla =  async( base = 5, listar = false, hasta = 10) => {

    try {

        let salida = ''

        for(let i= 1; i<=hasta; i++){
            salida += (`${base} x ${i} = ${base*i} \n`)
        }
        if(listar){
            console.log("=====================")
            console.log(`   Tabla del: ${base}`)
            console.log("=====================")

            console.log(salida)
        }
        
        
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        
        return `tabla-${ base }.txt creado`
    } catch (err) {
        throw err
    }
    
}

module.exports = {
    //puede ser nuevoNombreAExportar: creatArchivoTabla  
    creatArchivoTabla 
}