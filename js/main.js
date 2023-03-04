
function calcularTotal(arr){
    let res=0;
    arr.forEach( el=> {
        res += el.precio * el.cantidad
    
    })
    return res
}
function mostrarProductos(){
    listaProducto.forEach(el => {
        console.log("/////////////////")
        console.log(el.id)
        console.log(el.nombre)
        console.log(el.precio)
        console.log("stock disponible:")
        console.log(el.stock)
    });
}

const listaProcutos =[{id:1, nombre: "p1",precio:10, stock:2, cantidad:0},
                    {id:2, nombre: "p2",precio:20, stock:2, cantidad:0},
                    {id:3, nombre: "p3",precio:30, stock:2, cantidad:0},
                    {id:4, nombre: "p4",precio:40, stock:2, cantidad:0},
                    {id:5, nombre: "p5",precio:50, stock:2, cantidad:0}]

const carritoCompra=[]


alert("Bienvenido a la tienda online")
console.log("nuestros productos son:")
mostrarProductos

alert("para iniciar una comprar ingrese cualquier tecla, para salir ingrese n")
rta = prompt("Desea comprar algun producto? ")

while(rta != "n"){
    let id =prompt("ingrese el ID del producto que desee comprar")
    if (!isNaN(id) && listaProcutos.some( producto => producto.id == id)){
        let cantidad =prompt ("¿cuantos desea comprar?")
        const producto= listaProcutos.find( producto => producto.id ==id)
        if (cantidad <= producto.stock){
        producto.cantidad =cantidad
        carritoCompra.push( producto)
        listaProcutos[id-1].stock -= cantidad
        let mostrar = prompt ("Producto agregado al carrito, si desea ver nuevamente la lista de productos, ingrese s")
        }else{
            console.log("no contamos con el stock suficiente")
            console.log("nuestro stock es" + listaProcutos[id-1].stock)
        }
        
        if (mostrar == "s"){
            mostrarProductos
        }
    }else{
        console.log("ID incorrecto.")
    }
    rta =prompt("desea continuar? ingrese cualquier letra para continuar, o ingrese n para salir")
} 
console.log ("el total de su compra es" + calcularTotal(carritoCompra))