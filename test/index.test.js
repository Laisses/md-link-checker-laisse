const pegaArquivo = require("../index");

const arrayResult = [
	{
		FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
	}
];

describe("pegaArquivo::", () => {
	it("deve ser uma função", () => { 
		expect(typeof pegaArquivo).toBe("function");
	});

	it("deve retornar array com resultados", async () => {
		const result = await pegaArquivo("C:/Users/Laísse/Dropbox/Desenvolvimento/Alura/Cursos/Nodejs-primeira-biblioteca/test/arquivos/texto1.md");
		expect(result).toEqual(arrayResult);
	});

	it("deve retornar mensagem 'não há links'", async () => {
		const result = await pegaArquivo("C:/Users/Laísse/Dropbox/Desenvolvimento/Alura/Cursos/Nodejs-primeira-biblioteca/test/arquivos/texto1_sem_links.md");
		expect(result).toBe("Não há links nesse texto.");
	});

	it("deve lançar um erro na falta de arquivo", () => {
		const capturaErro = async () => {
			await pegaArquivo("C:/Users/Laísse/Dropbox/Desenvolvimento/Alura/Cursos/Nodejs-primeira-biblioteca/test/arquivos/");
			expect(capturaErro).toThrowError(/Não há arquivo no caminho/);
		}
	});
});
