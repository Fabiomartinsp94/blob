---
title: "Usando Markdown para criar conteúdo em um blog"
date: "2021-08-03"
author: "Guilherme"
description: "é uma sintaxe usada para padronizar e facilitar a criação de conteúdo textual em HTML. E neste post listaremos várias funcionalidades básicas e comumente utilizada para facilitar a utilização desta sintaxe."
---

# Usando Markdown para criar conteúdo em um blog
__Markdown__ é uma sintaxe usada para padronizar e facilitar a criação de conteúdo textual em HTML. E neste post listaremos várias funcionalidades básicas e comumente utilizada para facilitar a utilização desta sintaxe.

> O Markdown funciona como um conversor de texto para HTML: os caracteres não-alfabéticos são traduzidos como `<b>`, `<i>` e `<a href>`, etc. Já os textos sem formatação entram como parágrafo simples `<p>`.

- [Titulação](#titulação)
- [Ênfase](#ênfase)
- [Links](#links)
- [Listas de itens](#items)
- [Imagens](#imagens)
- [Citação](#citação)
- [Código](#código)
- [Tabela](#tabela)
- [Conclusão](#conclusão)

## Titulação

```
# Título <h1>
## Título <h2>
### Título <h3>
#### Título <h4>
##### Título <h5>
###### Título <h6>
```
## Ênfase

Para adicionar ênfase ao conteúdo que será escrito, usa-se o asterisco  `*`  ou traço-baixo (_underline_)  `_`:

-   **Negrito**: adicione dois asteriscos ****texto**** ou dois traços-baixos __**texto**__ no início e no fim do conteúdo.
-   **Itálico**: adicione apenas um asterisco *_texto_* ou um traço-baixo __texto__ no início e no fim do conteúdo.

> Este é um exemplo de um texto que possui uma ênfase em ****negrito****, e outro em _itálico_.

## Links

Existem duas formas de inserir link em Markdown, através de um  **link direto**  ou usando um  **texto-âncora**:

-   **Texto-âncora**: utilize os caracteres  `[]()`, adicionando entre chaves o texto que você quer que apareça, e entre os parênteses, o endereço de destino, no formato  `[exemplo](https://exemplo.com/)`.
    
-   **Link direto**: envolva o endereço da web em chaves  `<>`. O endereço ficará visível e será clicável pelo usuário. O endereço em forma de link direto tem o formato  `<https://exemplo.com/>`.
    

> Este é um  [link em formato de texto](https://google.com.br), e este é um link direto  <https://google.com.br/>.

É interessante notar que o link, pelo menos no Chrome, irá abrir uma nova aba.

## Items

Para listas não ordenadas, utilize um asterisco  `*`  na frente do item da lista:

```
* Item 1
* Item 2
* Item 3
```

Para listas ordenadas, utilize o número do item seguido de ponto  `.`  :

```
1. Item 1
2. Item 2
3. Item 3
```

As listas acima serão exibidas dessa maneira, respectivamente:

*  Item 1
*   Item 2
*   Item 3

1.  Item 1
2.  Item 2
3.  Item 3

## Imagens

O código para inserir uma imagem no conteúdo é semelhante ao código de inserir links-âncora, adicionando um ponto de exclamação  `!`  no início do código, como no exemplo abaixo:

```
![Alt ou título da imagem](URL da imagem)
```

> Esta é uma linha com uma imagem personalizada  ![Eddie Feliz](https://pipz.com/static/images/blog/eddie.png).
> 
> Imagens grandes podem estar em linhas individuais, para serem exibidas em maior tamanho.

## Citação

Para transformar um texto em uma citação ou comentário, semelhante ao código HTML  `<blockquote>`, utilize o sinal  `>`  no início da linha que será formatada:

```
>Este é um *blockquote*. O sinal usado abre e fecha este código no HTML. 
>Para adicionar mais uma linha à citação, basta teclar Enter para um novo
>código sinal. Isso gerará um novo parágrafo dentro do *blockquote*.
>Códigos de **negrito**, _itálico_ e <https://links.com> funcionam aqui.
```

Como aparece no HTML:

> Este é um  _blockquote_. O sinal usado abre e fecha este código no HTML. Para adicionar mais uma linha à citação, basta teclar Enter para um novo código sinal. Isso gerará um novo parágrafo dentro do  _blockquote_. Códigos de  **negrito**,  _itálico_  e  [https://links.com](https://google.com/)  funcionam aqui.

## Código

Há dois modos de adicionar trechos de código ao Markdown:

-   **Código em linha**  (_inline_): adicione um acento grave  `ˋ`  no início e no final do código.
-   **Múltiplas linhas de código**: envolva as linhas de código com três acentos graves  `ˋˋˋ`  ou três tils  `~~~`.

```
 Esta é uma linha que contém um ˋcódigoˋ.

ˋˋˋ
Esta é uma linha de código
 ˋˋˋ
```

Para especificar que tipo de linguagem está sendo apresentada no bloco de códigos adicionando o nome da linguagem de programação após o  `ˋˋˋ`  ou  `~~~`, por exemplo  `~~~javascript`  ou  `~~~ruby`. Veja nos exemplos abaixo:

```
~~~javascript
Esta é uma linha de código em Javascript.
~~~

~~~php
Esta é uma linha de código em PHP.
~~~

~~~html
Esta é uma linha de código em HTML.
~~~
```

~~~javascript
Esta é uma linha de código em Javascript.
~~~

~~~php
Esta é uma linha de código em PHP.
~~~

~~~html
Esta é uma linha de código em HTML.
~~~

> Aqui está a lista de  [linguagens suportadas](http://pygments.org/languages/)  pelo Pygments.

## Tabela

Escolha os títulos das colunas e use  `|`  para delimitar as colunas. Depois, utilize hífen  `-`  na segunda linha para indicar que acima estão os títulos das colunas, usando novamente o  `|`  para delimitar colunas. Veja um exemplo abaixo:

```
Exemplo   | Valor do exemplo
--------- | ------
Exemplo 1 | R$ 10
Exemplo 2 | R$ 8
Exemplo 3 | R$ 7
Exemplo 4 | R$ 8
```

Como aparece no  **HTML**:

Exemplo   | Valor do exemplo
--------- | ------
Exemplo 1 | R$ 10
Exemplo 2 | R$ 8
Exemplo 3 | R$ 7
Exemplo 4 | R$ 8


Para especificar o tipo de alinhamento que deseja ter nas tabelas, utilize  `:`  ao lado do campo horizontal de hífens  `---`, na segunda linha da sua tabela. Veja abaixo:

-   **Alinhado a esquerda**: usar  `:`  no lado esquerdo (alinhamento padrão);
-   **Alinhado a direita**: usar  `:`  no lado direito;
-   **Centralizado**: usar  `:`  dos dois lados.

Veja no exemplo:

```
Alinhado a esquerda | Centralizado | Alinhado a direita
:--------- | :------: | -------:
Valor | Valor | Valor
```

Alinhado a esquerda | Centralizado | Alinhado a direita
:--------- | :------: | -------:
Valor | Valor | Valor

## Conclusão

O **Markdown** facilita muito na hora de customizar arquivos de texto diretamente no HTML, fornecendo várias opções para deixar o texto mais legível e organizado, isso acaba agregando muito valor para arquivos de documentação, por exemplo.

Apesar de aqui somente estar listado comportamentos mais básicos, ainda é possível fazer vários esquemas diferentes, como por exemplo diagramas **UML** e **Flow Charts**.

Todas as postagens do **Blob** serão feitas utilizando o markdown e conforme nós evoluirmos adicionaremos ainda mais funcionalidades nesta lista, facilitando e unificando o conhecimento. 
