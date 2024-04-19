const utils = {
     reset:()=>{
      document.querySelector("#nuevaTarea").value ="";
      document.querySelector("#nuevaDescripcion").value ="";
     },// Función flecha o anónima, es una forma simplificada de escribir una función (no se escribe la palabra función y no lleva nombre) ()=>{}

     clear:()=>{
       //1 llamo al id donde quiero que se abra el prompt(ventanita)
        const tablero = document.getElementById("tablero");

       //2 creo un elem (ventanita) donde me muestra el mje de limpiar o no.
        const ventanita = document.createElement("div");

       //3 le asigno una clase al prompt para darle estilo
          ventanita.className = "prompt";

       //4 la ventanita tiene que mostrar un mje, boton aceptar y boton cancelar
        
          const mensaje = document.createElement('p');
          mensaje.textContent = "¿Estas seguro que desea limpiar tablero e historial?";

       //5 creamos el boton
          const btnAceptar = document.createElement("button");
          btnAceptar.textContent = "ACEPTAR";

          const btnCancelar = document.createElement("button");
          btnCancelar.textContent = "CANCELAR";

       //6 agrego mensaje,btnAceptar y btnCancelar a la ventanita
          ventanita.append(mensaje,btnAceptar,btnCancelar);

       //7 para que se abra la ventanita en el tablero
          tablero.appendChild(ventanita);

       //8 creando la funcionalidad de los botones
         btnAceptar.addEventListener('click',()=>{
               tablero.removeChild(ventanita);
               toDoList.remove();
               checkedList.remove();
               panelHistorial.remove();
               localStorage.clear();
               location.reload();//reseta la pag solo, sin q yo le de la orden
         });  
          
         btnCancelar.addEventListener('click',()=>{
               tablero.removeChild(ventanita);
         })

      }, //Función flecha o anónima
    
}



