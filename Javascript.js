
let valor;
 let cadena 

do {
    valor = prompt("ingrese un numero para carcular cuantos multiples de 5 lo componen")
    console.log("los multiplos de 5 son")
    cadena=[]
    for(let i = 1 ; i <= valor; i++){
        
        if (i % 5 == 0){
            cadena.push(i)
        
        }
    }
alert(cadena)
} while (valor != 0)




