
let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let pregunta= parseInt(window.prompt("Escreibe un número del 1 al 12 y descubre el mes que le corresponde"))

switch (pregunta) {
    case 1:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[0]} es el mes por que el has preguntado</p>       `

        break;
    case 2:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[1]} es el mes por que el has preguntado</p>       `

        break;

    case 3:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[2]} es el mes por que el has preguntado</p>       `
    
        break;
    case 4:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[3]} es el mes por que el has preguntado</p>       `
        
    break;
    case 5:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[4]} es el mes por que el has preguntado</p>       `
            
        break;
    case 6:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[5]} es el mes por que el has preguntado</p>       `
                
        break;
                
    case 7:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[6]} es el mes por que el has preguntado</p>       `
        
        break;
        
    case 8:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[7]} es el mes por que el has preguntado</p>       `
        
        break;
    
    case 9:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[8]} es el mes por que el has preguntado</p>       `
        
        break;
        
    case 10:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[9]} es el mes por que el has preguntado</p>       `
        
        break;
    case 11:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[10]} es el mes por que el has preguntado</p>       `
        
        break;
        
    case 12:
        document.getElementById("resultado").innerHTML=`
        <p>${mes[11]} es el mes por que el has preguntado</p>       `
        
        break;
            

    default:
        document.getElementById("resultado").innerHTML=`
        <p>Por favor introduzca un valor válido</p>       `

        break;
}




