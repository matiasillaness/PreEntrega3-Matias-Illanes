//This is the section where the cards will be displayed
const sectionCard = document.getElementById("sectionCard")
//This function will display the cards
function mostrarProducto() {
    //This loop will go through the array of products
    productos.forEach((item) => {
        //This variable will create a div for each card
        const cardProductos = document.createElement("div")
        //This will add the HTML code to the div
        cardProductos.innerHTML = `
        <div id="divCard" class="card" style="width: 25rem;">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">${item.descripcion}</p>
                <button onclick= agregarProducto(this) class="btnAddToCart" id="${item.id}">Agregar Carrito</button>
            </div>
        </div>
      `
        //This will add the div to the section
        sectionCard.append(cardProductos);
    })
}
mostrarProducto(); //borrar mas adelante


function agregarProducto(element) {
    let selectedId = element.id;
    console.log(selectedId);
    let productosFinded = productos.find (function (o) { return o.id === Number(selectedId) });
    let productFoundInCart = carProducts.find (function (o) { return o.id === productosFinded.id });
    if (productFoundInCart) {
        if (productosFinded.stock >= 0) {
            productFoundInCart.cantidad++;
            productosFinded.stock--;

        }
        else {
            alert("sin stock")
        }
    }
    else {
        carProducts.push(productosFinded);
    }
    console.log(carProducts)
    // Convert the array to a string
    let carProductsString = JSON.stringify(carProducts);

    // Save the string in LocalStorage
    localStorage.setItem('carProducts', carProductsString);

    
}



















