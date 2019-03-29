class usuario{
    constructor(id, nombre, celular, delegacion, puntos, nivel){
        this.id = id
        this.nombre = nombre,
        this.celular = celular,
        this.delegacion = delegacion,
        this.puntos = 0,
        this.nivel = ""
    }

    sumaPuntos(mision)
    {
        let puntosASumar = 0

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
    }
}

var david = new usuario(1, 'David', 5555, 'MH')