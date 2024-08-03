const { response } = require("express")

function realizar_peticion(tipo){
    if(tipo == 'GET'){
        fetch('/mensaje')
        .then((data)=> data.json())
        .then((data)=>{
            let container =document.getElementById('container')
         
            
            console.log(data)
            container.innerHTML= data.mensaje
        })
        .catch((mensaje)=>console.error(`[error] - ${mensaje}`))

    }else if (tipo == 'POST'){

    }
}