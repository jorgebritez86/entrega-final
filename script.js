const botonModoNoche = document.getElementById('modo-noche');
const body = document.getElementById('body');

botonModoNoche.addEventListener('click', () => {
body.classList.toggle('dark');

localStorage.setItem('modo', body.classList.contains('dark') ? 'dark' : 'light');
});


const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'dark') {
body.classList.add('dark');
}




const productos = [
    {
id: 1,
nombre: "alharamain",
precio: 90000,
imagen: "alharamain.webp"
    },
    {
id: 2,
nombre: "asadlattafa",
precio: 70000,
imagen: "asadlattafa.webp"
    },

    {
        id: 3,
        nombre: "clubdenuit",
        precio: 100000,
        imagen: "club-de-nuit-intense.webp"
},
{
        id: 4,
        nombre: "espada",
        precio: 90000,
        imagen: "espada.webp"
},

{
        id: 5,
        nombre: "fakhar",
        precio: 85000,
        imagen: "fakhar.webp"
},
{
        id: 6,
        nombre: "khamra",
        precio: 90000,
        imagen: "khamra.webp"
}

    ]
    productos.forEach((productos) => {
        
        console.log(productos)})





const apiUrl = "https://rickandmortyapi.com/api/location";

async function getLocations ()  { 
const response = await fetch(apiUrl);
const location = await response.json();

console.log (location);

}

getLocations ();