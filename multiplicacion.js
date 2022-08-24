
require('colors');


const createFile = async (base, fileName, list, until)=>{
    try{
        const fs = require(`fs`);
        let salida, consola = ``;

        for(let i = 1; i<=until; i++){
            salida += `${base} ${`x`} ${i} = ${base*i}\n`;
            consola += `${base} ${`x`.green} ${i} = ${base*i}\n`;
        }
        

        if(list) console.log(consola);
            
        fs.writeFileSync(`./salida/${fileName}`, salida);
    
        return fileName;
    } catch(err){
        throw err;
    }
}

module.exports = {
    createFile
};