// HTML de la página de Training a partir de JS (DOM)

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
