
class Notificador{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    enviarMensajePersonas(){
        console.log(`Ha enviado un mensaje a ${this.nombre} con la ${this.edad} y la profesion ${this.profesion}`);
    }
}

class Mensaje{

    constructor(mensaje){
        this.mensaje = mensaje;
    }

    enviar(){
        console.log(`Este es un mensaje importante!!!`);
    }
}

class Email extends Mensaje{
    constructor(mensaje){
        super(mensaje);
    }

    enviar(){
        console.log(`Este mensaje es enviado mediante Email: ${this.mensaje}`);
    }
}

class SMS extends Mensaje{
    constructor(mensaje){
        super(mensaje);
    }

    enviar(){
        console.log(`Este mensaje es enviado mediante SMS: ${this.mensaje}`);
    }
}

class WA extends Mensaje{
    constructor(mensaje){
        super(mensaje);
    }

    enviar(){
        console.log(`Este mensaje es enviado mediante WA: ${this.mensaje}`);
    }
}

const notificado1 = new Notificador('Dario',45,'Ingeniero');
const mensaje1 = new Email('Hola que tal -> Email');

console.log(`Jhonatan  mediante `);
notificado1.enviarMensajePersonas();
mensaje1.enviar();


// const mensaje2 = new SMS('Hola que tal -> SMS');
// mensaje2.enviar();

// const mensaje3 = new WA('Hola que tal -> WA');
// mensaje3.enviar();

