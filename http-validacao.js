const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const manejaErros = erro => {
	throw new Error(erro.message);
};

const checaStatus = async arrayURLs => {

	try {
		const arrayStatus = await Promise
			.all(arrayURLs
			.map(async url => {
				const res = await fetch(url);
				return res.status;
		}));

		return arrayStatus;

	} catch(erro) {
		manejaErros(erro);
	}
};

const geraArrayDeURLs = array => array
	.map(link => Object
		.values(link).join());

const validaURLs = async arrayLinks => {
	const links = geraArrayDeURLs(arrayLinks);
	const statusLinks = await checaStatus(links);

	const resultados = arrayLinks.map((obj, i) => ({
		...obj, 
		status: statusLinks[i]
	}));

	return resultados;
};

module.exports = validaURLs;