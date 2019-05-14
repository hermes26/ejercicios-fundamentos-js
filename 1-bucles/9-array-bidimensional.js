
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]


var numero1 = 0;
var numero2 = 0;
for(var i = 0; i < 3; i++){
    numero1 = i;
    for(var j = 0; j < 3; j++){
        matriz[i][j] = numero1.toString() + numero2.toString();
        numero2 = j;
    }
}
console.log(matriz);

// var numero3 = 0;
// var numero4 = 0;
// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 3; j++){
//         matriz[i][j] = numero3.toString() + numero4.toString();
//         numero4++;
//     }
//     numero4= 0;
//     numero3++;
// }
// console.log(matriz);
