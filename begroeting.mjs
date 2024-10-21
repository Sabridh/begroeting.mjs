import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


function begroeting(name) {
    let begroet = ("hello " + name)
    return begroet
}
console.log(begroeting("sabri"));

    

    

process.exit()