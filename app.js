console.clear();

const {createFile} = require(`./multiplicacion`)
const argv = require(`./config or yargs/yargs`)
require('colors');

               





// const [,,arg3 = `base=5`] = process.argv; //Recuerda que arg3 es una constante, no una variable (No pienses que por estar dentro de un array y no tener nada, es una variable). Es una constante, analiza que estas usando la destructuracion
// const [,base=5] = arg3.split(`=`);



createFile(argv.b, `multiplication_table.txt`, argv.list, argv.until)
  .then(nameFile=>console.log(nameFile, `created`))
  .catch(err=>console.log(err));