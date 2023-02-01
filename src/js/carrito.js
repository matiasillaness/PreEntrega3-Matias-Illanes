const btnComprarTodo = document.getElementById("btnComprarTodo")
const sectionShop = document.getElementById("section-shop")
let carProductsString = localStorage.getItem('carProducts');
let carProductsEnCarrito = JSON.parse(carProductsString);
const carVacio = document.getElementById("carritoVacio")


function mostrarShop() {
    sectionShop.innerHTML = '';
    carProductsEnCarrito.forEach((item) => {
        const cardShop = document.createElement("div")
        cardShop.classList.add("card-carrito")

        cardShop.innerHTML = `
                <div class="card mb-3 card-carrito-2" style="width: 1100px;">
                <div class="row g-0">
                <div class="col-md-3">
                    <img src="${item.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 div-card-shop">
                    <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.descripcion}</button>
                    <p>Cantidad: ${item.cantidad}</p>
                    <button class="btnEliminar" onclick=deleteCarrito(this) id="${item.id}">Eliminar del Carrito</button>
                    </div>
                </div>
                </div>
            </div>       
        `
        sectionShop.append(cardShop);
    })
}
mostrarShop(); //borrar mas adelante

///////////////////////////////////////
function deleteCarrito(element) {
    let findIndex = carProductsEnCarrito.findIndex((item) => item.id === Number(element.id));
    if (findIndex !== -1) {
        carProductsEnCarrito.splice(findIndex, 1);
        localStorage.setItem('carProducts', JSON.stringify(carProductsEnCarrito));
        mostrarShop()
        borrarBoton();
    }
    sumarCarrito();
}
function borrarBoton(){
    if(carProductsEnCarrito.length <= 0){
        btnComprarTodo.style.display = "none"
        sumTotal.style.display = "none"
        carVacio.style.display = "flex"
    }
    else{
        carVacio.style.display = "none"
    }
}
borrarBoton();


let precioTotal;
const sumTotal = document.getElementById("sumTotal")
function sumarCarrito(){
    let precio = carProductsEnCarrito.reduce((precioTotal, element)=> precioTotal += element.precio*element.cantidad,0)
    sumTotal.innerHTML = `El precio Total es: $${precio}`
}
sumarCarrito();



