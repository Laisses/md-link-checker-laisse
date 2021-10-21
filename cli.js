const chalk = require("chalk");
const pegaArquivo = require("./index.js");
const validaURLs = require("./http-validacao");

const caminho = process.argv;

const processaTexto = async caminhoDeArquivo => {
	const resultado = await pegaArquivo(caminhoDeArquivo[2]);
	if (caminho[3] ==="validar") {
		console.log(chalk.yellow("links validados"), await validaURLs(resultado));
	} else {
		console.log(chalk.yellow("lista de links"), resultado);
	}
};

processaTexto(caminho);

//npm run cli validar