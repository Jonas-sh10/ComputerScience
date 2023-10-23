
class Contacto{
    constructor(nombre, apellidos, telefono){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._telefono = telefono;
    }
}

class ListaContactos{
    constructor(){
        this.listaContactos = [];
    }

    agregarContacto(contacto){
        this.listaContactos.push(contacto);
        console.log(contacto);
    }
    
    buscarContacto(nombrePersona){
        let nom, ap, tel;
        for(let i=0; i<this.listaContactos.length;i++){
            if(this.listaContactos[i]._nombre == nombrePersona){
                nom = this.listaContactos[i]._nombre;
                ap = this.listaContactos[i]._apellidos;
                tel = this.listaContactos[i]._telefono;
                break;
            }
        }

        if(nom != null){
            console.log(`El contacto con nombre ${nom} y apellido ${ap} tiene el telefono -> ${tel}`);
        }else{
            console.log(`El contacto con el nombre ${nombrePersona} no existe...`);
        }
    }
}

const miLista = new ListaContactos();
let rpta;

do{
    let nombre, apellido, telefono;
    nombre = prompt('Ingrese el nombre:').toLocaleLowerCase();
    apellido = prompt('Ingrese el apellido:').toLocaleLowerCase();
    telefono = prompt('Ingrese el telefono:');
    const contacto = new Contacto(nombre, apellido, telefono);
    miLista.agregarContacto(contacto);
    rpta = prompt('Deseas ingresar otro, si o no?');
}while(rpta.toLowerCase() === 'si');

let buscar = prompt('Ingrese el nombre a buscar').toLocaleLowerCase();
miLista.buscarContacto(buscar);

/*const contacto1 = new Contacto('jhona1', 'SH1', '1');
const contacto2 = new Contacto('alex', 'SH', '231');
const contacto3 = new Contacto('jhona3', 'SH3', '3');
const contacto4 = new Contacto('jhona4', 'SH4', '4');
const contacto5 = new Contacto('jhona5', 'SH5', '5');
const contacto6 = new Contacto('jhona6', 'SH6', '6');
const contacto7 = new Contacto('jhona7', 'SH7', '7');

miLista.agregarContacto(contacto1);
miLista.agregarContacto(contacto2);
miLista.agregarContacto(contacto3);
miLista.agregarContacto(contacto4);
miLista.agregarContacto(contacto5);
miLista.agregarContacto(contacto6);
miLista.agregarContacto(contacto7);*/

