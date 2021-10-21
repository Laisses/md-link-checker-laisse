# md-link-checker-laisse

Essa biblioteca é um verificador de links para arquivos Markdown. Ela percorre o arquivo, extrai os links e verifica se eles são válidos ou estão quebrados.

Dado o seguinte exemplo markdown:

```md
São geralmente recuperados a partir de um objeto 
[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) 
que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento.
```

Você pode validar os links usando a função `pegaArquivo`:

```javascript
const result = await pegaArquivo("Caminho/do/arquivo/exemplo.md");
console.log(result);

 [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
    status: 200
  }
]
```

Beijos,
Laisse.
