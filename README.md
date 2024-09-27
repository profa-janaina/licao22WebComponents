# Cards de Produto e Perfil

Este repositório contém dois exemplos de projetos desenvolvidos como parte do curso de **Desenvolvimento de Aplicativos** do Bora Programar kids, com o objetivo de demonstrar a criação de componentes reutilizáveis e modulares usando **Web Components**.

## Projetos Incluídos

1. **Card de Produto**
   - Um card dinâmico para exibir informações de um produto, incluindo imagem, nome, descrição e preço. Ideal para ser utilizado em lojas virtuais ou páginas de catálogo de produtos.

2. **Card de Perfil**
   - Um componente reutilizável que exibe as informações básicas de perfil, como avatar, nome, descrição e links para redes sociais. Esse card pode ser usado em portfólios, blogs ou páginas de perfil de usuários.


## Como Usar

### Card de Produto
O **Card de Produto** exibe os detalhes de um produto. Aqui está um exemplo de como utilizá-lo:

```html
<product-card
    img="assets/product-image.jpg"
    name="Produto X"
    description="Descrição breve do produto."
    price="R$ 99,90">
</product-card>
```

### Card de Perfil
O **Card de Perfil** exibe as informações de um usuário ou autor de um blog. Exemplo de uso:

```html
<profile-card
    img="assets/avatar.jpg"
    name="João Silva"
    description="Desenvolvedor Front-End"
    linkedin="https://linkedin.com/in/joaosilva"
    github="https://github.com/joaosilva">
</profile-card>
```

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo e dos componentes.
- **CSS3**: Estilização dos cards para torná-los responsivos e visualmente atraentes.
- **JavaScript**: Implementação dos Web Components para criar componentes reutilizáveis.

## Objetivo

Estes projetos foram desenvolvidos para praticar o conceito de **componentização** no desenvolvimento web, utilizando **Web Components** e JavaScript. Os exemplos podem ser adaptados e reutilizados em diversos tipos de aplicações web.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido como parte do curso **Desenvolvimento de Aplicativos** do Bora Programar Kids.
