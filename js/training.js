// SE DEFINEN LAS VARIABLES DE JS

let nombreUsuario;
let edadUsuario;
let alturaUsuario;
let pesoUsuario;

let respuestaPositiva = "si";
let respuestaNegativa = "no";

let esDeportista;

let intensidadEntrenamiento;
let tipoEntrenamiento;
let usuario;
let datosUsuario;


// SE DEFINEN LAS CLASES DEL SIMULADOR: GENERADOR DE RUTINAS
// SE DEFINEN LAS CLASES DEL SIMULADOR: GENERADOR DE RUTINAS
// SE DEFINEN LAS CLASES DEL SIMULADOR: GENERADOR DE RUTINAS

// SE DEFINEN LOS DATOS QUE SE VAN A ADQUIRIR DEL USUARIO
class Usuario {
    constructor(nombre, edad, altura, peso, esDeportista) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.altura = parseFloat(altura);
        this.peso = parseInt(peso);
        this.esDeportista = (esDeportista.toLowerCase() === "si") ? true : false;
    }
    mostrarDatosUsuario(){
        alert("Usted ingresó: \n" + "Nombre y Apellido: " + this.nombre + " \n" + "Edad: " + this.edad + " años \n" + "Tu altura: " + this.altura + " m. \n" + "Tu peso: " + this.peso + " kg. \n" + "Es deportista: " + ((this.esDeportista) ? "si" : "no"));
    }

    calcularIndiceMasa(){
        return (this.peso / (this.altura**2));
    }
}

// SE DEFINE LA ESTRUCTURA DE LAS RUTINAS
class PlanillaRutina {
    constructor(usuario, jornadas){
        this.usuario = usuario;
        this.jornadas = jornadas;
    }
}

// SE DEFINE LA ESTRUCTURA DE LAS JORNADAS
class Jornada {
    constructor(nombreJornada, tipoJornada, listaDeEjercicios) {
        this.nombreJornada = nombreJornada;
        this.tipoJornada = tipoJornada;
        this.listaDeEjercicios = listaDeEjercicios;
    }
}

// SE DEFINEN LOS EJERCICIOS
class Ejercicio {
    constructor(nombreEjercicio, cantSeries, cantRepeticiones) {
        this.nombreEjercicio = nombreEjercicio;
        this.cantSeries = cantSeries;
        this.cantRepeticiones = cantRepeticiones;
    }
}

// LISTA DE LOS EJERCICIOS QUE FORMARÁN LAS JORNADAS
// LISTA DE LOS EJERCICIOS QUE FORMARÁN LAS JORNADAS
// LISTA DE LOS EJERCICIOS QUE FORMARÁN LAS JORNADAS

let ejercicioRunning = new Ejercicio("Indoor Running", "1 sesión", "10 minutos de calentamiento y 40 minutos trote");

let ejercicioSpinning = new Ejercicio("Spinning", "1 clase", "45 minutos");

let ejercicioFuncional = new Ejercicio("Funcional", "1 clase", "1 hora");


let ejercicio1 = new Ejercicio("Jumping Jack", "3 series", "40");

let ejercicio2 = new Ejercicio("Burpees", "3 series", "10");

let ejercicio3 = new Ejercicio("Mountain Climber", "3 series", "30");

let ejercicio4 = new Ejercicio("Salto con rodillas al pecho", "3 series", "40");

let ejercicio5 = new Ejercicio("Talón a la cola", "3 series", "40");

let ejercicio6 = new Ejercicio("Bicho Bolita", "3 series", "15");


let ejercicio7 = new Ejercicio("Plancha", "3 series", "45 seg.");

let ejercicio8 = new Ejercicio("Planchas Laterales", "3 series", "30 seg. de cada lado");

let ejercicio9 = new Ejercicio("Abdominales con ruedita", "3 series", "5");

let ejercicio10 = new Ejercicio("Sit Up", "3 series", "20");

let ejercicio11 = new Ejercicio("Biceps Concentrado", "3 series", "10");

let ejercicio12 = new Ejercicio("Press Francés", "3 series", "15");


let ejercicio13 = new Ejercicio("Sentadillas", "3 series", "15");

let ejercicio14 = new Ejercicio("Aductores en máquina", "3 series", "10");

let ejercicio15 = new Ejercicio("Piernas en Prensa a 45º", "3 series", "15");

let ejercicio16 = new Ejercicio("Gemelos en Prensa a 45º", "3 series", "20");

let ejercicio17 = new Ejercicio("Abdominales en Banco Inclinado c/peso", "3 series", "10");

let ejercicio18 = new Ejercicio("Abdominales en Maquina de Suspensión", "3 series", "10");



// LISTA DE LAS JORNADAS QUE FORMARÁN LAS RUTINAS
// LISTA DE LAS JORNADAS QUE FORMARÁN LAS RUTINAS
// LISTA DE LAS JORNADAS QUE FORMARÁN LAS RUTINAS

// Jornadas Generales Cardio (Running, Spinning, Musculación)
let listaEjerGeneral1 = [ejercicioRunning];
let jornada1 = new Jornada("Running", "Cardio", listaEjerGeneral1);

let listaEjerGeneral2 = [ejercicioSpinning];
let jornada2 = new Jornada("Spinning", "Cardio", listaEjerGeneral2);

let listaEjerGeneral3 = [ejercicioFuncional];
let jornada3 = new Jornada("Funcional", "Cardio", listaEjerGeneral3);

// Jornadas para Bajar de Peso
let listaBajar1 = [ejercicio1, ejercicio2, ejercicio3];
let jornada4 = new Jornada("Tren Superior", "Musculación/Tonificación", listaBajar1);

let listaBajar2 = [ejercicio4, ejercicio5, ejercicio6];
let jornada5 = new Jornada("Tren Inferior", "Musculación/Tonificación", listaBajar2);

// Jornadas para Tonificar/Definir
let listaDefinir1 = [ejercicio7, ejercicio8, ejercicio9];
let jornada6 = new Jornada("Tren Superior", "Musculación/Tonificación", listaDefinir1);

let listaDefinir2 = [ejercicio10, ejercicio11, ejercicio12];
let jornada7 = new Jornada("Tren Inferior", "Musculación/Tonificación", listaDefinir2);

// Jornadas para Muscular
let listaMuscular1 = [ejercicio13, ejercicio14, ejercicio15];
let jornada8 = new Jornada("Tren Superior", "Musculación/Tonificación", listaMuscular1);

let listaMuscular2 = [ejercicio16, ejercicio17, ejercicio18];
let jornada9 = new Jornada("Tren Inferior", "Musculación/Tonificación", listaMuscular2);



// SE DEFINEN LAS RUTINAS POR DÍAS
// SE DEFINEN LAS RUTINAS POR DÍAS
// SE DEFINEN LAS RUTINAS POR DÍAS

// LISTA RUTINAS 2 DÍAS SEMANALES (INTENSIDAD BAJA)

// Lista de Rutinas para 2 días a la semana para BAJAR DE PESO
let rutina1 = new PlanillaRutina(usuario, [jornada1, jornada2]);
// Lista de Rutinas para 2 días a la semana para DEFINIR/TONIFICAR
let rutina2 = new PlanillaRutina(usuario, [jornada6, jornada7]);
// Lista de Rutinas para 2 días a la semana para MUSCULAR
let rutina3 = new PlanillaRutina(usuario, [jornada8, jornada9]);


// LISTA RUTINAS 4 DÍAS SEMANALES (INTENSIDAD MODERADA)

// Lista de Rutinas para 4 días a la semana para BAJAR DE PESO
let rutina4 = new PlanillaRutina(usuario, [jornada2, jornada4, jornada3, jornada5]);
// Lista de Rutinas para 4 días a la semana para DEFINIR/TONIFICAR
let rutina5 = new PlanillaRutina(usuario, [jornada3, jornada6, jornada3, jornada7]);
// Lista de Rutinas para 4 días a la semana para MUSCULAR
let rutina6 = new PlanillaRutina(usuario, [jornada3, jornada8, jornada3, jornada9]);


// LISTA RUTINAS 6 DÍAS SEMANALES (INTENSIDAD ALTA)

// Lista de Rutinas para 6 días a la semana para BAJAR DE PESO
let rutina7 = new PlanillaRutina(usuario, [jornada1, jornada4, jornada2, jornada5, jornada1, jornada3]);
// Lista de Rutinas para 6 días a la semana para DEFINIR/TONIFICAR
let rutina8 = new PlanillaRutina(usuario, [jornada3, jornada6, jornada2, jornada3, jornada7, jornada3]);
// Lista de Rutinas para 6 días a la semana para MUSCULAR
let rutina9 = new PlanillaRutina(usuario, [jornada2, jornada8, jornada9, jornada1, jornada8, jornada9]);


// SE DEFINEN LAS FUNCIONES DEL SIMULADOR
// SE DEFINEN LAS FUNCIONES DEL SIMULADOR
// SE DEFINEN LAS FUNCIONES DEL SIMULADOR

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

// CÁLCULO IMC PARA QUIEN NO ES DEPORTISTA
function mostrarResultadoIMC(resultadoIMC){
    alert("Analizamos tus datos para obtener tu índice de masa corporal, para poder asesorarte mejor sobre que rutina deberías generar luego. Tu IMC es: " + resultadoIMC);

    if (resultadoIMC < 18.5){
        alert("Te encontrás dentro del rango de peso insuficiente; visitá a tu médico o nutricionista y escribinos luego por una rutina personalizada");
    }

    else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9){
        alert("Te encontrás en el rango de peso saludable; te recomendamos una rutina de mantenimiento de al menos 2 días a la semana.");
    }

    else {
        alert("Te encontrás dentro del rango de sobrepeso, te recomendamos consultar con un médico y realizar una rutina de al menos 5 días a la semana.");
    }
}

// SE LE PREGUNTA AL USUARIO CON QUE NIVEL DE INTENSIDAD QUIERE ENTRENAR Y CUÁL ES SU OBJETIVO
function preferenciaEntrenamiento(){
    intensidadEntrenamiento = parseInt(prompt("¿Cuál es el nivel de entrenamiento que querés tener?: \n" + "Indicá con un número según corresponda \n" + "(1) Bajo \n" + "(2) Moderado \n" + "(3) Intenso"));
    
    tipoEntrenamiento = parseInt(prompt("¿Cuál es tu objetivo?: \n" + "Indicá con un número según corresponda \n" + "(1) Bajar de Peso \n" + "(2) Tonificar/Definir \n" + "(3) Muscularte"));
}

// FUNCIÓN QUE LE DEVOLVERÁ AL USUARIO LA RUTINA CREADA POR EL SIMULADOR
function obtenerRutina(intensidadEntrenamiento, tipoEntrenamiento){

    if(intensidadEntrenamiento === 1 && tipoEntrenamiento === 1){
        return rutina1;
    } else if(intensidadEntrenamiento === 1 && tipoEntrenamiento === 2){
        return rutina2;
    } else if(intensidadEntrenamiento === 1 && tipoEntrenamiento === 3){
        return rutina3;
    } else if(intensidadEntrenamiento === 2 && tipoEntrenamiento === 1){
        return rutina4;
    } else if(intensidadEntrenamiento === 2 && tipoEntrenamiento === 2){
        return rutina5;
    } else if(intensidadEntrenamiento === 2 && tipoEntrenamiento === 3){
        return rutina6;
    } else if(intensidadEntrenamiento === 3 && tipoEntrenamiento === 1){
        return rutina7;
    } else if(intensidadEntrenamiento === 3 && tipoEntrenamiento === 2){
        return rutina8;
    } else if(intensidadEntrenamiento === 3 && tipoEntrenamiento === 3){
        return rutina9;
    }
}

// ACÁ COMIENZA LA INTERACCIÓN CON EL USUARIO DEL SIMULADOR
// ACÁ COMIENZA LA INTERACCIÓN CON EL USUARIO DEL SIMULADOR
// ACÁ COMIENZA LA INTERACCIÓN CON EL USUARIO DEL SIMULADOR

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

//Acá empiezan las rutinas acorde a las preferencias que elige el usuario, que pueden o no basarse en las recomendaciones arrojadas por el IMC
do {
    intensidadEntrenamiento = parseInt(prompt("¿Cuál es el nivel de entrenamiento que querés tener?: \n" + "Indicá con un número según corresponda \n" + "(1) Bajo \n" + "(2) Moderado \n" + "(3) Intenso"));
}
while(intensidadEntrenamiento != 1 && intensidadEntrenamiento != 2 && intensidadEntrenamiento != 3);

do {
    tipoEntrenamiento = parseInt(prompt("¿Cuál es tu objetivo?: \n" + "Indicá con un número según corresponda \n" + "(1) Bajar de Peso \n" + "(2) Tonificar/Definir \n" + "(3) Muscularte"));
}
while(tipoEntrenamiento != 1 && tipoEntrenamiento != 2 && tipoEntrenamiento != 3);

// Devolución al usuario de rutina elegida de acuerdo a objetivo e intensidad
let rutinaElegida = obtenerRutina(intensidadEntrenamiento, tipoEntrenamiento);
rutinaElegida.usuario = usuario;
alert(JSON.stringify(rutinaElegida));

// HTML de la página de Training a partir de JS (DOM)

const contenedorrutinasTraining = document.getElementById("rutinasTraining");
const generadorRutinas = document.createElement("article");

const contenido = {
    titulo: "Generador de Rutinas",
    texto: "Complete el formulario y genere una rutina personalizada de acuerdo a sus necesidades"
};

generadorRutinas.innerHTML = `
                    <div class= "text-center">
                    <h1>${contenido.titulo}</h1>
                    <p>${contenido.texto}</p>
                    </div>
                `;

contenedorrutinasTraining.appendChild(generadorRutinas);