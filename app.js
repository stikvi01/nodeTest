import chalk from "chalk";

//Fist try, but difficult to change the joke 
// const log = console.log;
// log(chalk.blue('What ') + chalk.red('did ') + chalk.yellow('the') + chalk.green('ocean') + chalk.black('say') + chalk.white('to') + chalk.cyan('the')
// + chalk.magenta('beach?')+ chalk.blue('Nothing')+ chalk.red('it')+ chalk.yellow('just')+ chalk.green('waved.'));

// Better version 
const joke = "What did the ocean say to the beach,\n Nothing it just waved"
const words = joke.split(/\s+/);
let output="";

for( const word of words){
    output = output + chalk.rgb(getRandomColor(), getRandomColor(), getRandomColor())(word + " ");
}

console.log(output);

function getRandomColor(){
    return Math.floor(Math.random()* 256)
}

