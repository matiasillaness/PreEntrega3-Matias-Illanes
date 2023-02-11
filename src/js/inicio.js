
const sectionCard = document.getElementById("sectionCard")




let productos = fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {console.log(data), mostrarProducto(data.products), products = data.products})
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('Request finished'))



function mostrarProducto(products) {
    products.forEach((item) => {
        const cardProductos = document.createElement("div")
        cardProductos.classList.add("col-lg-6");
        cardProductos.classList.add("col-md-6");
        cardProductos.classList.add("col-sm-12");
        cardProductos.classList.add("col-12")
        cardProductos.classList.add("col-xl-4");
        cardProductos.classList.add("col-xxl-3");
        cardProductos.innerHTML = `
                <div id="divCard" class="card" style="width: 25rem;">
                    <img src="${item.images[1]}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">$${item.price}</p>
                        <button onclick= agregarProducto(this) class="btnAddToCart" id="${item.id}">Agregar Carrito</button>
                    </div>
                </div>
              `
        sectionCard.append(cardProductos);
    })
}

function agregarProducto(element) {
    let selectedId = element.id;
    console.log(selectedId);
    let productosFinded = products.find(function (o) { return o.id === Number(selectedId) });
    console.log("xdxdxdxdxd",productosFinded);
    let productFoundInCart = carProducts.find(function (o) { return o.id === productosFinded.id });
 

    if (productFoundInCart) {
        productFoundInCart.stock > 0 ? productFoundInCart.cantidad++ && productFoundInCart.stock-- : alert("sin stock");
    }
    else {
        productosFinded.cantidad = 1;
        carProducts.push(productosFinded);
    }
    
    console.log("array carrito",carProducts)
    let carProductsString = JSON.stringify(carProducts);
    localStorage.setItem('carProducts', carProductsString);
    alerta();
}

function alerta(){
Toastify({
    text: "Producto agregado al carrito!",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, black, grey)",
    }
  }).showToast()
}

















