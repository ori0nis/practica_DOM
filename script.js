// Lista de productos:

const products = [
    {
        productName: 'Rose Cake',
        price: 20.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-1.jpg'
    },
    {
        productName: 'Daddy Cool Cake',
        price: 25.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-2.jpg'
      },
      {
        productName: 'Cartoony Cake',
        price: 27.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cake-3.jpg'
      },
      {
        productName: 'Caramel Cupcake',
        price: 2.50,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cupcake-1.jpg'
      },
      {
        productName: 'Mothers Day Flourish',
        price: 2.50,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cupcake-2.jpg'
      },
      {
        productName: 'Espresso Cupcake',
        price: 2.50,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/cupcake-3.jpg'
      },
      {
        productName: 'Rainbow Macarons',
        price: 1.70,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/macaron-1.jpg'
      },
      {
        productName: 'Brownie Macarons',
        price: 1.70,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/macaron-2.jpg'
      },
      {
        productName: 'Love Bite Macarons',
        price: 1.70,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/macaron-3.jpg'
      },

      // Le he dado mil vueltas, pero no sé por qué, estas imágenes no cargan:

      {
        productName: 'Classic Macaron Tower',
        price: 17.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/tower-1.jpg'
      },
      {
        productName: 'Ivory Macaron Tower',
        price: 18.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/tower-2.jpg'
      },
      {
        productName: 'Small Macaron Tower',
        price: 20.99,
        seller: 'Taste the Rainbow Cakes',
        image: './assets/products/tower-3.jpg'
      },
]

// Introducción de los productos en el HTML:

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

    // Le añado una clase al button para poder acceder a él en la función addToCart:

    buyButton.setAttribute("class", "buybutton");

    // Ahora creo y añado dinámicamente una clase para que los elementos estén correctamente programados en cuanto a CSS:

    productImg.setAttribute("class", "img-dinamic");

    // Meto los elementos en el HTML:

    productDiv.appendChild(buyButton);

    productContainer.appendChild(productDiv);
}

// Creación del carrito:

const cart = {};

function addToCart (products) {
  
  const buyButtons = document.querySelectorAll(".buybutton");
  const buyButton = buyButtons[i];

  for (let product of products) {
    if (!cart[product]) {
      
      buyButton.addEventListener("click", () => {
        cart.push({ product, quantity: 1 });
      })
    } else {

      buyButton.addEventListener("click", () => {
        cart.push({ product, quantity: 1 /* esto ya no he sabido resolverlo */ });
      })
    }
  }
}

// Sé que este carrito es muy básico y que no es realmente funcional. He estado buscando para ver de qué manera se puede linkear esta función con el div class = "cart", pero lo que he encontrado es demasiado complejo y no creo que sea representativo de lo que realmente sé. Aún así, he querido dejar este código como mi primera tentativa de crear un carrito.


// Creo el carrito dinámicamente y le añado su clase:

const cartDiv = document.createElement("div");
cartDiv.classList.add("cart");

const shoppingCartLink = document.createElement("a");
shoppingCartLink.href = "shopping-cart.html";
shoppingCartLink.target = "_blank";

const cartImage = document.createElement("img");
cartImage.src = "./assets/logos/cart-logo.png";
cartImage.alt = "Shopping cart logo";

shoppingCartLink.appendChild(cartImage);
cartDiv.appendChild(shoppingCartLink);

const socialIconsDiv = document.querySelector(".social-icons");
socialIconsDiv.insertAdjacentElement("afterend", cartDiv);









 