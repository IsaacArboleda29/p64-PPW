let mi_carro={
    marca: 'Mazda',
    modelo:'MZX= 2000',
    anio:2024,
    detalle_auto: function(){
        console.log('auto:${this.marca}-${this.modelo). Año:${this.anio},')
    }
}

console.log(mi_carro.marca)
mi_carro.anio= 2025
console.log(mi_carro.detalle_auto())



function carro(marca, modelo, anio){
    this. marca=marca
    this. modelo =modelo
    this. anio=anio 
    this.detalle_auto=function(){
    console.log('auto:${this.marca}-${this.modelo). Año:${this.anio},')
 
    }

}
