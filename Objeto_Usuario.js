var input = document.getElementById("valorComentario")
var comentario = document.getElementById("comentario")
class usuario{
    constructor(id, nombre, celular, delegacion, puntos, nivel){
        this.id = id
        this.nombre = nombre,
        this.celular = celular,
        this.delegacion = delegacion,
        this.puntos = puntos,
        this.nivel = nivel
    }
    sumaPuntos(mision)
    {
        let puntosASumar;
        switch(mision)
        {
            case 'like':
            puntosASumar = 1
            break;
            case 'video':
            puntosASumar = 10
            break;
            case 'comentario':
            puntosASumar = 5
            break;
            case 'mision_cumplida':
            puntosASumar = 20
            break;
            case 'compartir_video':
            puntosASumar = 20
        }
        this.puntos += puntosASumar
        input.innerHTML = this.puntos;
    }
}
var david = new usuario(1, 'David', 55646, "MH", 5000, "Oro")
comentario.addEventListener("click", david.sumaPuntos("comentario"))
