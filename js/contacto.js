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
                    <p class="m-1">${contenidoSuperior.texto}</p>
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
        if((document.getElementById("nombreUsuario").value === "") || (document.getElementById("emailUsuario").value === "") || (document.getElementById("telUsuario").value === "")  || (document.getElementById("mensaje").value === "") ){
            alert("¡No has completado los datos!");
            return;
        }
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

cerrarRutina.addEventListener("click", () =>{
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

//////animaciones concatenadas
setInterval(() => {
    $("#suscribiteNewsletter").fadeOut(500).fadeIn(500)
}, 1200);
