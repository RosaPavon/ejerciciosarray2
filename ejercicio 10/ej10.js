

var numero =["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
var mult =0;
for (var i = 0; i < 1; i++){
   numero[i]=Number(prompt("Ingrese un número de 0 a 10"));
   mult = numero[i]++;
   if (mult<=10 && mult>0){
      
      document.write( 'El número es ' + numero[i])

    
   }

   else if(mult>10){
      document.write( 'Introduzca un número correcto')

   }
     
   }

   if(mult<0){     
      document.write(numero);
   }



