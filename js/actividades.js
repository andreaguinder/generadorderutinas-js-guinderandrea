// Inserto DOM desde JS
const contenedorArticulo = document.getElementById("titActGym");
const articulo = document.createElement("article");

const contenido = {
    titulo: "Actividades de Fitness Life",
    texto: "Haga click en las imágenes para más información"
};

articulo.innerHTML = `
                    <h1>${contenido.titulo}</h1>
                    <p>${contenido.texto}</p>
                `;

contenedorArticulo.appendChild(articulo);

// Array de cards con info de actividades del Gym
const actividadesGym = [
    {img: '/images/photo-1616763880410-744958efc093.jpg', nombreActGym: "Indoor Running", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "Musculación", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "Funcional", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "CrossFit", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "Spinning", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "Aeróbica", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "Pilates", detalleActGym: "+ Info"},
    {img: 'https://via.placeholder.com/200', nombreActGym: "Kick-Boxing", detalleActGym: "+ Info"},
]

const contenedoractividadesGym = document.getElementById("actGym");

actividadesGym.forEach((actGym) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width: 18rem"
    div.innerHTML = `
                    <img src=${actGym.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title grande">${actGym.nombreActGym}</h5>
                        <a href="#" class="btn btn-dark btn-lg">+ Info</a>
                    </div>
                `

    contenedoractividadesGym.appendChild(div);
})