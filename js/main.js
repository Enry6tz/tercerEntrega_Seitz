
class Producto{
    constructor(id,nombre,precio,cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

class StockController {

    constructor(){
        this.arrayProductos = []
    }

    agregarAlStock(produ){
        this.arrayProductos.push(produ)
    }
    existe(id){
        //retorna verdadero si el id coincide con el producto
        return this.arrayProductos.some (producto => producto.id == id)
    }
    buscarProducto (id){
        //retorna el objeto producto
        return this.arrayProductos.find(producto => producto.id == id)
    }
    consultarStock(id, num){
        //retorna verdadero si hay stock disponible 
        return (num <= this.buscarProducto(id).cantidad)
             
    }
    modificarStock(id, num){
        //elimina num cantidad de stock
        this.buscarProducto(id).cantidad -= num
    }
    mostrarProductos (){
        let mostrarProd = ""
        this.arrayProductos.forEach(elem => {
            mostrarProd += "ID:" + elem.id + "\n" + " -nombre: "  + elem.nombre +" -precio $ " + elem.precio + " -stock: "+  elem.cantidad + "\n"
           })
        console.log("nuestros productos son: ")
        console.log(mostrarProd) 
    }
    resetStock(){
        this.buscarProducto(1).cantidad=10
        this.buscarProducto(2).cantidad=5
        this.buscarProducto(3).cantidad=15
        this.buscarProducto(4).cantidad=10
        this.buscarProducto(5).cantidad=8
    }
    
}

class CarritoController {
   
    constructor(){
        this.arrayCarrito = []
    }
    verCarrito(){
        //muestra los productos agregados en el carrito
        let mostrarCarrito = ""
        this.arrayCarrito.forEach(elem => {
            mostrarCarrito += "ID: "+ elem.id + "\n" + " -nombre: "  + elem.nombre +" -precio $ " + elem.precio + " -cantidad seleccionada: "+  elem.cantidad + "\n"
           })
        console.log("Tu carrito es: ")
        console.log(mostrarCarrito) 
    }
    agregarProducto(id , num){
        //crea un nuevo objeto nProdu del tipo producto a partir del producto buscado por ID, modificando la cantidad por num
        const productoS =listaProductos.buscarProducto(id)
        const nProdu = new Producto(productoS.id, productoS.nombre, productoS.precio, productoS.cantidad); 
        nProdu.cantidad = num
        this.arrayCarrito.push(nProdu)

    }
    calcularTotal(){
        let res=0;
        this.arrayCarrito.forEach( el=> {
            res += el.precio * el.cantidad
        })
        return res
    }
    calcularIVA(){
        let res=0;
        this.arrayCarrito.forEach( el=> {
            res += el.precio * el.cantidad
        })
        return res*0.20
    }
    vaciarCarrito(){
        //se le asigna un array vacio 
        this.arrayCarrito = []
        
    }
}


const carritoCompra = new CarritoController();
const listaProductos = new StockController();

    listaProductos.agregarAlStock(new Producto(1,"Samsung s23 Ultra", 410000, 10))
    listaProductos.agregarAlStock(new Producto(2,"Iphone 14 pro", 450000,5))
    listaProductos.agregarAlStock(new Producto(3,"Xiaomi mi 12T pro",320000,15))
    listaProductos.agregarAlStock(new Producto(4,"Motorola Edge 30",220000,10))
    listaProductos.agregarAlStock(new Producto(5,"Samsung Z Flip 4",310000,8))




console.log("Bienvenido a la tienda online")
listaProductos.mostrarProductos();
rta = prompt("Para iniciar una comprar ingrese cualquier tecla \nPara salir ingrese n \n     ¿Desea comprar algun producto? ")
while (rta != "n"){
    aux= prompt("para comprar uno o varios articulos ingrese 1," + "\n" + "para vaciar el carrito ingrese 2" + "\n" +  "para mostrar el carrito ingrese 3" + "\n" + "para volver a mostrar los productos ingrese 4" )
    switch (aux) {
    case"1":
        //comprar articulo
        let id = prompt("ingrese el ID del producto que desea comprar")
        if (listaProductos.existe(id)){
            let cant = prompt("ingrese la cantidad que desea comprar")
            if(listaProductos.consultarStock(id, cant)){
                listaProductos.modificarStock(id , cant);
                carritoCompra.agregarProducto(id, cant);
                console.log("Producto agregado correctamente")
            }else{console.log("no hay suficiente stock")}
        }else{console.log("ID no encontrado")}
        break;
    case "2":
        //vaciar carrito
        carritoCompra.vaciarCarrito();
        listaProductos.resetStock();
        console.log("carrito vaciado exitosamente")
        break;
    case "3":
        //mostrar carrito y total 
        carritoCompra.verCarrito();
        console.log("total parcial es:")
        console.log(carritoCompra.calcularTotal());
        break;
    case "4":
        listaProductos.mostrarProductos();
        break;
    default:
        console.log("valor ingresado incorrecto")
    break;
}
rta = prompt("para continuar comprando ingrese cualquier tecla, para salir ingrese n")
}

if (carritoCompra.calcularTotal()>0){
    carritoCompra.verCarrito();
    console.log("El Total de su compra es: ")
    console.log (carritoCompra.calcularTotal())
    console.log("El Total del IVA es: ")
    console.log (carritoCompra.calcularIVA())
    console.log("gracias por su compra, nos vemos pronto!")
    
}
else{
    console.log ("sin productos en el carrito, hasta pronto!")
}

