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
    const  productoStorage = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    añadirP();
    productoStorage();
});

botonProducto2.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto2 = {
            imagen: "./image/computador2.jpg",
            nombre: "Computador HP",
            descripcion: "Computador de componentes básicos",
            precio:  1200000
        }
    arrayProducto2.push(producto2);
    return producto2
    };
    const productoStorage = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayproducto1));
    }
    CrearItem();
    productoStorage();
});
botonDetalle3.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto3 = {
            imagen: "./img/dulce3.jpg",
            nombre: "Paletas Chocolatados",
            descripcion: "Ricas Paletas Chocolatados",
            precio:  5000
        }
    arrayBotonDetalle1.push(producto3);
    return producto3
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle4.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto4 = {
            imagen: "./img/dulce4.jpg",
            nombre: "Manjar",
            descripcion: "Rico Manjar",
            precio: 3000
        }
    arrayBotonDetalle1.push(producto4);
    return producto4
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle5.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto5 = {
            imagen: "./img/tortas.jpg",
            nombre: "Torta Cremada",
            descripcion: "Rica torata cremada",
            precio:  5000
        }
    arrayBotonDetalle1.push(producto5);
    return producto5
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle6.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto6 = {
            imagen: "./img/torta2.jpg",
            nombre: "Postre Chocolatado",
            descripcion: "Rico postre chocolatado",
            precio:  7000
        }
    arrayBotonDetalle1.push(producto6);
    return producto6
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle7.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto7 = {
            imagen: "./img/torta3.jpg",
            nombre: "Pasabocas",
            descripcion: "Ricos pasabocas",
            precio:  2000
        }
    arrayBotonDetalle1.push(producto7);
    return producto7
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle8.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto8 = {
            imagen: "./img/torta.jpg",
            nombre: "Torta Familiar",
            descripcion: "Ricas tortas familiares",
            precio:  50000
        }
    arrayBotonDetalle1.push(producto8);
    return producto8
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});}
const formulario= document.querySelector('#formulario');
const listaNotas= document.querySelector('#listaNotas');
let arreglo=[];
const crearRegistro=(n,p1,p2,p3)=>{

    let registro={
        nombre: n,
        periodo1: p1,
        periodo2: p2,
        periodo3: p3
    };

     arreglo.push(registro);
    return registro;
} 

let r1 = crearRegistro('Camilo',5,5,5);

console.log(arreglo);


const guardarDatos=()=>{
    localStorage.setItem('Notas',JSON.stringify(arreglo));
}
const listarDatos=()=>{
    listaNotas.innerHTML='';
    arreglo=JSON.parse(localStorage.getItem('Notas'));
    arreglo===null? (arreglo=[]):(
        arreglo.forEach( Element=> {
            listaNotas.innerHTML += `<div class="alert alert-primary" role="alert">
            <i class="material-icons float-left mr-2" >
            accessibility
            </i>
              <b>${Element.nombre}</b>
              <b>${Element.periodo1}</b>
              <b>${Element.periodo2}</b>
              <b>${Element.periodo3}</b>
              <span class="float-right">
                  <i class="material-icons">delete</i>
              </span>
        </div>
     </div>`;
        })
    )
   
}

formulario.addEventListener('submit',e=>{
    e.preventDefault();
    let nom =document.querySelector("#nom").value;
    let per1 =document.querySelector("#p1").value;
    let per2 =document.querySelector("#p2").value;
    let per3 =document.querySelector("#p3").value;
 crearRegistro(nom,per1,per2,per3);
 guardarDatos();
 formulario.reset();
})

document.addEventListener('DOMContentLoaded',listarDatos);
listaNotas.addEventListener('click',e=>{
e.preventDefault();
console.log(e.target.innerHTML);
if(e.target.innerHTML=== 'delete'){
    eliminarDatos(texto);
}
})