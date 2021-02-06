# To Do App - Equipo 25
# Descripción del proyecto

Se presenta una aplicación que permite:
- Agregar tareas
- Marcar una tarea como completada
- Eliminar una tarea que no se necesite

La aplicación se encuentra desarrollada con JavaScript, HTML y CSS, los elementos visuales como tareas nuevas y botones se agregaron a partir del código JS. En seguida se presenta el desarrollo del código y el producto final.

# Desarrollo

# HTML

VISTA

CÓDIGO
Hacemos referencia a los estilos de la aplicación

```html
    <link rel="stylesheet" href="css/styles.css" />
```


En el documento HTML agregamos elementos iniciales para la creación de la aplicación, como:
- Contenedor de la aplicación
- Formulario 
- Input para escribir la tarea a agregar
    - Este lleva un id (input-task) para identificar el elemento en el código JS.
- Botón para agregar una nueva tarea
    - Le asignamos un id (btn-task) también para poder utilizarlo en el archivo JS
- Contenedor para la lista de tareas, le asignamos una clase (todo-box)
- Referencia al código JS

```html
    <div class="app"> 
        <h1>ToDo App</h1>
        <form>
            <input type="text" placeholder="Add a task" id="input-task" />
            <button id="btn-task" type="submit">Add</button>
        </form>
        <div class="todo-box"></div>
    </div>
    <script src="js/main.js"></script>
```
