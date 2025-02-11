// Lista de variables vacia
let listaDeAmigos = []; // Inicializa un arreglo vacío para almacenar los nombres de amigos

// Funcion para agregar el nombre a la lista
function agregarAmigo() {
    // Limpia el mensaje del amigo secreto sorteado
    document.getElementById("resultado").innerHTML = "";
    
    // Obtiene el valor ingresado en el campo de texto con id "amigo"
    let nombreDeAmigo = document.getElementById("amigo").value;
    
    // Verifica si el campo de entrada está vacío
    if (nombreDeAmigo === "") {
        // Muestra una alerta si no se ingresó ningún nombre
        alert("Es necesario colocar un nombre");
    } else {
        // Utiliza una expresión regular para verificar si el nombre contiene solo letras
        let regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(nombreDeAmigo)) {
            // Muestra una alerta si el nombre contiene caracteres no permitidos
            alert("El nombre solo debe contener letras y espacios");
        } else {
            // Verifica si el nombre ya está en la lista de amigos
            if (listaDeAmigos.includes(nombreDeAmigo)) {
                // Muestra una alerta si el nombre ya fue agregado previamente
                alert("Este nombre ya fue agregado");
            } else {
                // Agrega el nombre al final de la lista de amigos
                listaDeAmigos.push(nombreDeAmigo);
                
                // Limpia el campo de entrada para que esté listo para un nuevo nombre
                document.getElementById("amigo").value = "";
                
                // Llama a la función para actualizar la lista en el HTML
                actualizarListaHTML();
                
                // Muestra la lista de amigos en la consola para verificar
                console.log(listaDeAmigos);
            }
        }
    }
}

// Funcion para actualizar el contenido de la lista HTML
function actualizarListaHTML() {
    // Obtiene el elemento <ul> del HTML con id "listaAmigos"
    let ul = document.getElementById("listaAmigos");
    
    // Limpia el contenido actual del elemento <ul>
    ul.innerHTML = "";
    
    // Recorre el arreglo de amigos y agrega cada uno a la lista HTML
    listaDeAmigos.forEach(function(amigo) {
        // Crea un nuevo elemento <li> para cada amigo
        let li = document.createElement("li");
        
        // Establece el contenido de texto del elemento <li> con el nombre del amigo
        li.textContent = amigo;
        
        // Agrega el nuevo elemento <li> al elemento <ul>
        ul.appendChild(li);
    });
}

// Funcion para seleccionar un nombre de amigo de forma aleatoria y mostrarlo en el HTML
function sortearAmigo() {
    // Verifica si la lista de amigos está vacía
    if (listaDeAmigos.length === 0) {
        // Muestra una alerta si no hay amigos en la lista
        alert("La lista de amigos está vacía");
        return;
    }
    
    // Genera un índice aleatorio basado en el tamaño de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Selecciona un amigo de la lista usando el índice aleatorio
    let amigoAleatorio = listaDeAmigos[indiceAleatorio];
    
    // Muestra el nombre del amigo seleccionado aleatoriamente en la consola
    console.log("Amigo seleccionado aleatoriamente:", amigoAleatorio);
    
    // Limpia el contenido del elemento <ul> con id "listaAmigos"
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    // Actualiza el contenido del elemento <ul> con id "resultado" para mostrar el amigo ganador
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia cualquier contenido anterior
    let li = document.createElement("li");
    li.textContent = "El amigo secreto sorteado es: " + amigoAleatorio;
    resultado.appendChild(li);
    
    // Borra los elementos guardados en la lista para reiniciar
    listaDeAmigos = [];
    
    // Retorna el nombre del amigo seleccionado aleatoriamente
    return amigoAleatorio;
}
