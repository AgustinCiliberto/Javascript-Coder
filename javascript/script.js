//Cartel de Bienvenida
function bienvenida(){
    alert("Bienvenidos a la tienda de Otto's Online");
}
bienvenida();
//Listado de productos y seleccion
/*Declaro una funcion que adentro tenga un prompt el cual le diga al usuario los productos en stock con su valor.
Cada item posee un numero con el cual el usuario podra elegir el producto.*/
function productos(){
    //Declaro la variable precio total, la cual va a tener la suma de cada caso del switch segun los productos que haya elegido el usuario. Ademas se usa de referencia para poder terminar el ciclo con un "return" y le de su valor a la funcion.
    precioTotal = 0;
    while (true) {
    let listaProductos = prompt("Elija el producto que desee: \n1)Alimento Balanceado $1000 \n2)Ropa $500 \n3)Collar $300 \n4)Cucha $5000 \n5)Pagar y salir");
    // Declaro dos variables que van a ser la descripcion y el valor del producto que se van a ir modificando segun el item elegido
    let precio = 0;
    let nombre = "";
    //Creo una condicional para que el usuario pueda elegir el producto, el valor lo toma del prompt listaProductos
    switch (listaProductos) {
        case "1":
            precio = 1000;
            nombre = "Alimento Balanceado";
            break;
        case "2":
            precio = 500;
            nombre = "Ropa";
            break;
        case "3":
            precio = 300;
            nombre ="Collar";
            break;
        case "4":
            precio = 5000;
            nombre = "Cucha";
            break;
        default:
            if (listaProductos === "5"){
                return precioTotal;
            }else {
                alert("Opcion Invalida");
            }
    }
    //Esta linea de codigo, cada vez que se cumpla el ciclo, lo que hara es sumarle el precio individual de cada eleccion de producto al precio total. Arrojando un alert con el producto que eligio el usuario, el precio del mismo y un total provisorio. La funcion tendra el valor de la variable precioTotal
    precioTotal = precio + precioTotal;
    alert("Producto elegido: " + nombre + "." + "Precio: " + "$" + precio + "." + "Total: " +"$" + precioTotal);
}
}
//Entonces una vez finalizado el ciclo en la opcion nº5 del switch, la variable total arrojara el valor de la funcion y se dara un alert con el valor total de la compra.
let total = productos();
alert("El precio total de su compra es: $" + total);