

var numero =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var mult =0;
for (var i = 0; i < 1; i++){
   numero[i]=Number(prompt("Ingrese un número de 0 a 9"));
   mult = numero[i]*2;
}

document.write( 'El número multiplicado por 2 es ' + mult)


