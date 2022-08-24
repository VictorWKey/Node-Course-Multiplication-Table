const argv = require(`yargs`)
                //option añade una opcion de comando y esta se puede ver en --help. Debido a que pusimos que este comando podria ser "b" y "base", al pasarlo como argumento en la linea de comandos (--base=5), este sera añadido al yargs.argv con el nombre "base" y el nombre "b"
                .option(`b`,{   
                    alias: `base`,
                    type: `number`,
                    demandOption: true, //Esto nos dice que el comando a fuerza debe llevar un valor, sino dara error
                    describe: `Is the base of the multiplication table`
                })
                .option(`l`,{
                    alias: `list`,
                    type: `boolean`,
                    default: false,
                    describe: `Show the multiplication table on console`
                })
                .option(`u`,{
                    alias: `until`,
                    type: `number`,
                    demandOption: true,
                    describe: `how many multiplications do you want?`
                })
                .check((argv, options)=>{  //Check es para ponerle condiciones a las opciones
                    if(isNaN(argv.b)){
                        throw `The base must be a number`
                    } 
                    if(isNaN(argv.u)){
                        throw `The until must be a number`
                    } 
                    return true; //Debemos retornar true si no hay ningun error, sino aunque no haya tirara uno, es una regla del check
                })
                .argv;

module.exports = argv; //No es necesario que sea un objeto porque solo es uno


