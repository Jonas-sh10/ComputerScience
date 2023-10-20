function mayorLetrasPais(){

    const a = ["Mexico", "Guatemala", "El Salvador", "Panama"];
    let i = 1;
    let contadorCaracteres = a[0].length;
    let pais = a[0];

    while (i < a.length) {
        if( a[i].length > contadorCaracteres ){
            contadorCaracteres = a[i].length;
            pais = a[i];
        }
        i++;
    }
    console.log(pais);
}

mayorLetrasPais();