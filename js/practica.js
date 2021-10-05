
//array declarado y como escribir un h2 en html desde js
/*
const ciudades = ["Buenos Aires", "San Luis", "Posadas", "Mendoza", "La Plata", "Bogotá"];

for (let ciudad of ciudades){
    const titulo = document.createElement("h2");
    titulo.innerHTML = ciudad;
    console.log(document.body.appendChild(titulo));
}
*/
// colocar una lista en html desde js
/*
const lista = document.createElement("ul");

for (let i=0; i < 5; i++){
    const tarea = prompt("Ingrese una tarea");
    const li = document.createElement ("li");
    li.textContent = `Mi tarea número ${i+1} es: ${tarea}`
    lista.appendChild(li);
}

document.body.appendChild(lista);
*/


//DESCARTE?

/*
//  FUNCIÓN PARA PEDIR LOS DATOS PERSONALES EN BASE A CLASS USUARIO
function pedirDatosPersonales(){
    usuario = new Usuario(prompt("Ingrese su nombre y apellido"), 
        prompt("Ingrese su edad"),
        prompt("Ingrese su altura en metros separada por un punto (.)"),
        prompt("Ingrese su peso en kg"),
        prompt("¿Es usted deportista? Si / No")
    );

    usuario.mostrarDatosUsuario();
}
*/





/*
alert("Bienvenido a Fitness Life, a continuación le solicitaremos algunos datos personales:");

// Si el usuario igresa mal sus datos, se le solicitará nuevamente que los ingrese hasta que lo haga bien

while(datosUsuario == respuestaNegativa || datosUsuario === undefined){
    pedirDatosPersonales ();
    datosUsuario = prompt("¿Éstos datos son correctos? \n" + "Si / No").toLowerCase();
    if (datosUsuario == respuestaPositiva){
        //Si la persona es deportista el IMC va a arrojar valores inútiles por eso no se tomaría en cuenta el dato si la persona responde que SI
        if (!usuario.esDeportista){
            mostrarResultadoIMC(usuario.calcularIndiceMasa());
        }
        else if (usuario.esDeportista){
            alert("Por favor genere su rutina de acuerdo a su objetivo e intensidad de entrenamiento habitual.");
        }
    }
    else if (datosUsuario == respuestaNegativa){
        alert("Por favor ingrese nuevamente sus datos");
    }
}
*/



/*
//Acá empiezan las rutinas acorde a las preferencias que elige el usuario, que pueden o no basarse en las recomendaciones arrojadas por el IMC
do {
    intensidadEntrenamiento = parseInt(prompt("¿Cuál es el nivel de entrenamiento que querés tener?: \n" + "Indicá con un número según corresponda \n" + "(1) Bajo \n" + "(2) Moderado \n" + "(3) Intenso"));
}
while(intensidadEntrenamiento != 1 && intensidadEntrenamiento != 2 && intensidadEntrenamiento != 3);

do {
    tipoEntrenamiento = parseInt(prompt("¿Cuál es tu objetivo?: \n" + "Indicá con un número según corresponda \n" + "(1) Bajar de Peso \n" + "(2) Tonificar/Definir \n" + "(3) Muscularte"));
}
while(tipoEntrenamiento != 1 && tipoEntrenamiento != 2 && tipoEntrenamiento != 3);
*/


/*
const contenedorrutImpresa = document.getElementById("rutinasImpresas");
contenedorrutImpresa.innerHTML = JSON.stringify(rutinaElegida);
*/