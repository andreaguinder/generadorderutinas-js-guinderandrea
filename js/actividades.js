const cerrarRutina = document.getElementById("cerrarRutina")
const modalContainerRutinas = document.getElementsByClassName("modalContainerRutinas")[0]

cerrarRutina.addEventListener("click", () =>{
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

// Inserto DOM desde JS

const contenedorArticulo = document.getElementById("titActGym");
const articulo = document.createElement("article");

const contenido = {
    titulo: "Actividades de Fitness Life",
    texto: "Haga click en las imágenes para más información"
};

articulo.innerHTML = `
                    <div class="mb-5">
                    <h1>${contenido.titulo}</h1>
                    <p>${contenido.texto}</p>
                    </div>
                `;

contenedorArticulo.appendChild(articulo);

// Array de cards con info de actividades del Gym
const URL = "../json/data.json";

let actividadesGym = [];

const contenedoractividadesGym = document.getElementById("actGym");

fetch(URL)
.then(response => response.json())
.then(actividadesGym => {
    actividadesGym.forEach((actGym) => {
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

///////
/*
fetch('https://api.giphy.com/v1/gifs/trending')
.then ((response) => response.json())
*/

const lista = document.getElementById('lista')
const form = document.getElementById('form')
const input = document.getElementById('input-busqueda')
const loader = document.getElementById('loader')

const API_KEY = "F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9"

// async function llamarAPI () { ... }

const llamarAPI = async (search) => {

    loader.style.display ="block"

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=20`)
    const data = await response.json()

    const imgs = data.data

    lista.innerHTML = ""

    imgs.forEach( (img) => {
        const src = img.images.downsized_medium.url
        lista.innerHTML += `
            <li class="card col-3">
                <img src=${src} />
            </li>
        `
    })
    
    loader.style.display = "none"

}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const busqueda = input.value.trim()

    llamarAPI(busqueda)
})
