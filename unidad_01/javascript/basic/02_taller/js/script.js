var contador = 1

function cargar_elementos(){
    var container=document.getElementById("content");
    

    var div = document.createElement("div")
    div.className= "item-box"
    var texto = document.createTextNode("Item" +contador)
    contador++
    div.appendChild(texto)

    content.appendChild(div)
}
function eliminar_elementos(){
    var content = document.getElementById("content")
    content.removeChild(content.lastElementChild)
    contador --
}