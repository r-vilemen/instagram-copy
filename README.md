# Instagram Web Clone

Este projeto é uma recriação da interface de postagens do Instagram, desenvolvido com HTML, CSS e TypeScript, proporcionando uma experiência visual e interativa similar à plataforma original. O foco principal está na simulação de postagens, curtidas e interações com perfis de usuários.

![Visualização do Projeto](assets/image.png)

## Índice

- [Descrição](#descrição)
- [Imagens do Projeto](#imagens-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O objetivo deste projeto é recriar a interface de postagens do Instagram, ideal para quem deseja praticar e aprimorar suas habilidades em HTML, CSS e TypeScript. Inclui funcionalidades como curtir postagens, navegação em carrossel e geração dinâmica de dados fictícios, utilizando a biblioteca `faker`.

## Imagens do Projeto

![Visualização do Projeto](assets/image.png)

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização e layout dos componentes, com animações para interatividade.
- **TypeScript**: Lógica do aplicativo, manipulação de eventos e geração dinâmica de postagens.
- **UUID**: Geração de IDs únicos para cada postagem.
- **Faker**: Geração de dados fictícios para simular postagens e perfis.

## Estrutura do Projeto

### 1. **index.html**

O arquivo principal contendo a estrutura HTML da página, com:

- Links para CSS e fontes do Google.
- Um contêiner para as postagens em formato de carrossel, permitindo rolagem horizontal.

### 2. **estilos.css**

Contém todas as regras de estilo do projeto, incluindo:

- Centralização do conteúdo.
- Estilos para o ícone de curtir, com animação de "pop" ao clicar.
- Estilização do carrossel, postagens e cabeçalhos.

### 3. **script.ts**

Lógica principal do aplicativo, incluindo:

- **Classe Post**: Representa uma postagem com informações como nome de usuário, imagem, descrição e número de curtidas.
- **Funções**:
  - `generatePost()`: Gera uma nova postagem usando a biblioteca `faker`.
  - `addEventListenersToLikeButtons()`: Adiciona eventos aos botões de curtir.
  - `addEventListenersToFollowButtons()`: Alterna entre "SEGUIR" e "SEGUINDO".
  - `addPostsToContainer()`: Adiciona postagens ao contêiner.
  - `scrollCarousel()`: Rola o carrossel de postagens.

## Instalação

Para rodar este projeto localmente, siga os passos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/r-vilemen/instagram-copy.git
   Navegue até o diretório do projeto:
   ```

   ```bash
   Copiar código
   cd instagram-web-clone
   Abra o arquivo index.html no navegador de sua escolha.
   ```

## Uso

Após abrir o arquivo index.html, você poderá visualizar a interface de postagens e interagir com os botões de curtir, seguir e navegar no carrossel de postagens.

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos:

Faça um fork do projeto.

Crie uma nova branch:

```bash
Copiar código
git checkout -b minha-nova-feature
Faça suas alterações e commit:
```

```bash
Copiar código
git commit -m 'Adiciona nova feature'
Envie para o branch original:
```

```bash
Copiar código
git push origin minha-nova-feature
Abra um Pull Request.
```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
