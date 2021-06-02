     

         var empleados = [];
         var princi = document.getElementById("principal");

         var formulario = ` <form method="GET">
                <fieldset>
                    <legend>Datos del empleado</legend>

                    <div class="input-field col s12">
                    <label for="nombres">Nombres</label>
                    <input type="text" id="nombres" required>
                    </div>

                    <div class="input-field col s12">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" required>
                    </div>

                    <div class="input-field col s6">
                    <label for="edad">Edad</label>
                    <input type="number" id="edad" required>
                    </div>

                    <div class="input-field col s6">
                    <label for="salario">Salario</label>
                    <input type="number" id="salario" required>
                    </div>

                    <button class="btn waves-effect waves-light" type="reset" onclick="nuevoempleado()" >Enviar</button>

                </fieldset>
                
            </form>`

        
         var tablaempleados = `<table class="highlight" id="templeados">
                    <tr>
                        <th>N°</th><th>Nombres</th><th>Apellidos</th><th>Edad</th><th>Salario</th>
                    </tr>

                    
                </table>`   
         
         
            function nuevoemp(){
             princi.innerHTML = formulario;
         }

          function verempleados(){
            princi.innerHTML = tablaempleados;
            mostrarTabla();
          }

          function eliminarprimer(){
              console.log(empleados.shift());
              verempleados();
          }

          function eliminarultimo(){
              console.log(empleados.pop());
              verempleados()
          }

          function borrar(){
              empleados = [];
              verempleados();
          }


         function nuevoempleado(){
             console.log("entre a la funsion");

             var lnombres = document.getElementById("nombres").value;
             var lapellidos = document.getElementById("apellidos").value;
             var ledad = document.getElementById("edad").value;
             var lsalario = document.getElementById("salario").value;


            empleados.push({nombres:lnombres,apellidos:lapellidos,edad:ledad,salario:lsalario});

            console.log(empleados);
             
         }

         function mostrarTabla(){
             var templeados = document.getElementById("templeados");

             for(i in empleados){
                 templeados.innerHTML += `<tr>
                                        <td>${parseInt(i) + parseInt(1)}</td>
                                        <td>${empleados[i].nombres}</td>
                                        <td>${empleados[i].apellidos}</td>
                                        <td>${empleados[i].edad}</td>
                                        <td>$${empleados[i].salario}</td>
                                        </tr>`;
             }
         }
