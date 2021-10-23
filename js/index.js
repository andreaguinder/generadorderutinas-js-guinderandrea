// Botón para ir al Generador de Rutinas con JQuery
$("#btn-generarRutina").append(`<div>
                                <a href='./pages/training.html'>
                                <button class='btnGym btn-lg' id='btnJquery'> IR A GENERAR MI RUTINA PERSONALIZADA</button>
                                </a>
                                </div>
                                <br>
                                <div>
                                <p id="textoSobreRutina"> Haz un click en el botón y te llevará a un formulario que podrás completar para generar tu rutina </p>
                                </div>`
);

$("#carrouselEspacioGym").append(`<h2 class="text-center m-2 align-content-center">Conocé nuestro espacio</h2>
                                    <div id="carouselExampleFade" class="carousel slide carousel-fade my-3" data-bs-ride="carousel">
                                    <div class="carousel-inner mb-5">
                                        <div class="carousel-item active"  style="height:80%" >
                                        <img src="./images/carrousel-1.jpg" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item"  style="height:80%" >
                                        <img src="./images/24-hours-gym-r0lg4mkl4m.jpeg" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item"  style="height:80%" >
                                        <img src="./images/fitness-center_p.jpg" class="d-block w-100"alt="...">
                                    </div>
                                    </div>
                                    `
);