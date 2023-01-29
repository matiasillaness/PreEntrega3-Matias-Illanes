
const sectionShop = document.getElementById("section-shop")
let carProductsString = localStorage.getItem('carProducts');
let carProductsEnCarrito = JSON.parse(carProductsString);
console.log(carProductsEnCarrito);



//This function will display the cards
function mostrarShop() {
    //This loop will go through the array of products
    carProductsEnCarrito.forEach((item) => {
        //This variable will create a div for each card
        const cardShop = document.createElement("div")
        cardShop.classList.add("card-carrito")
        //This will add the HTML code to the div
        cardShop.innerHTML = `
                <div class="card mb-3" style="width: 80%;">
                <div class="row g-0">
                <div class="col-md-3">
                    <img src="${item.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 div-card-shop">
                    <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.descripcion}</button>
                    <p>Cantidad: ${item.cantidad}</p>
                    <button>Eliminar del Carrito</button>
                    </div>
                </div>
                </div>
            </div>       
        `
        //This will add the div to the section
        sectionShop.append(cardShop);
    })
}
mostrarShop(); //borrar mas adelante