
let nomb1=(window.prompt("Escribe una palabra"))
let nomb2=(window.prompt("Escribe una palabra"))
let nomb3=(window.prompt("Escribe otra palabra"))


let frase = [nomb1, nomb2, nomb3];

document.getElementById("resultado").innerHTML=`
<h1>${frase[1]} ${frase[2]} ${frase[0]}</h1>
`
