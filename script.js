// Lista de productos

const products = [
    {
        name: 'Rose Cake',
        price: 20.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
    },
    {
        name: 'Daddy Cool Cake',
        price: 25.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Cartoony Cake',
        price: 27.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Caramel Cupcake',
        price: 2.50,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Mothers Day Flourish',
        price: 2.50,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Espresso Cupcake',
        price: 2.50,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Rainbow Macarons',
        price: 1.70,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Brownie Macarons',
        price: 1.70,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Love Bite Macarons',
        price: 1.70,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Classic Macaron Tower',
        price: 17.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Ivory Macaron Tower',
        price: 18.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
      {
        name: 'Small Macaron Tower',
        price: 20.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
      },
]

// Introducción de los productos en el HTML

const productContainers = document.querySelectorAll("article.card");

for (let i = 0; i < products.length; i++) {
    
    const product = products[i];
    const productContainer = productContainers[i];
    
    const productDiv = document.createElement("div");

    const productImg = document.createElement("img");
    productImg.src = product.image;
    productDiv.appendChild(productImg);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productDiv.appendChild(productPrice);

    // TODO: Revisitar este button para darle otra vuelta y crear un cart más dinámico. Por ahora me centro en terminar el esqueleto del script.
    
    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy now";
    buyButton.addEventListener("click", () => {
        console.log("The user wants to buy this item");
    })
    productDiv.appendChild(buyButton);

    productContainer.appendChild(productDiv);
}

// TODO: Revisar si es mejor hacer section id = "etc" que ponerlo en el primer article.


 