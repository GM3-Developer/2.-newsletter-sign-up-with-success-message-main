window.addEventListener('DOMContentLoaded', ()=>{
    //Expresión regular para validar un correo electrónico
    const email_regex = /^([a-z0-9.])\S*@([a-z])\S*\.([a-z])\S{0,5}/;

    //Al hacer click al botón "Subscribe to monthly newsletter" realizará las siguientes acciones
    document.getElementById('submit').addEventListener('click', ()=>{
        if(email_regex.test(document.getElementById('email').value)=== true){
            //Mostrará la tarjeta del modal y se ocultará la tarjeta principal
            document.getElementById('card').style.display = "none";
            document.getElementById('modal').style.display = "block";
            document.getElementById('lemail').setAttribute("data-content", "");
        }else{
            /*Habrá un texto en rojo que diga "valid email required" y el fondo, 
            borde y color de texto de la caja de texto cambiará a rojo*/
            document.getElementById('email').style.border = "1px solid red";
            document.getElementById('email').style.color = "red";
            document.getElementById('email').style.backgroundColor = "rgba(255, 0, 0, .1)";
            document.getElementById('lemail').setAttribute("data-content", "Valid email required");
        }
    });

    //Al levantar la tecla al escribir, realizará lo siguiente
    document.getElementById('email').addEventListener('keyup', (e)=>{
        //Previamente el campo tiene borde, color de texto y color de fondo en rojo y el label dice "Valid email required"
        //Hasta que se cumpla la siguiente condición cambiará las propiedades antes mencionadas a color verde y desaparece label
        if(email_regex.test(e.target.value) === true){
            document.getElementById('email').style.border = "1px solid green";
            document.getElementById('email').style.color = "initial";
            document.getElementById('email').style.backgroundColor = "rgba(0, 255, 0, .1)";
            document.getElementById('lemail').setAttribute("data-content", "");
        }
    });

    //Al hacer click en el botón "Dismiss", realizará lo siguiente
    document.getElementById('dismiss').addEventListener('click', ()=>{
        //Cerrará el modal y mostrará la tarjeta principal
        document.getElementById('card').style.display = "flex";
        document.getElementById('modal').style.display = "none";
        document.getElementById('email').value = null;

        //Se reestablecen las propiedades de la tarjeta principal a valores iniciales
        document.getElementById('email').style.border = "1px solid rgba(0, 0, 0, 0.356)";
        document.getElementById('email').style.color = "initial";
        document.getElementById('email').style.backgroundColor = "initial";
    });
});