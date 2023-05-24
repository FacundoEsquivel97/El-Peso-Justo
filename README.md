
# El Peso Justo



En este juego se debe adivinar el peso del Pokémon mostrado en pantalla! 

Deploy: https://elpesojusto-pokemon.netlify.app

# Descripción

La web fue hecha totalmente en Javascript puro con ayuda de la PokeApi. Se hace una petición GET y se muestra en pantalla la imagen, el nombre, los tipos y la altura del Pokémon recibido. También se muestra un formulario donde ingresar el peso del Pokémon y presionar el botón se compara el valor ingresado con el obtenido por la API. Cuando estos valores sean iguales aumentará en uno el contador de aciertos, si el valor es incorrecto se calculará la diferencia y la misma se restará a la cantidad de créditos disponibles. Luego el botón cambiara y podremos darle a siguiente, lo que hará una nueva petición GET para obtener un Pokémon diferentes y aumentar en uno la cantidad de Pokémon vistos. El juego termina cuando nos hayamos quedado sin créditos y se mostrará en pantalla la cantidad de aciertos y Pokémon vistos.

# Creditos

El CSS fue hecho gracias a la librería Nes.css.
https://nostalgic-css.github.io/NES.css/

La información y las imágenes del Pokémon vienen directamente de la PokeApi.
https://pokeapi.co/

