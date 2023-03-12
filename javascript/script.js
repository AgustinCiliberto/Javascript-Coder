//Cartel de Bienvenida
function bienvenida(){
    alert("Bienvenidos a la tienda de Otto's Online");
}
bienvenida();
// creo los productos con una clase constructora y los detallo en las siguientes variables
class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre,
        this.precio = precio
    }
};

const alimentoBalanceado = new Productos("Alimento Balanceado", 1000);
const ropa = new Productos("Ropa", 500);
const collar = new Productos("Collar", 300);
const cucha = new Productos("Cucha", 5000);

//creo un array el cual va a contener la lista con los productos
const arrayProductos = [alimentoBalanceado, ropa, collar, cucha];


function productos(){
const carrito = [];
//Declaro la variable precio total, la cual va a tener la suma de cada caso del switch segun los productos que haya elegido el usuario. Ademas se usa de referencia para poder terminar el ciclo con un "return" y le de su valor a la funcion.
let precioTotal = 0;
while (true) {
    

//prompt
const elijaProducto = prompt("Elija el producto que desee: \n1)Alimento Balanceado $1000 \n2)Ropa $500 \n3)Collar $300 \n4)Cucha $5000 \n5)Pagar y salir")

// Declaro dos variables que van a ser la descripcion y el valor del producto que se van a ir modificando segun el item elegido
let precio = 0;
let nombre = "";

 //Creo una condicional para que el usuario pueda elegir el producto, el valor lo toma del prompt elijaProducto

switch (elijaProducto) {
    case "1":
        carrito.push(alimentoBalanceado);
        precio = alimentoBalanceado.precio;
        nombre = alimentoBalanceado.nombre
        break;
    case "2":
        carrito.push(ropa);
        precio = ropa.precio;
        nombre = ropa.nombre;
        break;
    case "3":
        carrito.push(collar);
        precio = collar.precio;
        nombre = collar.nombre;
        break;
    case "4":
        carrito.push(cucha);
        precio = cucha.precio;
        nombre = cucha.nombre;
        break;
    default:
        if (elijaProducto === "5"){
            return precioTotal
        }else{
            alert("Opcion invalida")
        }
};
//Esta linea de codigo, cada vez que se cumpla el ciclo, lo que hara es sumarle el precio individual de cada eleccion de producto al precio total. Arrojando un alert con el producto que eligio el usuario, el precio del mismo y un total provisorio. La funcion tendra el valor de la variable precioTotal
precioTotal = precio + precioTotal;
alert("Producto elegido: " + nombre + "." + "Precio: " + "$" + precio + "." + "Total: " +"$" + precioTotal);
};
};
//Entonces una vez finalizado el ciclo en la opcion nº5 del switch, la variable total arrojara el valor de la funcion y se dara un alert con el valor total de la compra.
let total = productos();
alert("El precio total de su compra es $" + total);