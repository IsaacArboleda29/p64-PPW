const URL="http://www.ups.edu.ec"
var texto= "programacion y plataformas web"
function imprimir_01(){
    let  texto2= "Avengers"
    //Esto no se debe hacer
    var texto3= "Liga de la justicia"

    console.log(texto)
    console.log(texto2)
    console.log(texto3)

    URL="http://www.ups.edu.ec"

    //No se puee cambiar a una constante. 
    console.log(URL)
}
function imprimir_02(){
    console.log(texto)
    //Texto 2 no existe en esta funcion
    console.log(texto2)
    //Texto 3 no existe en esta funcion
    console.log(texto3)
}

imprimir_01()
imprimir_02()