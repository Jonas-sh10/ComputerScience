class Contacto{
    constructor(nombre, apellidos, telefono){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos{
    constructor(){
        this.lista = [];
    }

    agregarContacto(nombre, apellidos, telefono){
        const contacto = new Contacto(nombre,apellidos,telefono);
        this.lista.push(contacto);
    }

    buscarContactoPorNombre(nombre){
        for(let i=0; i<this.lista.length ;i++){
            if(this.lista[i].nombre == nombre){
                return this.lista[i];
            }
        }
        return null;
    }
}

const listaContactos1 = new ListaContactos();
listaContactos1.agregarContacto('jhonatan','ash',333);
listaContactos1.agregarContacto('dario','jash',45);
listaContactos1.agregarContacto('chikichiki','sha',54);
listaContactos1.agregarContacto('ququ','shs',684);

console.log('Lista de Contactos');
console.log(listaContactos1.lista);

console.log(`Buscando a jhonatan`);
console.log(listaContactos1.buscarContactoPorNombre('jhonatan'));
console.log(`Buscando a alex:${listaContactos1.buscarContactoPorNombre('alex')}`);
