const chalk = require("chalk");
const fs = require("fs");

const extraiLinks = texto => {
	const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
	const grupos = [...texto.matchAll(regex)];

	const arrayResultados = grupos.map(grupo => ({ [grupo[1]]: grupo[2] }));
	
	return arrayResultados.length === 0 ? "Não há links nesse texto." : arrayResultados;
};

const trataErro = erro => {
	throw new Error(erro.code, "Não há arquivo no caminho");
};

const pegaArquivo = async caminho  => {
	const encoding = "utf-8";
	
	try {
		const texto = await fs.promises.readFile(caminho, encoding);
		return extraiLinks(texto);
	} catch(erro) {
		trataErro(chalk.red(erro));
	}
};

module.exports = pegaArquivo;