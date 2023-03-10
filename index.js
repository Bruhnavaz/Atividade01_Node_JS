import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync();
const nome = prompt("Digite seu nome: ");
console.log(`Olá ${nome}!`);

const numFav = Number(prompt("Digite a seu numero favorito: "));
const dataNas = Number(prompt("Digite o dia do seu nascimento:"));
const anoNas = Number(
  prompt("Digite os dois ultimos numeros do seu ano de nascimento:")
);
const mesNas = Number(prompt("Digite o mes do seu nascimento:"));
const idade = Number(prompt("Digite sua idade:"));
const media = parseInt(numFav + dataNas + anoNas + mesNas + idade) / 5;
const log = console.log;
log(chalk.bgMagenta("A média dos números é: ") + chalk.bold.bgBlue(media));
log(chalk.bgBlue("Seu numero da sorte é: ") + chalk.bold.bgMagenta(media.toFixed()));
