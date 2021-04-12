# Pokedex ![pikachu](https://cdn.emojidex.com/emoji/px32/pikachu.png 'pikachu')

Explora y busca cualquier pokemon que quieras ver en [pokeapi](https://pokeapi.co).

# Funcionalidades

- Traer pokemons de la api [pokeapi](https://pokeapi.co)
- Agregar a favoritos cualquier pokemon y una sección de favoritos para visualizar tus pokemones favoritos
- Carga infinita para traer pokemones en la pokedex
- Visualizar los atributos de los pokemones (imagen, peso, tamaño, tipos)
- Boton de compartir que permite copiar los atributos del pokemon en el portapapeles.

# Estructura de Proyecto

## Components

Directorio de componentes, debido al tamaño de la aplicación no se ha aplicado un sistema de componentes como Atomic Design. Sin embargo, si la aplicación fuera a crecer, esta podria distribuirse según Atomic Design de manera sencilla.

## Layouts

Componentes de tipo presentacional, solo aplica estilos que permite a su contenido ordenarse según los wireframes.

## Views

Componentes de tipo contenedor, existe tanto logica de aplicacion y llamadas a la api. Ademas estan enlazados al enrutador. Es el que distribuye la data a toda la aplicacion o hijos componentes directos a traves de propiedades.

## Services

El servicio de la api para conseguir los pokemones

- getAllPokemon: Traer 20 pokemones
- getPokemonDetail: Traer los atributos de un pokemon dado un nombre
- getMorePokemons: Traer más pokemones, de 20 en 20

## Models

Modelos de la api para usarlo en la aplicacion con Typescript.

## CSS

Implementacion de un sistema de diseño usando variables de CSS para la aplicación.

## Utils

Utilidades de la aplicación

- sleep: Para dormir la aplicación según un tiempo
- capitalize: Para capitalizar un texto

## Composables

Usado para implementar un mini store usando el api de Vue3.

# Herramientas

- [Vue3](https://en.reactjs.org/) - Libreria
- [Typescript](https://www.typescriptlang.org/) - Superset de javascript
- [VueUse](https://vueuse.org) - Utilidades de Vue
- [VueRouter](https://next.router.vuejs.org) - Vue enrutador
- [Axios](https://github.com/axios/axioshttps://github.com/axios/axios) - Para HTTP requests

# Deployment

[Netlify](https://davos-pokedex.netlify.app)

# Para correr esta aplicación

1. Clona este repositorio
2. Corre `yarn`
3. Corre `yarn dev`
