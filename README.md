![popcorntime](https://user-images.githubusercontent.com/118381472/228959543-2732deda-e474-4b0e-8e3f-dd07867d8bca.png)


# Popcorn time: buscador de filmes


Aplicação de busca de filmes com features que buscam as informações pela api. Aplicação feita em Vite React com uso de useState, useEffect, react-router-dom e estilização feita em SASS.


![Logo](http://25.media.tumblr.com/9d6af4a7a364bea6d257b03da0ef404d/tumblr_mgyb8jcaEU1rsv495o1_500.gif)
## Stack utilizada

**Front-end:** React, SASS, Vite, HTML5, CSS3

**Back-end:** Node


## Instalação

Instale o projeto com npm

```bash
  npm create vite@latest popcorntime -- --template react
  cd popcorntime
```
    
## Documentação da API

#### Retorna todos os itens

```http
  GET https://image.tmdb.org/t/p/w500/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um filme

```http
  GET /movie/{movie_id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



## Demonstração

Gifs com navegação nas telas

![Logo](https://marciomedeirosdesign.com.br/nucleoweb/popcorntime/imagens/tela1.gif)

![Logo](https://marciomedeirosdesign.com.br/nucleoweb/popcorntime/imagens/tela2.gif)
