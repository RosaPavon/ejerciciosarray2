
var numero =[];
var suma =0;
for (var i = 0; i < 20; i++){
   numero[i]=Math.random()*(35-18+1)+18;
   suma = suma + numero[i];
}

document.write( 'La media es ' + suma/20)

