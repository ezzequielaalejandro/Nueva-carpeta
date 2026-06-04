function calificar(puntaje){

    let estrellas = document.querySelectorAll(".estrellas span");

    estrellas.forEach(function(estrella, indice){

        if(indice < puntaje){
            estrella.classList.add("activa");
        }
        else{
            estrella.classList.remove("activa");
        }

    });

    document.getElementById("resultado").innerHTML =
        "Puntuación: " + puntaje + "/5";

    localStorage.setItem("puntuacion", puntaje);
}

window.onload = function(){

    let puntuacionGuardada = localStorage.getItem("puntuacion");

    if(puntuacionGuardada){
        calificar(parseInt(puntuacionGuardada));
    }

}

window.addEventListener("load", () => {

    const logo = document.getElementById("logo");
    const barra = document.getElementById("barra");
    const porcentaje = document.getElementById("porcentaje");
    const loader = document.getElementById("loader");

    const texto = "DATA-PB";

    let indice = 0;

    function escribirLogo(){

        if(indice < texto.length){

            logo.textContent += texto[indice];

            indice++;

            setTimeout(escribirLogo, 180);

        }

    }

    escribirLogo();

    let progreso = 0;

    const intervalo = setInterval(() => {

        progreso++;

        barra.style.width = progreso + "%";

        porcentaje.textContent = progreso + "%";

        if(progreso >= 100){

            clearInterval(intervalo);

            setTimeout(() => {

                loader.classList.add("loader-finish");

                setTimeout(() => {

                    loader.style.display = "none";

                },1500);

            },600);

        }

    },35);

});