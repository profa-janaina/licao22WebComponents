// Array com os dados dos produtos
const products = [
    {
      name: "Smartphone XYZ",
      description: "Um smartphone incrível com muitos recursos.",
      price: "R$ 1.999,00",
      imageUrl: "https://cdn.pixabay.com/photo/2018/10/10/13/59/huawei-3737335_1280.jpg"
    },
    {
      name: "Laptop ABC",
      description: "Leve e potente, ideal para trabalhar e estudar.",
      price: "R$ 4.599,00",
      imageUrl: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg"
    },
    {
      name: "Fone de Ouvido",
      description: "Som de alta qualidade e conforto garantido.",
      price: "R$ 299,00",
      imageUrl: "https://cdn.pixabay.com/photo/2020/04/19/16/33/headphones-5064411_1280.jpg"
    }
  ];

  // Seleciona o template e o container onde os produtos serão inseridos
  const template = document.getElementById('product-template');
  const productsContainer = document.getElementById('products-container');

  // Função para criar e inserir os cards de produto
  products.forEach(product => {
    // Clona o conteúdo do template
    const productElement = document.importNode(template.content, true);

    // Preenche o conteúdo do card com os dados do produto
    productElement.querySelector('.product-name').textContent = product.name;
    productElement.querySelector('.product-description').textContent = product.description;
    productElement.querySelector('.product-price').textContent = product.price;
    productElement.querySelector('.product-image').src = product.imageUrl;

    // Adiciona o card preenchido no container
    productsContainer.appendChild(productElement);
  });
