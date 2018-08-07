'use strict';

if (window.location.pathname.includes('blog') || window.location.pathname === '/notas' || window.location.pathname === '/notas.html') {
  var blogMenu = Array.from(document.getElementsByClassName('blog__item'));
  var blogSeccion = Array.from(document.getElementsByClassName('blog__seccion'));

  blogMenu.forEach(function (item, indiceMenu) {
    item.addEventListener('click', function () {
      blogSeccion.forEach(function (seccion, indiceSeccion) {
        if (indiceMenu === indiceSeccion) {
          blogMenu[indiceSeccion].classList.add('blog__item--activo');
          seccion.classList.remove('blog__seccion--oculta');
        } else {
          blogMenu[indiceSeccion].classList.remove('blog__item--activo');
          seccion.classList.add('blog__seccion--oculta');
        }
      });
    });
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
var acordeon = document.getElementsByClassName('responsabilidad__acordeon');
var responsabilidadContenido = document.getElementsByClassName('responsabilidad__contenido');
var flechas = document.getElementsByClassName('responsabilidad__flecha');

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

var subir = function subir() {
  var scrollStep = -window.scrollY / (500 / 3);
  var scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(500, scrollStep);
    } else clearInterval(scrollInterval);
  }, 1);
};

var bajar = function bajar(scroll) {
  var bajar = setInterval(function () {
    doc.scrollTop += scroll / 40;
    if (doc.scrollTop > scroll) {
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

var mostrarFase = function mostrarFase(index) {
  var span = Array.from(flechas);
  var contenido = Array.from(responsabilidadContenido);

  contenido.forEach(function (item, i) {
    if (i === index) {
      item.classList.toggle('responsabilidad__contenido--extendido');
      span[i].classList.toggle('responsabilidad__flecha--giro');
    } else {
      span[i].classList.remove('responsabilidad__flecha--giro');
      item.classList.remove('responsabilidad__contenido--extendido');
    }
  });

  if (!Array.from(contenido[0].classList).includes('responsabilidad__contenido--extendido') && !Array.from(contenido[1].classList).includes('responsabilidad__contenido--extendido')) {
    subir();
  }

  if (window.matchMedia('(max-width: 300px)').matches && Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')) {
    bajar(490);
  } else if (window.matchMedia('(min-width: 305px)').matches && window.matchMedia('(max-width: 574px)').matches && Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')) {
    bajar(430);
  } else if (window.matchMedia('(min-width: 575px)').matches && window.matchMedia('(max-width: 719px)').matches && Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')) {
    bajar(380);
  } else if (window.matchMedia('(min-width: 720px)').matches && window.matchMedia('(max-width: 888px)').matches && Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')) {
    bajar(550);
  } else if (window.matchMedia('(min-width: 889px)').matches && Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')) {
    bajar(470);
  }
};

menu.addEventListener('click', function () {
  return expandirMenu();
});
nosotros.addEventListener('click', function () {
  return expandirSubmenu();
});
if (acordeon) Array.from(acordeon).forEach(function (fase, index) {
  return fase.addEventListener('click', function () {
    return mostrarFase(index);
  });
});
window.addEventListener('scroll', function () {
  return mostrarBotonArriba();
});
if (arriba) arriba.addEventListener('click', function () {
  return subir();
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