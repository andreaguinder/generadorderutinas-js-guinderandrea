// HTML de la página de Contacto a partir de JS (DOM)

const contenedorCardsEntrenadores = document.getElementById("cardsEntrenadores");
const entrenadores = document.createElement("article");

// titulo ingresado por js

const contenidoSuperior = {
    titulo: "¿Quiénes somos?",
    texto: "Somos un grupo de entrenadores que decidió hacer este Generador de Rutinas profesional para aquellos que no pueden abonar rutinas personalizadas:"
};

entrenadores.innerHTML = `
                    <div class= "text-center m-4">
                    <h4 id="titActForm">${contenidoSuperior.titulo}</h4>
                    <p class="m-1">${contenidoSuperior.texto}</p>
                    </div>
                `;


contenedorCardsEntrenadores.appendChild(entrenadores);
