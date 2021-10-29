const cerrarRutina = document.getElementById("cerrarRutina")
const modalContainerRutinas = document.getElementsByClassName("modalContainerRutinas")[0]

cerrarRutina.addEventListener("click", () =>{
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

// Inserto DOM desde JS

const contenedorArticulo = document.getElementById("titActGym");
const articulo = document.createElement("article");

articulo.innerHTML = `
                    <div class="mb-5">
                    <h1>Actividades de Fitness Life</h1>
                    <p class="actGymEnlaces">En nuestra sede encontrarás múltiples actividades que podés realizar: Musculación, Indoor Running, Funcional,
                    Spinning, Kick-Boxing, Boxeo, entre otras. Si buscas inscribirte en el gimnasio, no dudes en completar el formulario
                    en la pestaña de <a href="../pages/contacto.html"><strong>CONTACTO</strong></a>.</p>
                    <p class="actGymEnlaces">Si por el contrario buscabas solamente generar una rutina podés ir a la pestaña <a href="../pages/training.html"><strong>TRAINING</strong></a>.</p><br>
                    <h2>Para más información de en qué consiste cada actividad hace click en el siguiente botón:</h2>
                    </div>
                `;

contenedorArticulo.appendChild(articulo);

// Array de cards con info de actividades del Gym
const URL = "../json/data.json";

let actividadesGym = [];

const contenedoractividadesGym = document.getElementById("actGym");

const verActividades = () => {

fetch(URL)
.then(response => response.json())
.then(activGym => {
    activGym.forEach((actGym) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width: 18rem"
    div.innerHTML = `
                    <img src=${actGym.img} class="card-img-top" alt="...">
                    <div class="card-body mb-4">
                        <h5 class="card-title grande">${actGym.nombreActGym}</h5>
                        <button id="${actGym.id}" class="btnGym m1">Info +</button>
                    </div>
                `;
    contenedoractividadesGym.appendChild(div);

        document.getElementById(actGym.id).addEventListener("click", (e) =>{
        e.preventDefault();
        modalContainerRutinas.classList.toggle("modalRutinasActive");

        const contenedorDescripcion = document.getElementById("descripcionActividades");

        contenedorDescripcion.innerHTML = `
                                            <div>
                                                <h3 style= "color: rgb(7, 167, 153)"><strong>${actGym.nombreActGym}</strong></h3>
                                                <br>
                                                <img src="${actGym.img}" class="img-fluid"><br><br>
                                                <p style="text-align:left">${actGym.actDescripcion}</p>
                                            </div>
                                            `;
        });
    });
});
}