const miBiblioteca = [];

function Libro(titulo, autor, descripcion, portada) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.autor = autor;
    this.descripcion = descripcion;
    this.portada = portada;
}
function añadirLibro(nuevoLibro) {
    miBiblioteca.push(nuevoLibro);
}

const meditaciones = new Libro("Meditaciones", "Marco Aurelio", "Conjunto de meditaciones filosoficas breves sobre la vida.", "https://m.media-amazon.com/images/I/71iRHcSUhtL._UF1000,1000_QL80_.jpg");

const antifragil = new Libro("Antifragil", "Nassim Taleb", "Habla sobre un nuevo termino empleado por el autor, la antifragilidad, y como la vida y todo en ella se relaciona con lo fragil o antifragil.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NZpHkX8ozzMA1og4qY1joAZkXnLNKVFzuMAA6SsY4vWKRAWKWwYrS7w&s=");

const confesiones = new Libro("Confesiones", "San Agustin de Hipona", "Narra sobre la vida y reflexiones de San Agustin de Hipona, su experiencia con la religion y la vida", "https://image.cdn1.buscalibre.com/5b56caa14463b583508b4567.RS500x500.jpg");

const libroCincoAnillos = new Libro("El Libro de los Cinco Anillos", "Miyamoto Musashi", "Divide el libro en cinco tomos distintos donde cada uno narra el estilo de vida que se debe seguir para ser un guerrero completo", "https://http2.mlstatic.com/D_NQ_NP_909724-MLA99897222923_112025-O.webp");

const habitosAtomicos = new Libro("Habitos Atomicos", "James Clear", "Narra diversas estrategias o consejos para desarrollar buenos habitos", "https://images.cdn1.buscalibre.com/fit-in/360x360/50/37/5037ad069dd27a4f1859acd5acac0fa3.jpg");

añadirLibro(meditaciones);
añadirLibro(antifragil);
añadirLibro(confesiones);
añadirLibro(libroCincoAnillos);
añadirLibro(habitosAtomicos);

const contenedorLibros = document.querySelector(".contenedorLibros");
function mostrarCatalogo() {
    contenedorLibros.innerHTML = "";

    miBiblioteca.forEach(libro => {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-libro");
    
    const titulo = document.createElement("h3");
    titulo.classList.add("titulo-libro");
    titulo.textContent = libro.titulo;

    const autor = document.createElement("p");
    autor.classList.add("autor-libro");
    autor.textContent = `Autor: ${libro.autor}`;

    const portada = document.createElement("img");
    portada.classList.add("portada-libro");
    portada.src = libro.portada;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(autor);
    tarjeta.appendChild(portada);
    contenedorLibros.appendChild(tarjeta);
    });
}
mostrarCatalogo();


