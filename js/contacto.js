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
                    <h4>${contenidoSuperior.titulo}</h4>
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
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

cerrarRutina.addEventListener("click", () =>{
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})
