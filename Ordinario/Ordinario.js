window.onload = function () {

let baseDeDatos = [
    {
        id: 1,
        nombre: 'Papa',
        precio: 28.9,
        imagen: 'https://lh3.googleusercontent.com/proxy/V1SobIUPE7B-ils3KHs41XnWsyjv2DTnfJKPe7HM_oTEUPMAB9sqVH8iiWm-un8vCMSInWik-XL7k4IVIiAxnc1IC8AcQpRRTWNjxDlwY58Rfxj0AjdWdlrHo4Jait3Xew'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 18.9,
        imagen: 'https://cdn.shopify.com/s/files/1/0080/1076/0255/products/cebolla_blanca_2.jpg?v=1554353178'
    },
    {
        id: 3,
        nombre: 'Calabacita',
        precio: 29.9,
        imagen: 'https://img-global.cpcdn.com/recipes/recipes_18955_v1393323237_foto_foto_00033319/751x532cq70/calabacitas-con-crema-foto-principal.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 42.2,
        imagen: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/como-desinfectar-fresas.jpg'
    }

]
let $items = document.querySelector('#items');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');

function renderItems() {
    for (let info of baseDeDatos) {
        let miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');

        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info['nombre'];
        
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        
        let miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info['precio'] + '$';
        
        let miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info['id']);
        miNodoBoton.addEventListener('click', anyadirCarrito);
        
        let miOtroBoton = document.createElement('button');
        miOtroBoton.classList.add('btn', 'btn-primary');
        miOtroBoton.setAttribute('Agregar', baseDeDatos);
        miOtroBoton.addEventListener('Click', anyadiProducto);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        $items.appendChild(miNodo);
    }
}
function anyadiProducto(){
    baseDeDatos.push({id: `${id}`, nombre: `${nombre}`, precio: `${precio}`, imagen: `${url}`});
}

function anyadirCarrito() {
    
    carrito.push(this.getAttribute('marcador'))
    
    calcularTotal();
    
    renderizarCarrito();

}

function renderizarCarrito() {
    
    $carrito.textContent = '';
    let carritoSinDuplicados = [...new Set(carrito)];
    
    carritoSinDuplicados.forEach(function (item, indice) {
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}$`;
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.setAttribute('item', item);
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        $carrito.appendChild(miNodo);
    })
}

function borrarItemCarrito() {
    let id = this.getAttribute('item');
    carrito = carrito.filter(function (carritoId) {
        return carritoId !== id;
    });
    renderizarCarrito();
    calcularTotal();
}

function calcularTotal() {
    total = 0;
    for (let item of carrito) {
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    $total.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    calcularTotal();
}
$botonVaciar.addEventListener('click', vaciarCarrito);
renderItems();
}