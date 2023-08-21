class Professional{
    constructor(nombre, edad, profesion, foto){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.foto = foto;
    }

}

let leo = new Professional("Leo Dicaprio",55,"actor","https://i.pinimg.com/736x/76/b6/f3/76b6f32f07a6c5e6b1b931034a3a1911.jpg")
let tom = new Professional("Tom Cruise", 58,"actor", "https://th.bing.com/th/id/OIP.3SAxnI9VbYZIoo7Nfu8ItwAAAA?pid=ImgDet&rs=1")
let kristen = new Professional("Kristen Stewart", 35, "Actriz", "https://th.bing.com/th/id/R.64dfaec766ac43a50f44821c6b7539d3?rik=E25mCBDth5U%2ffw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-g2WPvxri2_8%2fUQCCUXHq3lI%2fAAAAAAAArD8%2f1DtsJOSP8Gs%2fs400%2ftumblr_mg0nqz6RnO1r1imibo1_500.png&ehk=%2bz3kSzpK4I7rYxF5uBkvC1JRN1Q1Hma8vVa3i%2fdH8oA%3d&risl=&pid=ImgRaw&r=0")
let quentin =  new Professional("Quentin Tarantino", 60, "Escritor", "https://i.pinimg.com/originals/27/ee/e1/27eee12f94850721b8465063e7207f8f.jpg" )
let spilberg = new Professional("Steven Spilberg" , 70, "director", "https://th.bing.com/th/id/OIP.-Md6vr0Zt73v6Zbkt9JP2QAAAA?pid=ImgDet&rs=1")

let profesionales = [leo,tom,kristen,quentin,spilberg]

 

    function cartas(i){
        $('#pros').append(
            `<div class="card-container" id="pros"> 
            <div class="card">
                <div class="img-content">
                  <img src="${profesionales[i].foto}" alt="">
                </div>
                <div class="content">
                  <p class="heading">${profesionales[i].nombre}</p>
                  <h2 id="edad">${profesionales[i].edad}</h2>
                  <h2 id="profesion">${profesionales[i].profesion}</h2>
                </div>
            </div>
        </div>`
    )
}

   function pros1() {
        for (let i = 0; i < profesionales.length; i++) {
            cartas(i);   
        } 
    }
    function subirPros() {
        pros1();
        
    }

    $(document).ready(function() {
        subirPros();
    });