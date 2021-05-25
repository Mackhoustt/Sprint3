let producto1 = document.querySelector('.producto1');
let producto2 = document.querySelector('.producto2');
let producto3 = document.querySelector('.producto3');
let producto4 = document.querySelector('.producto4');
let producto5 = document.querySelector('.producto5');
let producto6 = document.querySelector('.producto6');
let producto7 = document.querySelector('.producto7');
let producto8 = document.querySelector('.producto8');
let producto9 = document.querySelector('.producto9');
let producto10 = document.querySelector('.producto10');
let producto11 = document.querySelector('.producto11');
let producto12 = document.querySelector('.producto12');
let producto13 = document.querySelector('.producto13');
let producto14 = document.querySelector('.producto14');
let producto15 = document.querySelector('.producto15');
let producto16 = document.querySelector('.producto16');
function sumar(){
let pagarArray= [];
producto1.addEventListener("click",e=>{
    document.location.href="index.html";
    const añadirP = () => {
        let producto1 = {
            imagen: "./image/computador1.jpg",
            nombre: "Computador Intel",
            descripcion: "Computador de componentes básicos",
            precio:  1000000
        }
    arrayProducto1.push(producto1);
    return producto1
    };
