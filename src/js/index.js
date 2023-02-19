document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("formLogin");
    var submitButton = document.getElementById("botonSubmit");


    submitButton.addEventListener("click", function (event) {

        event.preventDefault();


        var username = document.getElementById("nombreUsuario").value;
        var password = document.getElementById("nombreContrasenia").value;


        if (username === "admin" && password === "admin") {

            window.location.href = "./src/pages/inicio.html";
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
        }
    });
});

