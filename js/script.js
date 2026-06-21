const miBiblioteca = [];

function Libro(id, titulo, autor, descripcion) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.autor = autor;
    this.descripcion = descripcion;
}
function añadirLibro(nuevoLibro) {
    miBiblioteca.push(nuevoLibro);
}


const meditaciones = new Libro("Meditaciones", "Marco Aurelio", "Conjunto de meditaciones filosoficas breves sobre la vida.");

const antifragil = new Libro("Antifragil", "Nassim Taleb", "Habla sobre un nuevo termino empleado por el autor, la antifragilidad, y como la vida y todo en ella se relaciona con lo fragil o antifragil.");

const confesiones = new Libro("Confesiones", "San Agustin de Hipona", "Narra sobre la vida y reflexiones de San Agustin de Hipona, su experiencia con la religion y la vida");

const libroCincoAnillos = new Libro("El Libro de los Cinco Anillos", "Miyamoto Musashi", "Divide el libro en cinco tomos distintos donde cada uno narra el estilo de vida que se debe seguir para ser un guerrero completo");

const habitosAtomicos = new Libro("Habitos Atomicos", "James Clear", "Narra diversas estrategias o consejos para desarrollar buenos habitos");

añadirLibro(meditaciones);
añadirLibro(antifragil);
añadirLibro(confesiones);
añadirLibro(libroCincoAnillos);
añadirLibro(habitosAtomicos);

console.log(miBiblioteca);
