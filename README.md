# To Do App - Equipo 25
# Descripción del proyecto

Se presenta una aplicación que permite:
- Agregar tareas
- Marcar una tarea como completada
- Eliminar una tarea que no se necesite

La aplicación se encuentra desarrollada con JavaScript, HTML y CSS, los elementos visuales como tareas nuevas y botones se agregaron a partir del código JS. En seguida se presenta el desarrollo del código y el producto final.

# Desarrollo



### Código
Hacemos referencia a los estilos de la aplicación

```html
    <link rel="stylesheet" href="css/styles.css" />
```

### Creación de estructura básica de la To Do App

En el documento HTML agregamos elementos iniciales para la creación de la aplicación, todos los crearemos por medio de JS, como:
- Contenedor para el título
```js
var father = document.getElementById("app");
//Creación de div con la clase titulo
var header = document.createElement("div");
//Añadiendo Atributos
header.setAttribute("class", "titulo");
//Insertando Todo lo anterior dentro del id="app"
father.appendChild(header);
```
- Título de la aplicación
```js
//Creación de etiqueta h1 para título 
var elementHone = document.createElement("h1")
//Creacion de texto que va dentro del h1
var contentHone = document.createTextNode("To Do App");
//Poniendo texto dentro del h1
elementHone.appendChild(contentHone);
//Insertando Todo dentro de class="titulo"
header.appendChild(elementHone);
```
- Formulario 
```js
//Creacion de etiqueta form para la creación de una tarea
var createNote = document.createElement("form");
//Añadiendo sus Atributos
createNote.setAttribute("align","center");
//Insertando Todo dentro del id="app"
father.appendChild(createNote);

```
- Input para escribir la tarea a agregar
    - Este lleva un id **(input-task)** para identificar el elemento en el código JS.
```js
//Creando de etiqueta input
var input = document.createElement("input");
//Añadiendo Atributos
input.setAttribute("type","text");
input.setAttribute("placeholder","Add a task");
input.setAttribute("id","input-task");
//Insertando Todo en el elemento form creado con anterioridad
createNote.appendChild(input);
```
- Botón para agregar una nueva tarea
    - Le asignamos un id **(btn-task)** también para poder utilizarlo en el archivo JS
```js
//Creando una etiqueta del tipo button
var button = document.createElement("button");
//Añadiendo estilos al boton
button.setAttribute("type","submit");
button.setAttribute("id","btn-task");
//Creando texto para el boton
var textButton = document.createTextNode("Add");
//Añadiendo el texto al Boton
button.appendChild(textButton);
//Insertando en el elemento form
createNote.appendChild(button);
```
- Contenedor para la lista de tareas, le asignamos una clase **(todo-box)**
```js
//Creando div que será el contenedor de tareas
var box = document.createElement("div");
//Añadiendo Atributos
box.setAttribute("class", "todo-box");
//Insertando a el contenedor app
father.appendChild(box);
```
- Referencia al código JS
```js
<script src="main.js"></script>
```

# JAVASCRIPT

### Código
Una vez se ejecute la aplicación se hará la referencia al archivo JS que contiene la funcionalidad de la “To Do App”.

Iniciamos declarando las constantes que utilizaremos durante la ejecución de la aplicación:

1. La primer constante *inputTask* se le asigna el elemento del HTML que tiene el id **#input-task**, el cual establecimos con anterioridad.
2. A la segunda constante *btnTask* se le asigna el elemento que tiene el id **#btn-task**
3. A la tercer constante *toDoList* le asignamos el contenedor para las tareas con la clase **.todo-box** así como los botones de acción de cada una:
    - Terminar ✅
    - Eliminar ❌   
4. Y una variable isChecked para determinar más adelante si una tarea ya fue completada

```js
const inputTask = document.querySelector("#input-task"); // 1
const btnTask = document.querySelector("#btn-task"); // 2
const toDoList = document.querySelector(".todo-box"); // 3
let isChecked = true;
```

Posteriormente declaramos los *Event Listeners* que ocuparemos para la funcionalidad el código:

1. El primer *event Listener* del tipo **click**, será asignado al botón *btnTask* para que se active cuando se quiera agregar una nueva tarea, activando la funcion *addTask*
2. El segundo *event Listener*, también del tipo click, es asignado a los botones de acción que se encuentran en el contenedor *toDoList*, activandose la función *deleteComplete*
```js
btnTask.addEventListener("click", addTask);
toDoList.addEventListener("click", deleteComplete);
```

Continuamos con las funciones que se activaran durante los eventListeners, la primera es la función ***addTask***

Recibimos el evento que se activa cuando damos click en el botón para agregar la tarea y declaramos las constantes para los elementos que conformaran las tareas agregadas.
1. *listDiv*, crea un elemento tipo *div*, es el contenedor que  guardará los elementos de cada tarea (texto y botones).
2. *newToDo*, crea un elemento del tipo *li*, elemento de una lista, en este caso una tarea.
3. *btnCheck*, crea un elemento del tipo button, utilizado para indicar una tarea como terminada.
4. *btnDelete*, crea elemento del tipo button, este botón se utilizará para eliminar la tarea de la lista.

```js
function addTask(e) {
    e.preventDefault();

    const listDiv = document.createElement("div"); // 1
    const newToDo = document.createElement("li"); // 2
    const btnCheck = document.createElement("button"); // 3
    const btnDelete = document.createElement("button"); // 4
```

Una vez que declaramos los elementos que ocuparemos para cada tarea proseguimos a agregarla a la lista.

Primero obtenemos el valor que se escribe en el input, por medio de un if evaluamos si se escribió algo en el input, en determinado caso que este este vació regresamos null para finalizar la función y que no se agregue nada; en caso de que si se tenga texto agregamos en el contenedor de *listDiv* la nueva tarea *newToDo*
```js
 newToDo.innerText = inputTask.value;
    if (inputTask.value === "") {
        return null;
    } else {
        listDiv.appendChild(newToDo);
    }
```
Agregamos los botones de acción para cada tarea:

1. Botón para marcar tarea como terminada, le agregamos un texto por medio de la propiedad *innerText*, y una clase (***btn-check***) por medio de *classList*, la clase nos permitirá cambiar estilos por medio de CSS y hacer referencia al botón en código posterior, agregamos el botón al contenedor de *listDiv* con el elemento anterior, que es el texto de la tarea.

```js
    btnCheck.innerText = "V";
    btnCheck.classList.add("btn-check");
    listDiv.appendChild(btnCheck);
```

2. Botón para eliminar, agremos también un texto y una clase (***btn-delete***), y agregamos el botón al contenedor *listDiv* con los dos elementos anteriores.
 ```js
    btnDelete.innerText = "X";
    btnDelete.classList.add("btn-delete");
    listDiv.appendChild(btnDelete);
```

Tenemos lista una tarea con el texto de la tarea y sus dos botones de acción respectivos (Marcar como terminado / Eliminar), ahora agregamos el elemento de *listDiv* al contenedor *toDoList* donde se mostrarán todas las listas del momento.
Después limpiamos el input para agregar una nueva tarea.

```js
    toDoList.appendChild(listDiv);
    inputTask.value = "";
```

Proseguimos a la función ***deleteComplete***, recibimos el evento que se activa y hacemos referencia al objeto que activa este evento para asignarlo a una constante denominada *item*, el objeto que se obtiene es el contenedor donde se almacena la tarea y sus botones de acción.

```js
    function deleteComplete(e) {
    const item = e.target;
```

Iniciamos identificando si el botón que se pulsó fue el *marcar la tarea como terminada*, esto lo podemos verificar si la clase del elemento en su primera posición es *btn-checked*, después consutlamos si la variable declarada en un inicio (*isChecked*) es false, lo que significa que la tarea no está marcada como terminada; si estas dos condiciones se cumplen obtenemos el elemento padre (la tarea) y la marcamos como terminada con una función de CSS (***textDecoration = "lineThrough"***) y declaramos la variable *isChecked* como true. 

Ejemplo de tarea terminada:
1. Esta tarea no esta terminada
2. ~~Esta tarea si está terminada~~

```js
if (item.classList[0] === "btn-check" && isChecked === false) {
        const todo = item.parentElement;
        todo.style.textDecoration = "line-through";
        isChecked = true;
    } 
```

Para determinar si una tarea está terminaday queremos ponerla de nuevo como **no terminada**, realizamos un *else if*, donde verificamos que la clase del elemeno sea *btn-check*, y que la variable *isChecked* sea true, obtenemos el elemento padre, y por medio de *textDecoration* le indicamos que sea ***none***. Indicamos la variable *isChecked* como false.

```js
else if (item.classList[0] === "btn-check" && isChecked === true) {
        const todo = item.parentElement;
        todo.style.textDecoration = "none";
        isChecked = false;
    }
```

Si la clase del objeto que se obtuvo por medio del evento es *btn-delete* quiere decir que se quiere eliminar la tarea, obtenemos el elemento padre y creamos una constante que recibirá un valor boolean de confirmación para eliminar la tarea.

Si el valor que se recibe es *true*, por medio de la función *remove* eliminamos la tarea, de lo contraio se regresa un false y la tarea permanece en el listado.

```js
  if (item.classList[0] === "btn-delete") {
        const todo = item.parentElement;
        const answer = confirm("Are you sure you want to delete?");

        if (answer === true) {
            todo.remove();
        } else {
            return false;
        }
    }
```

### Integrantes del equipo

Can Pérez Christian Alejandro  
Cano Meza José Armando  
García Ortega Jhonatan Elias  
Villa Bárcenas Daniela  

