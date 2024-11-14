/* Actividad:
Proyecto Objetos en JavaScript
En este proyecto, practicarás los conceptos básicos de objetos con JS que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
Entregables
Para este proyecto, debes compartir la URL del archivo en el repositorio creado con la solución del problema descrito. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea un nuevo archivo a tu repositorio en tu equipo local para solucionar el problema planteado.
Crea un 'commit' en tu repositorio con este archivo para guardar los cambios crear una nueva versión de tu repositorio.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github del archivo agregado a tu repositorio con la solución. También puede ser la liga de tu commit.
*/

function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;

    this.describirLibro = function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    };
}

// Crear múltiples objetos libro
const milibro1 = new Libro('El juego de ender', 'Orson Scott Card', 1985, 'Disponible');
const milibro2 = new Libro('La biblioteca de la medianoche', 'Matt Haig', 2020, 'Prestado');
const milibro3 = new Libro('La Guerra de los Mundos', 'H. G. Wells', 1898, 'No disponible');

// Imprimir la información de cada libro
milibro1.describirLibro();
milibro2.describirLibro();
milibro3.describirLibro();

