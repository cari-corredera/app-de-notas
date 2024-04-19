const util = {
    promptEdit: (id) =>{
        //llamamos la nota que queremos editar
        const notaParaEditar = document.getElementById(id);

        console.log(notaParaEditar.childNodes);//pido un console.log de notaParaEditar para ver los nodos internos en un array

        //llamo el id donde quiero que se abra el prompt
        const tablero = document.getElementById("tablero");

        //creo el elemento donde voy a colocar la nota que quiero editar
        const panelEditor = document.createElement('div');

        //le asigno una clase a panelEditor
        panelEditor.className = 'prompt';

        //Creo textarea para el titulo
        const titulo = document.createElement('textarea');

        //le asigno el texto contenido en h4 de la nota que quiero editar
        let tarea = document.createTextNode(notaParaEditar.childNodes[0].textContent);

        //agrego este texto dentro de titulo
        titulo.appendChild(tarea);

        //Creo textarea para la descripcion
        const descripcion = document.createElement('textarea');

        //le asigno el texto contenido en p de la nota que quiero editar
        let detalle = document.createTextNode(notaParaEditar.childNodes[2].textContent);

        //agrego este texto dentro de descripcion
        descripcion.appendChild(detalle);

        //Creo un boton para confirmar cambio
        const btnAceptar = document.createElement('button');
        texto = document.createTextNode('ACEPTAR');
        btnAceptar.appendChild(texto);

        //Agrego titulo y descripcion, btnAceptar en el panelEditor
        panelEditor.append(titulo,descripcion,btnAceptar);

        //Agrego panelEditor en el tablero
        tablero.appendChild(panelEditor);

       // const nuevoTitulo = document.getElementsByTagName(titulo)
       btnAceptar.addEventListener('click',()=>{
          
            const nuevaTarea=document.getElementById('editarTarea');
            const nuevaDescripcion=document.getElementById('editarDescripcion');

            notaParaEditar.childNodes[0].textContent=nuevaTarea.value;
            notaParaEditar.childNodes[2].textContent=nuevaDescripcion.value;
            
            const padre = panelEditor.parentNode;
            padre.removeChild(panelEditor);
        })
    }
      
        
        

    




}