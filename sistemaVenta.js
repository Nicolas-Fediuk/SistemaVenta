class Producto{

    static contarProducto=0;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._idProducto=++Producto.contarProducto;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
    toString(){
        return `idProduto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`
    }
}


class Orden{

    static contarOrdenes=0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        //contador para asignar los id
        this._idOrdenes=++Orden.contarOrdenes;
        //arreglo para guardar los productos
        this._productos=[];
        //this._contadorProductosAgregados=0;
    }
    get idOrdenes(){
        return this._idOrdenes;
    }
    agregarProductos(producto){
        //solo 5 productos por orden
        if(this._productos.length<Orden.MAX_PRODUCTOS){
            //agrego productos al arreglo
            this._productos.push(producto);
        }
        else{
            console.log("No se puede serguir agregando productos");
        }
    }
    calcularTotal(){
        let totalVenta=0;
        //en cada uno de los productos acumulo el precio
        for(let producto of this._productos){
            totalVenta+=producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        //para mostrar los productos del arreglo
        let productosOrden='';
        for(let producto of this._productos){
            productosOrden+="\n{" +producto.toString()+'}';
        }
        console.log(`"orden: "${this._idOrdenes}", "total: "${this.calcularTotal()}", "Producto: "${productosOrden} `);
    }
}

let producto1 = new Producto("m.2",2000);
let producto2 = new Producto("fuente",1000);

let orden1=new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();

let producto3=new Producto("mouse",300);

let orden2=new Orden();
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);
orden2.agregarProductos(producto3);

orden2.mostrarOrden();


