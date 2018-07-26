'use strict';var doc=document.documentElement;var menu=document.getElementById('menu');var bottonMenu=document.getElementById('botton-menu');var navegacionPrincipal=document.getElementById('navegacion-principal');var submenu=document.getElementById('submenu');var nosotros=document.getElementById('nosotros');var nosotrosItem=document.getElementById('nosotros-item');var arriba=document.getElementById('arriba');var acordeon=document.getElementsByClassName('responsabilidad__acordeon');var responsabilidadContenido=document.getElementsByClassName('responsabilidad__contenido');var flechas=document.getElementsByClassName('responsabilidad__flecha');var expandirMenu=function expandirMenu(){bottonMenu.classList.toggle('botton-menu__logo--cerrar');navegacionPrincipal.classList.toggle('navegacion-principal--extendida');navegacionPrincipal.classList.remove('navegacion-principal--extendida2');nosotrosItem.classList.remove('navegacion-principal__nosotros--giro');submenu.classList.remove('navegacion-principal__dos--extendida')};var expandirSubmenu=function expandirSubmenu(){nosotrosItem.classList.toggle('navegacion-principal__nosotros--giro');navegacionPrincipal.classList.toggle('navegacion-principal--extendida2');submenu.classList.toggle('navegacion-principal__dos--extendida')};var subir=function subir(){var scrollStep=-window.scrollY/(500/3);var scrollInterval=setInterval(function(){if(window.scrollY!==0){window.scrollBy(500,scrollStep)}else clearInterval(scrollInterval)},1)};var bajar=function bajar(scroll){var bajar=setInterval(function(){doc.scrollTop+=scroll/40;if(doc.scrollTop>scroll){clearInterval(bajar)}},10)};var mostrarBotonArriba=function mostrarBotonArriba(){if(document.documentElement.scrollTop>400&&arriba){arriba.style.right='1em'}else{arriba.style.right='-5em'}};var mostrarFase=function mostrarFase(index){var span=Array.from(flechas);var contenido=Array.from(responsabilidadContenido);contenido.forEach(function(item,i){if(i===index){item.classList.toggle('responsabilidad__contenido--extendido');span[i].classList.toggle('responsabilidad__flecha--giro')}else{span[i].classList.remove('responsabilidad__flecha--giro');item.classList.remove('responsabilidad__contenido--extendido')}});if(!Array.from(contenido[0].classList).includes('responsabilidad__contenido--extendido')&&!Array.from(contenido[1].classList).includes('responsabilidad__contenido--extendido')){subir()}if(window.matchMedia('(max-width: 300px)').matches&&Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')){bajar(490)}else if(window.matchMedia('(min-width: 305px)').matches&&window.matchMedia('(max-width: 574px)').matches&&Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')){bajar(430)}else if(window.matchMedia('(min-width: 575px)').matches&&window.matchMedia('(max-width: 719px)').matches&&Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')){bajar(380)}else if(window.matchMedia('(min-width: 720px)').matches&&window.matchMedia('(max-width: 888px)').matches&&Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')){bajar(550)}else if(window.matchMedia('(min-width: 889px)').matches&&Array.from(contenido[index].classList).includes('responsabilidad__contenido--extendido')){bajar(470)}};menu.addEventListener('click',function(){return expandirMenu()});nosotros.addEventListener('click',function(){return expandirSubmenu()});if(acordeon)Array.from(acordeon).forEach(function(fase,index){return fase.addEventListener('click',function(){return mostrarFase(index)})});window.addEventListener('scroll',function(){return mostrarBotonArriba()});if(arriba)arriba.addEventListener('click',function(){return subir()});if(window.location.pathname.includes('productos')||window.location.pathname==='/prueba-liv/'||window.location.pathname==='/'){// const bottonSlider = document.getElementById('botton-slider')
var productos=Array.from(document.getElementsByClassName('slider-productos__imagen'));var anterior=document.getElementById('boton-anterior');var siguiente=document.getElementById('boton-siguiente');var sliderProductos=void 0;var recorrerClases=function recorrerClases(){productos.forEach(function(item,index){item.style.zIndex=''+index;if(index===0){item.classList.add('slider-productos__imagen--transparente')}else{item.classList.remove('slider-productos__imagen--transparente')}})};var agragarSlider=function agragarSlider(){sliderProductos=setInterval(function(){productos[productos.length-1].classList.add('slider-productos__imagen--transparente');setTimeout(function(){var ultimo=productos.pop();productos.unshift(ultimo);productos[0].classList.remove('slider-productos__imagen--transparente');recorrerClases()},400)},5000)};var productoAnterior=function productoAnterior(){clearInterval(sliderProductos);var primero=productos.shift();productos.push(primero);recorrerClases();agragarSlider()};var productoSiguiente=function productoSiguiente(){clearInterval(sliderProductos);var ultimo=productos.pop();ultimo.classList.add('slider-productos__imagen--transparente');productos.unshift(ultimo);setTimeout(function(){recorrerClases()},400);agragarSlider()};recorrerClases();agragarSlider();if(anterior)anterior.addEventListener('click',function(){return productoAnterior()});if(siguiente)siguiente.addEventListener('click',function(){return productoSiguiente()})}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzbGlkZXItcHJvZHVjdG9zLmpzIl0sIm5hbWVzIjpbImRvYyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibWVudSIsImdldEVsZW1lbnRCeUlkIiwiYm90dG9uTWVudSIsIm5hdmVnYWNpb25QcmluY2lwYWwiLCJzdWJtZW51Iiwibm9zb3Ryb3MiLCJub3NvdHJvc0l0ZW0iLCJhcnJpYmEiLCJhY29yZGVvbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZXNwb25zYWJpbGlkYWRDb250ZW5pZG8iLCJmbGVjaGFzIiwiZXhwYW5kaXJNZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiZXhwYW5kaXJTdWJtZW51Iiwic3ViaXIiLCJzY3JvbGxTdGVwIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzY3JvbGxCeSIsImNsZWFySW50ZXJ2YWwiLCJiYWphciIsInNjcm9sbCIsInNjcm9sbFRvcCIsIm1vc3RyYXJCb3RvbkFycmliYSIsInN0eWxlIiwicmlnaHQiLCJtb3N0cmFyRmFzZSIsImluZGV4Iiwic3BhbiIsIkFycmF5IiwiZnJvbSIsImNvbnRlbmlkbyIsImZvckVhY2giLCJpdGVtIiwiaSIsImluY2x1ZGVzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZmFzZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwcm9kdWN0b3MiLCJhbnRlcmlvciIsInNpZ3VpZW50ZSIsInNsaWRlclByb2R1Y3RvcyIsInJlY29ycmVyQ2xhc2VzIiwiekluZGV4IiwiYWRkIiwiYWdyYWdhclNsaWRlciIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJ1bHRpbW8iLCJwb3AiLCJ1bnNoaWZ0IiwicHJvZHVjdG9BbnRlcmlvciIsInByaW1lcm8iLCJzaGlmdCIsInB1c2giLCJwcm9kdWN0b1NpZ3VpZW50ZSJdLCJtYXBwaW5ncyI6ImFBQUEsR0FBQUEs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QUFBd0MsR0FBQSxDQUFBLHdDQUFBLEVBQ0FOLFVBQUFZLE9BQUEsQ0FBQUYsTUFBQSxFQUNBRCxXQUFBLFVBQUEsQ0FDQUwsZ0JBQ0EsQ0FGQSxDQUVBLEdBRkEsRUFHQUcsZUFDQSxDQVRBLENBV0FILGlCQUNBRyxnQkFFQSxHQUFBTixRQUFBLENBQUFBLFNBQUFMLGdCQUFBLENBQUEsT0FBQSxDQUFBLGlCQUFBaUIsbUJBQUEsQ0FBQSxFQUNBLEdBQUFYLFNBQUEsQ0FBQUEsVUFBQU4sZ0JBQUEsQ0FBQSxPQUFBLENBQUEsaUJBQUFxQixvQkFBQSxDQUFBLENBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbmNvbnN0IGJvdHRvbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dG9uLW1lbnUnKVxuY29uc3QgbmF2ZWdhY2lvblByaW5jaXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZlZ2FjaW9uLXByaW5jaXBhbCcpXG5jb25zdCBzdWJtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1lbnUnKVxuY29uc3Qgbm9zb3Ryb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9zb3Ryb3MnKVxuY29uc3Qgbm9zb3Ryb3NJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vc290cm9zLWl0ZW0nKVxuY29uc3QgYXJyaWJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FycmliYScpXG5jb25zdCBhY29yZGVvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3BvbnNhYmlsaWRhZF9fYWNvcmRlb24nKVxuY29uc3QgcmVzcG9uc2FiaWxpZGFkQ29udGVuaWRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzcG9uc2FiaWxpZGFkX19jb250ZW5pZG8nKVxuY29uc3QgZmxlY2hhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3BvbnNhYmlsaWRhZF9fZmxlY2hhJylcblxuY29uc3QgZXhwYW5kaXJNZW51ID0gKCkgPT4ge1xuICBib3R0b25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ2JvdHRvbi1tZW51X19sb2dvLS1jZXJyYXInKVxuICBuYXZlZ2FjaW9uUHJpbmNpcGFsLmNsYXNzTGlzdC50b2dnbGUoJ25hdmVnYWNpb24tcHJpbmNpcGFsLS1leHRlbmRpZGEnKVxuICBuYXZlZ2FjaW9uUHJpbmNpcGFsLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmVnYWNpb24tcHJpbmNpcGFsLS1leHRlbmRpZGEyJylcbiAgbm9zb3Ryb3NJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmVnYWNpb24tcHJpbmNpcGFsX19ub3NvdHJvcy0tZ2lybycpXG4gIHN1Ym1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbmF2ZWdhY2lvbi1wcmluY2lwYWxfX2Rvcy0tZXh0ZW5kaWRhJylcbn1cblxuY29uc3QgZXhwYW5kaXJTdWJtZW51ID0gKCkgPT4ge1xuICBub3NvdHJvc0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2ZWdhY2lvbi1wcmluY2lwYWxfX25vc290cm9zLS1naXJvJylcbiAgbmF2ZWdhY2lvblByaW5jaXBhbC5jbGFzc0xpc3QudG9nZ2xlKCduYXZlZ2FjaW9uLXByaW5jaXBhbC0tZXh0ZW5kaWRhMicpXG4gIHN1Ym1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2ZWdhY2lvbi1wcmluY2lwYWxfX2Rvcy0tZXh0ZW5kaWRhJylcbn1cblxuY29uc3Qgc3ViaXIgPSAoKSA9PiB7XG4gIGxldCBzY3JvbGxTdGVwID0gLXdpbmRvdy5zY3JvbGxZIC8gKDUwMCAvIDMpXG4gIGxldCBzY3JvbGxJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgIT09IDApIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSg1MDAsIHNjcm9sbFN0ZXApXG4gICAgfSBlbHNlIGNsZWFySW50ZXJ2YWwoc2Nyb2xsSW50ZXJ2YWwpXG4gIH0sIDEpXG59XG5cbmNvbnN0IGJhamFyID0gKHNjcm9sbCkgPT4ge1xuICBsZXQgYmFqYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZG9jLnNjcm9sbFRvcCArPSBzY3JvbGwgLyA0MFxuICAgIGlmIChkb2Muc2Nyb2xsVG9wID4gc2Nyb2xsKSB7XG4gICAgICBjbGVhckludGVydmFsKGJhamFyKVxuICAgIH1cbiAgfSwgMTApXG59XG5cbmNvbnN0IG1vc3RyYXJCb3RvbkFycmliYSA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA0MDAgJiYgYXJyaWJhKSB7XG4gICAgYXJyaWJhLnN0eWxlLnJpZ2h0ID0gJzFlbSdcbiAgfSBlbHNlIHtcbiAgICBhcnJpYmEuc3R5bGUucmlnaHQgPSAnLTVlbSdcbiAgfVxufVxuXG5jb25zdCBtb3N0cmFyRmFzZSA9IChpbmRleCkgPT4ge1xuICBsZXQgc3BhbiA9IEFycmF5LmZyb20oZmxlY2hhcylcbiAgbGV0IGNvbnRlbmlkbyA9IEFycmF5LmZyb20ocmVzcG9uc2FiaWxpZGFkQ29udGVuaWRvKVxuXG4gIGNvbnRlbmlkby5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3Jlc3BvbnNhYmlsaWRhZF9fY29udGVuaWRvLS1leHRlbmRpZG8nKVxuICAgICAgc3BhbltpXS5jbGFzc0xpc3QudG9nZ2xlKCdyZXNwb25zYWJpbGlkYWRfX2ZsZWNoYS0tZ2lybycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5baV0uY2xhc3NMaXN0LnJlbW92ZSgncmVzcG9uc2FiaWxpZGFkX19mbGVjaGEtLWdpcm8nKVxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJylcbiAgICB9XG4gIH0pXG5cbiAgaWYgKCFBcnJheS5mcm9tKGNvbnRlbmlkb1swXS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJykgJiZcbiAgICAgICFBcnJheS5mcm9tKGNvbnRlbmlkb1sxXS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJykpIHtcbiAgICBzdWJpcigpXG4gIH1cblxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMwMHB4KScpLm1hdGNoZXMgJiZcbiAgICAgIEFycmF5LmZyb20oY29udGVuaWRvW2luZGV4XS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJykpIHtcbiAgICBiYWphcig0OTApXG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDMwNXB4KScpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNTc0cHgpJykubWF0Y2hlcyAmJlxuICAgICAgICAgICAgIEFycmF5LmZyb20oY29udGVuaWRvW2luZGV4XS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJykpIHtcbiAgICBiYWphcig0MzApXG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDU3NXB4KScpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzE5cHgpJykubWF0Y2hlcyAmJlxuICAgICAgICAgICAgIEFycmF5LmZyb20oY29udGVuaWRvW2luZGV4XS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJykpIHtcbiAgICBiYWphcigzODApXG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDcyMHB4KScpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogODg4cHgpJykubWF0Y2hlcyAmJlxuICAgICAgICAgICAgIEFycmF5LmZyb20oY29udGVuaWRvW2luZGV4XS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdyZXNwb25zYWJpbGlkYWRfX2NvbnRlbmlkby0tZXh0ZW5kaWRvJykpIHtcbiAgICBiYWphcig1NTApXG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDg4OXB4KScpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICBBcnJheS5mcm9tKGNvbnRlbmlkb1tpbmRleF0uY2xhc3NMaXN0KS5pbmNsdWRlcygncmVzcG9uc2FiaWxpZGFkX19jb250ZW5pZG8tLWV4dGVuZGlkbycpKSB7XG4gICAgYmFqYXIoNDcwKVxuICB9XG59XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBleHBhbmRpck1lbnUoKSlcbm5vc290cm9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXhwYW5kaXJTdWJtZW51KCkpXG5pZiAoYWNvcmRlb24pIEFycmF5LmZyb20oYWNvcmRlb24pLmZvckVhY2goKGZhc2UsIGluZGV4KSA9PiBmYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9zdHJhckZhc2UoaW5kZXgpKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBtb3N0cmFyQm90b25BcnJpYmEoKSlcbmlmIChhcnJpYmEpIGFycmliYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1YmlyKCkpXG4iLCJpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdwcm9kdWN0b3MnKSB8fFxuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9wcnVlYmEtbGl2LycgfHxcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJykge1xuICAvLyBjb25zdCBib3R0b25TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dG9uLXNsaWRlcicpXG4gIGNvbnN0IHByb2R1Y3RvcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyLXByb2R1Y3Rvc19faW1hZ2VuJykpXG4gIGNvbnN0IGFudGVyaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdG9uLWFudGVyaW9yJylcbiAgY29uc3Qgc2lndWllbnRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdG9uLXNpZ3VpZW50ZScpXG4gIGxldCBzbGlkZXJQcm9kdWN0b3NcblxuICBjb25zdCByZWNvcnJlckNsYXNlcyA9ICgpID0+IHtcbiAgICBwcm9kdWN0b3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gYCR7aW5kZXh9YFxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXByb2R1Y3Rvc19faW1hZ2VuLS10cmFuc3BhcmVudGUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXItcHJvZHVjdG9zX19pbWFnZW4tLXRyYW5zcGFyZW50ZScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFncmFnYXJTbGlkZXIgPSAoKSA9PiB7XG4gICAgc2xpZGVyUHJvZHVjdG9zID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgcHJvZHVjdG9zW3Byb2R1Y3Rvcy5sZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcHJvZHVjdG9zX19pbWFnZW4tLXRyYW5zcGFyZW50ZScpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHVsdGltbyA9IHByb2R1Y3Rvcy5wb3AoKVxuICAgICAgICBwcm9kdWN0b3MudW5zaGlmdCh1bHRpbW8pXG4gICAgICAgIHByb2R1Y3Rvc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXItcHJvZHVjdG9zX19pbWFnZW4tLXRyYW5zcGFyZW50ZScpXG4gICAgICAgIHJlY29ycmVyQ2xhc2VzKClcbiAgICAgIH0sIDQwMClcbiAgICB9LCA1MDAwKVxuICB9XG5cbiAgY29uc3QgcHJvZHVjdG9BbnRlcmlvciA9ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKHNsaWRlclByb2R1Y3RvcylcbiAgICBsZXQgcHJpbWVybyA9IHByb2R1Y3Rvcy5zaGlmdCgpXG4gICAgcHJvZHVjdG9zLnB1c2gocHJpbWVybylcbiAgICByZWNvcnJlckNsYXNlcygpXG4gICAgYWdyYWdhclNsaWRlcigpXG4gIH1cblxuICBjb25zdCBwcm9kdWN0b1NpZ3VpZW50ZSA9ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKHNsaWRlclByb2R1Y3RvcylcbiAgICBsZXQgdWx0aW1vID0gcHJvZHVjdG9zLnBvcCgpXG4gICAgdWx0aW1vLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1wcm9kdWN0b3NfX2ltYWdlbi0tdHJhbnNwYXJlbnRlJylcbiAgICBwcm9kdWN0b3MudW5zaGlmdCh1bHRpbW8pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWNvcnJlckNsYXNlcygpXG4gICAgfSwgNDAwKVxuICAgIGFncmFnYXJTbGlkZXIoKVxuICB9XG5cbiAgcmVjb3JyZXJDbGFzZXMoKVxuICBhZ3JhZ2FyU2xpZGVyKClcblxuICBpZiAoYW50ZXJpb3IpIGFudGVyaW9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHJvZHVjdG9BbnRlcmlvcigpKVxuICBpZiAoc2lndWllbnRlKSBzaWd1aWVudGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcm9kdWN0b1NpZ3VpZW50ZSgpKVxufVxuIl19
