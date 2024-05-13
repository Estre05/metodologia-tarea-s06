"Use strict";

//Iniciar contador
let claveCorrecta=3214;
let num;
let cont = 0;
let maxInt=5;
do{
    cont++
    num = Number(prompt("Ingrese la clave"));
    if(cont >= maxInt){
        alert("Bloqueo de tarjeta");
        break;
    }
}while(num != claveCorrecta);
if(num === claveCorrecta){
    alert("Operación Exitosa");
}else{
    alert("Clave incorrecta");
}

