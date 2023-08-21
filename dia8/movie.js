
class Movie {
    constructor(titulo, publicacion, foto, actores, escritor, director){
     this.titulo = titulo
     this.publicacion = publicacion
     this.foto = foto
     this.actores = [actores]
     this.escritor = escritor
     this.director = director
    }
    
 }
 

 function mostrarMovie(){
 
    let titulo = $("#titulo").val()
    let publicacion = $("#publicacion").val()
    let director = $("#director").val()
    let actores = $("#actores").val()
    let foto = $("#foto").val()
 
    let newMovie = [titulo,publicacion,director,actores,foto]
 
    let crear = $("#Movies")
      crear.append( 
        `<div class="card-container">
          <div class="card">
            <div class="img-content">
              <img src="${foto}">
          </div>
          <div class="content">
            <div class="arreglo">
              <h1 class="head">${titulo}</h1>
              <h1 class="head">${publicacion}</h1>
              <h2 class="medio">${actores}</h2>
              <h2 class="medio">${director}</h2>
            </div>
          </div>
          </div>
        </div>`    
 )}

let pelicula1 = new Movie("Duro de matar", 2010,"https://th.bing.com/th/id/OIP.5HIkU1z0SRu8_wih8y2e0gHaKa?pid=ImgDet&rs=1",['Bruce Willis',' Jhonny Depp', ' Kristen Stewart'],"steven Spilbert","Quentin Tarantino");
let pelicula2 = new Movie("Crepusculo",2013,"https://th.bing.com/th/id/OIP.7Ze-8a6VEkY72Gt7r3Eu4gHaJj?pid=ImgDet&rs=1",['Kristen Stewart',' Robert Pattinson',' Taylor Lautner'],"stefany meyer","Steven Spilbert");
let pelicula3 = new Movie("Pulp Fiction",1995,"https://th.bing.com/th/id/OIP.wWjLOnxH2yGHVfAtCRmfaAHaLH?pid=ImgDet&rs=1",['Bruce Willis',' Morgan Freeman', ' Jhon Travolta'],"quentin tarantino","Quentin Tarantino");
let pelicula4 = new Movie("Hunger games",2015,"https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",['Jennifer Lawrence',' Josh Hutcherson',' Liam Hemsworth'],"Elizabeth Banks","Gary Ross" )
let peliculas = [pelicula1,pelicula2,pelicula3, pelicula4];
    
      function cartasPelis(i){
        $('#Movies').append(
            `<div class="card-container" id="Movies"> 
            <div class="card">
                <div class="img-content">
                  <img src="${peliculas[i].foto}" alt="">
                </div>
                <div class="content">
                  <h1 class="head">${peliculas[i].titulo}</h1>
                  <h2 class="head">${peliculas[i].publicacion}</h2>
                 <br> 
                  <h2  class="medio">${peliculas[i].actores}</h2>

                  <h2  class="medio">${peliculas[i].director}</h2>
                </div>
            </div>
        </div>`
    )
    }
    function movies() {
      for (let i = 0; i < peliculas.length; i++) {
          cartasPelis(i);   
      } 
    }
    function subirMovies() {
      movies();
      
    }
    
    $(document).ready(function() {
      subirMovies();
    });
    
    
    
    