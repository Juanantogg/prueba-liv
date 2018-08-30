'use strict';

if (window.location.pathname === '/notas' || window.location.pathname === '/notas.html') {
  var estilo = document.getElementById('estilo');
  var bienestar = document.getElementById('bienestar');
  var tendencias = document.getElementById('tendencias');
  var contenedorEstilo = document.getElementById('contenedor-estilo');
  var contenedorBienestar = document.getElementById('contenedor-bienestar');
  var contenedorTendencias = document.getElementById('contenedor-tendencias');

  estilo.addEventListener('click', function () {
    contenedorEstilo.classList.remove('blog__seccion--oculta');
    contenedorBienestar.classList.add('blog__seccion--oculta');
    contenedorTendencias.classList.add('blog__seccion--oculta');
  });
  bienestar.addEventListener('click', function () {
    contenedorEstilo.classList.add('blog__seccion--oculta');
    contenedorBienestar.classList.remove('blog__seccion--oculta');
    contenedorTendencias.classList.add('blog__seccion--oculta');
  });
  tendencias.addEventListener('click', function () {
    contenedorEstilo.classList.add('blog__seccion--oculta');
    contenedorBienestar.classList.add('blog__seccion--oculta');
    contenedorTendencias.classList.remove('blog__seccion--oculta');
  });
}

var doc = document.documentElement;
var main = document.getElementsByTagName('main');
var menu = document.getElementById('menu');
var bottonMenu = document.getElementById('botton-menu');
var navegacionPrincipal = document.getElementById('navegacion-principal');
var submenu = document.getElementById('submenu');
var nosotros = document.getElementById('nosotros');
var nosotrosItem = document.getElementById('nosotros-item');
var arriba = document.getElementById('arriba');
var fase1 = document.getElementById('fase1');
var fase2 = document.getElementById('fase2');
var contenedorFlecha1 = document.getElementById('contenedor-flecha1');
var contenedorFlecha2 = document.getElementById('contenedor-flecha2');
var flecha1 = document.getElementById('flecha1');
var flecha2 = document.getElementById('flecha2');
var contenidoFase1 = document.getElementById('contenido-fase1');
var contenidoFase2 = document.getElementById('contenido-fase2');

var expandirMenu = function expandirMenu() {
  bottonMenu.classList.toggle('botton-menu__logo--cerrar');
  navegacionPrincipal.classList.toggle('navegacion-principal--extendida');
  navegacionPrincipal.classList.remove('navegacion-principal--extendida2');
  nosotrosItem.classList.remove('navegacion-principal__nosotros--giro');
  submenu.classList.remove('navegacion-principal__dos--extendida');
};

var expandirSubmenu = function expandirSubmenu() {
  nosotrosItem.classList.toggle('navegacion-principal__nosotros--giro');
  navegacionPrincipal.classList.toggle('navegacion-principal--extendida2');
  submenu.classList.toggle('navegacion-principal__dos--extendida');
};

var cerrarMenu = function cerrarMenu() {
  bottonMenu.classList.remove('botton-menu__logo--cerrar');
  navegacionPrincipal.classList.remove('navegacion-principal--extendida');
  navegacionPrincipal.classList.remove('navegacion-principal--extendida2');
  nosotrosItem.classList.remove('navegacion-principal__nosotros--giro');
  submenu.classList.remove('navegacion-principal__dos--extendida');
};

var subir = function subir(id) {
  if (id === 'fase2' || id === 'flecha2' || id === 'contenedor-flecha2') {
    console.log(id);
    doc.scrollTop = 420;
  } else {
    var scrollStep = -window.scrollY / (500 / 3);
    var scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(500, scrollStep);
      } else clearInterval(scrollInterval);
    }, 1);
  }
};

var bajar = function bajar(scroll) {
  var bajar = setInterval(function () {
    doc.scrollTop += scroll / 40;
    if (doc.scrollTop > scroll || doc.clientHeight < 1000) {
      clearInterval(bajar);
    }
  }, 10);
};

var mostrarBotonArriba = function mostrarBotonArriba() {
  if (document.documentElement.scrollTop > 400 && arriba) {
    arriba.style.right = '1em';
  } else {
    arriba.style.right = '-5em';
  }
};

var mostrarFase = function mostrarFase(e) {
  e.stopPropagation();

  var id = e.target.id;

  if (id === 'fase1' || id === 'flecha1' || id === 'contenedor-flecha1') {
    contenidoFase1.classList.toggle('responsabilidad__contenido--extendido');
    contenidoFase2.classList.remove('responsabilidad__contenido--extendido');
    bajar(420);
  }

  if (id === 'fase2' || id === 'flecha2' || id === 'contenedor-flecha2') {
    contenidoFase2.classList.toggle('responsabilidad__contenido--extendido');
    contenidoFase1.classList.remove('responsabilidad__contenido--extendido');
    if (doc.scrollTop < 600) {
      bajar(600);
    } else {
      subir(id);
    }
  }
};

menu.addEventListener('click', function () {
  return expandirMenu();
});
nosotros.addEventListener('click', function () {
  return expandirSubmenu();
});
window.addEventListener('scroll', function () {
  return mostrarBotonArriba();
});
if (fase1) fase1.addEventListener('click', function (e) {
  return mostrarFase(e);
});
if (fase2) fase2.addEventListener('click', function (e) {
  return mostrarFase(e);
});
if (contenedorFlecha1) contenedorFlecha1.addEventListener('click', function (e) {
  return mostrarFase(e);
});
if (contenedorFlecha2) contenedorFlecha2.addEventListener('click', function (e) {
  return mostrarFase(e);
});
if (flecha1) flecha1.addEventListener('click', function (e) {
  return mostrarFase(e);
});
if (flecha2) flecha2.addEventListener('click', function (e) {
  return mostrarFase(e);
});
if (arriba) arriba.addEventListener('click', function (e) {
  return subir(e);
});
main[0].addEventListener('click', function () {
  return cerrarMenu();
});

if (window.location.pathname.includes('productos') || window.location.pathname === '/prueba-liv/' || window.location.pathname === '/') {
  // const bottonSlider = document.getElementById('botton-slider')
  var productos = Array.from(document.getElementsByClassName('slider-productos__imagen'));
  var anterior = document.getElementById('boton-anterior');
  var siguiente = document.getElementById('boton-siguiente');
  var sliderProductos = void 0;

  var recorrerClases = function recorrerClases() {
    productos.forEach(function (item, index) {
      item.style.zIndex = '' + index;
      if (index === 0) {
        item.classList.add('slider-productos__imagen--transparente');
      } else {
        item.classList.remove('slider-productos__imagen--transparente');
      }
    });
  };

  var agragarSlider = function agragarSlider() {
    sliderProductos = setInterval(function () {
      productos[productos.length - 1].classList.add('slider-productos__imagen--transparente');
      setTimeout(function () {
        var ultimo = productos.pop();
        productos.unshift(ultimo);
        productos[0].classList.remove('slider-productos__imagen--transparente');
        recorrerClases();
      }, 400);
    }, 5000);
  };

  var productoAnterior = function productoAnterior() {
    clearInterval(sliderProductos);
    var primero = productos.shift();
    productos.push(primero);
    recorrerClases();
    agragarSlider();
  };

  var productoSiguiente = function productoSiguiente() {
    clearInterval(sliderProductos);
    var ultimo = productos.pop();
    ultimo.classList.add('slider-productos__imagen--transparente');
    productos.unshift(ultimo);
    setTimeout(function () {
      recorrerClases();
    }, 400);
    agragarSlider();
  };

  recorrerClases();
  agragarSlider();

  if (anterior) anterior.addEventListener('click', function () {
    return productoAnterior();
  });
  if (siguiente) siguiente.addEventListener('click', function () {
    return productoSiguiente();
  });
}