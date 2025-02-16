let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        
        for (let i = 0; i < habilidades.length; i++) {
            let porcentaje = habilidades[i].getAttribute("data-percent"); // Obtén el valor desde el atributo data-percent
            habilidades[i].style.width = porcentaje + "%"; // Cambia el ancho de la barra
            habilidades[i].querySelector("span").textContent = porcentaje + "%"; // Actualiza el texto del porcentaje
        }
    }
}

// Detecta el scroll para aplicar la animación
window.onscroll = function() {
    efectoHabilidades();
};