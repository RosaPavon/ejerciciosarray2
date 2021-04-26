
var numero =[];
var suma =0;
for (var i = 0; i < 3; i++){
   numero[i]=Number(prompt("Ingrese un número"));
   
}
if (numero[0]<numero[1]){
   if(numero[0]<numero[2])
   document.write( `El número menor es ` + numero[0])

}
if (numero[0]<numero[1]){
   if(numero[0]>numero[2])
   document.write( `El número menor es ` + numero[2])

}
else if (numero[0]>numero[1]){
   if(numero[1]<numero[2])
   document.write( `El número menor es ` + numero[1])

}
else if (numero[0]>numero[2]){
   if(numero[1]>numero[2])
   document.write( `El número menor es ` + numero[2])

}


