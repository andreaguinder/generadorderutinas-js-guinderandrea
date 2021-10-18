// HTML de la página de Contacto a partir de JS (DOM)

const contenedorformularioContacto = document.getElementById("formularioContacto");
const formularioContacto = document.createElement("article");

// titulo ingresado por js

const contenidoSuperior = {
    titulo: "¿Te interesa empezar con alguna de nuestras actividades?",
    texto: "Registrate en el formulario por cualquier consulta o para recibir novedades"
};

formularioContacto.innerHTML = `
                    <div class= "text-center">
                    <h4 id="titActForm">${contenidoSuperior.titulo}</h4>
                    <p>${contenidoSuperior.texto}</p>
                    </div>
                `;


contenedorformularioContacto.appendChild(formularioContacto);

// Modal cuando la persona toca Enviar

const abrirModalDeRutina = document.getElementById("enviar")
const cerrarRutina = document.getElementById("cerrarRutina")
const modalContainerRutinas = document.getElementsByClassName("modalContainerRutinas")[0]

abrirModalDeRutina.addEventListener("click", (e) =>{
    e.preventDefault();
        // si el usuario no ingresa su nombre y mail no se abre el modal de que fue enviado
        if((document.getElementById("nombreUsuario").value === "") || (document.getElementById("emailUsuario").value === "")){
            return;
        }
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

cerrarRutina.addEventListener("click", () =>{
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})


/////////Animaciones con Jquery

$("#infoGymPagos").append(`<div>
                                <button id="mediosPagos" class="btnGym btn-lg"<h1>Nuestros medios de pagos</h1></button>
                                <p id="infoMedioPagos" style="margin-top: 2rem">Trabajamos con todos los medios de pago; efectivo, tarjeta de débito o crédito, transferencia bancaria, otros.</p>
                                </div>`
);

$(() => {

    $("h4").css({"background-color": "none"})

    $("#titActForm").mouseenter(function (){
        $("#titActForm").css(({"background-color": "rgb(0,230,211)"}))
    })

    $("#titActForm").mouseleave(function(){
        $("#titActForm").css({"background-color": "white"})
    })
    
    $(".form-control").css({"background-color": "white"})

    $(".form-control").on("mouseover", function (e){
        $(e.target).css("background-color", "rgba(0, 230, 211, 0.473)");
    });
    $(".form-control").on("mouseleave", function (e){
        $(e.target).css("background-color", "rgb(7, 167, 153)");
    });


    $("#mediosPagos").click(function () {
        $("#infoMedioPagos").fadeToggle("slow");
    });
})


setInterval(() => {
    $("#suscribiteNewsletter").fadeOut(500, () => {
        $("#suscribiteNewsletter").fadeIn(500)
    })
}, 1200);
