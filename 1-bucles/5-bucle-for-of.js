// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

for(var i = 0; i < gente.length; i++){
    if((gente[i].nombre).match(/^J/)){
        console.log(gente[i].nombre);
    }
}

console.log("/////////////////////////////////////////")
for( var x of gente){
    console.log(x.nombre);
    if(x.nombre.startsWith("J")){
        console.log(x.nombre);
    }
}
console.log("/////////////////////////////////////////")

for(var x of gente){
     if ((x.nombre).match(/^J/)) {
         console.log(x.nombre);
     }
}
