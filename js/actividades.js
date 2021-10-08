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
                    <h1>${contenido.titulo}</h1>
                    <p>${contenido.texto}</p>
                `;

contenedorArticulo.appendChild(articulo);

// Array de cards con info de actividades del Gym
const actividadesGym = [
    {id: "indoorRunning", img: '../images/indoor-running-act.jpg', nombreActGym: "Indoor Running", detalleActGym: "+ Info", actDescripcion: "Cuando comienzas a correr, tu cuerpo puede experimentar dolor desde la cabeza a la punta de los pies. Eso es obvio como runner principiante, pero debes saber que eso no debe pararte de dejar hacer kilómetros, pero sí que es lo que realmente te sucede cuando empiezas en esta aventura del running. Aquí van 16 cosas que probablemente experimenten tu cuerpo cuando empiezas a correr."},
    {id: "musculacion", img: '../images/musculacion-act.jpg', nombreActGym: "Musculación", detalleActGym: "+ Info", actDescripcion: "Es una alternativa de actividad física basada generalmente en ejercicio físico de media a alta intensidad, con la finalidad encontrar un equilibrio muscular entre los segmentos corporales, generalmente se utilizan estímulos anaeróbicos, principalmente se desarrolla en los gimnasios. También se le llama musculación a la actividad encaminada a hipertrofiar el músculo sin llegar a un desarrollo competitivo. La musculación al ser un entrenamiento con pesas, provoca transformaciones inducidas en las fibras musculares como son los micro traumas; estas pequeñas lesiones en el músculo contribuyen al cansancio experimentado tras el ejercicio. La reparación de los micro traumas, forman parte del crecimiento muscular mejor conocido como hipertrofia."},
    {id: "funcional", img: '../images/funcional-act.jpg', nombreActGym: "Funcional", detalleActGym: "+ Info", actDescripcion: "Muchos se preguntan: “¿qué es el entrenamiento funcional?”. Una definición de entrenamiento funcional es que este es un método de entrenamiento enfocado a ayudarte en llevar a cabo tus tareas cotidianas. ¿Qué es el entrenamiento funcional? Asimismo, mejora nuestro rendimiento y minimiza el riesgo a lesionarse. Por eso el entrenamiento funcional está cada vez más usado por entrenadores, preparadores físicos, deportistas y demás profesionales del sector. Esta es para nosotros la definición adecuada, según nuestro punto de vista, al concepto de entrenamiento funcional. Pero puede que te preguntes también ¿en qué consiste? ¿de dónde procede? ¿puedo practicarlo? ¿me gustará? Porque es posible que hayas visto en alguna ocasión algún o algunos posts publicitarios promocionando este tipo de entrenamiento o quizás centros especializados en este “novedoso” entrenamiento. Este artículo de Instituto ISAF está enfocado a aclarar y disipar todo tipo de dudas que te han podido surgir. Te damos información de calidad sobre la gimnasia funcional basada en la evidencia científica, en nuestra experiencia personal y en métodos de comprobación fiables."},
    {id: "crossFit", img: '../images/crossfit-act.jpeg', nombreActGym: "CrossFit", detalleActGym: "+ Info", actDescripcion: "CrossFit se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad.CrossFit es una técnica de entrenamiento que conecta movimientos de diferentes disciplinas, tales como la halterofilia, el entrenamiento metabólico o el gimnástico. Consiste en acometer un programa de ejercicios (flexiones, tracción, etc), en un tiempo determinado y con un número definido de veces."},
    {id: "spinning", img: '../images/spinning-act.jpg', nombreActGym: "Spinning", detalleActGym: "+ Info", actDescripcion: "En las sesiones de spinning, que tienen una duración media de 45 minutos, se trabaja sobre todo el tren inferior, es decir, las piernas y los glúteos. Sin embargo, también se trabajan otros músculos como los dorsales, los lumbares o el trapecio así como los bíceps y los tríceps."},
    {id: "aerobica", img: '../images/aerobica-act.jpg', nombreActGym: "Aeróbica", detalleActGym: "+ Info", actDescripcion: "Ejercicio aeróbico: son ejercicios de media o baja intensidad y de larga duración, donde el organismo necesita quemar hidratos y grasas para obtener energía y para ello necesita oxígeno. Son ejemplos de ejercicios aeróbico: correr, nadar, ir en bici, caminar, etc. Se suele utilizar a menudo para bajar de peso, ya que como hemos dicho, con este tipo de ejercicio se quema grasa. También, al necesitar mucho oxígeno, el sistema cardiovascular se ejercita y produce numerosos beneficios."},
    {id: "pilates", img: '../images/pilates-act.jpeg', nombreActGym: "Pilates", detalleActGym: "+ Info", actDescripcion: "El método Pilates, o simplemente Pilates, es un sistema de entrenamiento físico y mental creado a principios del siglo XX por Joseph Hubertus Pilates, quien lo ideó basándose en su conocimiento de distintas especialidades como gimnasia, traumatología y yoga; uniendo el dinamismo y la fuerza muscular con el control mental, la respiración y la relajación.En sus principios fue llamado Contrología (Contrology), por el propio Pilates, debido a que recalca el uso de la mente para controlar el cuerpo, pero buscando el equilibrio y la unidad entre ambos. El método se centra en el desarrollo de los músculos internos para mantener el equilibrio corporal y dar estabilidad y firmeza a la columna vertebral, por lo que es muy usado como terapia en rehabilitación1​ y para, por ejemplo, prevenir y curar el dolor de espalda. Se practica en todo el mundo y su popularidad es cada vez mayor debido a que es practicado por personajes famosos del mundo de la música, el cine, la danza y el deporte."},
    {id: "kickBoxing", img: '../images/kick-boxing-act.jpg', nombreActGym: "Kick-Boxing", detalleActGym: "+ Info", actDescripcion: "Es un deporte de combate de origen japonés y con desarrollo en occidente, en el cual se mezclan las técnicas del boxeo con las técnicas de patadas de algunas artes marciales como el karate y el muay thai, estando así relacionado con las artes marciales orientales. Si bien al kickboxing no se lo considera en Japón un arte marcial formativo tradicional (gendai budō) donde se busca la excelencia, existen diversas opiniones sobre si se trata de un arte marcial o no. Se considera que un luchador de kickboxing es un rival de altura para los demás peleadores de otros estilos de lucha en pie, ya que suelen practicar otros tipos de deportes de combate o artes marciales, y por la gran resistencia física, contundencia y aguante a los golpes de sus practicantes. Actualmente, debido a su practicidad y contundencia es uno de los sistemas preferidos y de mayor divulgación en el desarrollo de la lucha en pie, siendo el preferido por los practicantes de las artes marciales mixtas."},
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
            <h5>${actGym.nombreActGym}</h5>
            <br>
            <img src="${actGym.img}" class="img-fluid"><br><br>
            <p style="text-align:left">${actGym.actDescripcion}</p>
        </div>
    `;
    });
})