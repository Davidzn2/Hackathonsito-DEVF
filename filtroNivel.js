function  niveles(puntos){
    let bronce = 'bronce' 
    let plata = 'plata'
    let oro = 'oro'
    if(puntos > 50 && puntos <= 100){
        console.log(bronce);
    }
    else if(puntos > 100 && puntos <= 150){
        console.log(plata);
    }
    else if(puntos > 150){
        console.log(oro)
    }
    else{
        console.log('sigue esforzandote amigo')
    }
}
niveles(5)

