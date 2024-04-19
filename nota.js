const nota = {
        agregar:()=>{
            //captura los datos que el usuario ingresa
                const titulo = document.getElementById("nuevaTarea").value; // value, captura el valor y no el cod. elemento
                const descripcion= document.getElementById("nuevaDescripcion").value;
    
                    if (tareaContador == 4){

                    //1 llamo al id donde quiero que se abra el prompt(ventanita)
                        const tablero = document.getElementById("tablero");

                    //2 creo un elem (ventanita) donde me muestra el mje de limpiar o no.
                        const ventanita = document.createElement("div");
            
                    //3 le asigno una clase al prompt para darle estilo
                        ventanita.className = "prompt";
            
                    //4 la ventanita tiene que mostrar un mje, boton aceptar 
                        const mensaje = document.createElement('p');
                        mensaje.textContent = ("Lo siento,ha llegado al máximo de tareas pendientes,debe terminar una para agregar más");
                
                    //5 creamos el boton
                        const btnAceptar = document.createElement("button");
                        btnAceptar.textContent = "ACEPTAR";
                    
                    //6 agrego mensaje,btnAceptar y btnCancelar a la ventanita
                        ventanita.append(mensaje,btnAceptar,);
            
                    //7 para que se abra la ventanita en el tablero
                        tablero.appendChild(ventanita);
                        
                    //8 creando la funcionalidad de los botones
                        btnAceptar.addEventListener('click',()=>{
                            tablero.removeChild(ventanita);
                            console.log("numero de tarea:" + tareaContador)
                            utils.reset(); 

                        });  

                    
                    } else if((titulo == null || titulo =="") || (descripcion == null || descripcion =="")){
                    //1 llamo al id donde quiero que se abra el prompt(ventanita)
                        const tablero = document.getElementById("tablero");

                    //2 creo un elem (ventanita) donde me muestra el mje de limpiar o no.
                        const ventanita = document.createElement("div");
            
                    //3 le asigno una clase al prompt para darle estilo
                        ventanita.className = "prompt";
            
                    //4 la ventanita tiene que mostrar un mje, boton aceptar y boton cancelar
                        const mensaje = document.createElement('p');
                        mensaje.textContent = ("ATENCIÓN! Falta información");
                
                    //5 creamos el boton
                        const btnAceptar = document.createElement("button");
                        btnAceptar.textContent = "ACEPTAR";
                    
                    //6 agrego mensaje,btnAceptar y btnCancelar a la ventanita
                        ventanita.append(mensaje,btnAceptar,);
            
                    //7 para que se abra la ventanita en el tablero
                        tablero.appendChild(ventanita);
            
                    //8 creando la funcionalidad de los botones
                        btnAceptar.addEventListener('click',()=>{
                            tablero.removeChild(ventanita);
                            tareaContador --;
                            console.log("numero de tarea:"+tareaContador)
                            const notaParaBorra = document.getElementById(id1234);
                            const padre = notaParaBorra.parentNode;//llamo al padre de la notita//
                            padre.removeChild(notaParaBorra);//esto es lo que borra la nota//
                             
                            utils.reset();
                            nota.guardar();
                        });  
                    
                
                    }
        
                    else{
                    tareaContador ++;
                    idTarea ++;
                    console.log("numero de tarea:"+tareaContador)
                    console.log("id nombre de nota:"+idTarea)
            
                //creo un elemento (creando el hojita amarilla)
                    const tareaNueva = document.createElement("div");
                    nota.crear(tareaNueva,idTarea,titulo,descripcion);
                
            
                //agrego tarea nueva a to do list (para que me aparezca la hojita amarilla)
                    toDoList.append(tareaNueva);
                    utils.reset();//para que se resetee el input(quede en blanco)
                    nota.guardar();//para guardar en el localStorage
                
                }
        },


        crear:(tareaNueva,idTarea,titulo,descripcion)=>{
            tareaNueva.setAttribute("id",idTarea);
            tareaNueva.classList.add("tarea");
            tareaNueva.innerHTML= `<h4 class="tituloTarea">${titulo}</h4>
                                    <p class="descripcionTarea">${descripcion}</p>
                                    <div>
                                        <button id="borrar" onclick="nota.borrar(${idTarea})"><img src="./iconos/borrar.png" alt=""> </button>
    
                                        <button id="editar" onclick="nota.editar(${idTarea})"><img src="./iconos/editar.png" alt=""></button>
    
                                        <button id="check" onclick="nota.cambiarDeEstado(${idTarea})"><img src="./iconos/check.png" alt=""></button>
                                    </div>`;
        },


        borrar:(id1234)=>{
                
            //1 llamo al id donde quiero que se abra el prompt(ventanita)
                const tablero = document.getElementById("tablero");

            //2 creo un elem (ventanita) donde me muestra el mje de limpiar o no.
                const ventanita = document.createElement("div");
    
            //3 le asigno una clase al prompt para darle estilo
                ventanita.className = "prompt";
    
            //4 la ventanita tiene que mostrar un mje, boton aceptar y boton cancelar
                const mensaje = document.createElement('p');
                mensaje.textContent = "¿Estas seguro que desea borrar esta nota?";
        
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
                    tareaContador --;
                    console.log("numero de tarea:"+tareaContador)
                    const notaParaBorra = document.getElementById(id1234);
                    const padre = notaParaBorra.parentNode;//llamo al padre de la notita//
                    padre.removeChild(notaParaBorra);//esto es lo que borra la nota//
                    
                    nota.guardar();
            });  
            
                btnCancelar.addEventListener('click',()=>{
                    tablero.removeChild(ventanita);
            });
           
            
        },

          
        editar:(id1234)=>{
            //1 llamamos a la nota que queremos editar
                const notaParaEditar = document.getElementById(id1234);
                console.log (notaParaEditar.childNodes);
            
             //2 llamo al id donde quiero que se abra el prompt(ventanita)
                const tablero = document.getElementById("tablero");

            //3 creo un elem (ventanita) donde voy a mostrar la nota que quiero editar
                const ventanita = document.createElement("div");

             //4 le asigno una clase al prompt para darle estilo
                ventanita.className = "prompt";

             //5 la ventanita tiene que mostrar el textarea titulo, textarea descripcion y boton de acptar
                
                //5.1 creando el elem textarea para el titulo
                const titulo = document.createElement("textarea");
                titulo.id = "editarTitulo";

                //5.2 creando el elem textarea para descripción
                const descripcion = document.createElement("textarea");
                descripcion.id = "editarDescripcion";

            //6 llamamos el título y la descripción original  y las coloco dentro de las textarea para editarlas
                titulo.textContent =(notaParaEditar.childNodes[0].textContent);
                descripcion.textContent =(notaParaEditar.childNodes[2].textContent);

            //7 creamos el boton
                const boton = document.createElement("button");
                boton.textContent = "aceptar";

            //8 agrego titulo , descripcion y boton a ventanita
                ventanita.append(titulo,descripcion,boton);

            //9 para que se abra la ventanita en el tablero
                tablero.appendChild(ventanita);

            //10 agregamos acciones al boton aceptar
                boton.addEventListener('click',()=>{

                    //10.1 capturo las modificaciones en el título y en la descripción
                    const nuevoTitulo = document.getElementById("editarTitulo");
                    const nuevaDescripcion = document.getElementById("editarDescripcion");
                    
                    //10.2 copio los valores capturados(nuevos) al titulo y descripcion original
                    notaParaEditar.childNodes[0].textContent = nuevoTitulo.value.toUpperCase();
                    notaParaEditar.childNodes[2].textContent = nuevaDescripcion.value;
                    
                    //10.3 cierro ventanita
                    const padre = ventanita.parentNode;
                    padre.removeChild(ventanita);

                    nota.guardar();
            
                });
            
        }, //Función flecha o anónima


        cambiarDeEstado:(id1234)=>{
            const tareaLista = document.getElementById(id1234);
            console.log(tareaLista.childNodes);
            const padre = tareaLista.parentNode;
            padre.removeChild(tareaLista);//me lo borra de toDoList//

                if(padre == toDoList){
                    tareaContador--
                    checkedList.appendChild(tareaLista);//me aparece en checkedList//
                }
                
                else {
                    const lista = document.createElement("li");//creamos el elemento
                    lista.className = "tareasArchivadas";//asignamos una clase
                    const titulo = document.createElement("span");//creo un elem.llamado span para colocar el texto del titulo 
                    titulo.textContent = tareaLista.childNodes[0]. textContent + ": ";//agrego el texto al span
                    const descripcion = document.createElement("span");//creo un elem.llamado span para colocar el texto de la descripcion
                    descripcion.textContent = tareaLista.childNodes[2].textContent + ".Finalizado el ";//creo un elem.llamado span para colocar el 
                    const fecha = new Date().toLocaleString();//creacion de fecha con la clase date
                    lista.append(titulo,descripcion,fecha);//agregamos hijos a li
                    panelHistorial.appendChild(lista);//agregamos un li(lista) a ul(panelHistorial)
                    nota.guardarHistorial();
                }
        
            nota.guardar();
        },

        
        guardar:()=>{
                    const notasParaGuardar = document.querySelectorAll('.tarea');//me llama a todas las tareas
                    const array = [];
                

                        for(let n of notasParaGuardar){//recorre cada uno de los elem que hay para guardar
                                const padre = n.parentNode;//llamo el padre de la primera nota

                                objeto = {
                                    padre:padre.id,//creo una clave para llamar al padre de la nota tarea(clave,valor)
                                    id:n.id,//llamo al id de la nota
                                    titulo:n.childNodes[0].textContent,
                                    descripcion:n.childNodes[2].textContent,
                                }

                            array.push(objeto)//al array le agrego un elem(notas)
                            console.log(array);
                        }

                    localStorage.setItem("notas",JSON.stringify(array));//guardar
                    localStorage.setItem("idTarea",JSON.stringify(idTarea));//guardar
                    localStorage.setItem("tareaContador",JSON.stringify(tareaContador));//guardar

                    
                    /*JSON.parse(localStorage.getItem("notas"));*///recuperar

        },


        guardarHistorial:()=>{
            const notasHistorial = document.querySelectorAll(".tareasArchivadas");
            const array = [];

            for( let h of notasHistorial){
                const parent = h.parentNode;

                objeto = {
                    padre:parent.id,
                    texto:h.innerText
                }
            
                array.push(objeto)
            }

            localStorage.setItem("historial",JSON.stringify(array));

            
        },


        recuperar:()=>{
            const notasCargadas = JSON.parse(localStorage.getItem('notas'))??[];//recupera
                notasCargadas.forEach((n)=>{ //forEach recorre todo el array
                    const tareaNueva = document.createElement("div");
                    const padre = document.getElementById(n.padre);
                    nota.crear(tareaNueva,n.id,n.titulo,n.descripcion);
                    padre.appendChild(tareaNueva);
                });//recupera notas en toDoList y checklist (tablero)

            const notasDelHistorial = JSON.parse(localStorage.getItem('historial'))??[];//recupera
                notasDelHistorial.forEach((h)=>{
                    const lista = document.createElement("li");//creamos el elemento
                    lista.className = "tareasArchivadas";//asignamos una clase
                    const padre = document.getElementById(h.padre);
                    lista.textContent = h.texto;
                    padre.appendChild(lista);
                })

                idTarea = JSON.parse(localStorage.getItem('idTarea')??0);//recupera
                tareaContador = JSON.parse(localStorage.getItem('tareaContador')??0);//recupera

             
        },
    }


       


       





