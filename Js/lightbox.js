const imagenes = document.querySelectorAll('.img-galeria')
const imagenlight =document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const bxmenu1 = document.querySelector('.bxmenu');


imagenes.forEach(imagen =>{
imagen.addEventListener('click', ()=>{
    aparecerimagen(imagen.getAttribute('src'))
    
})

})

contenedorlight.addEventListener ('click', (e)=>{
     if (e.target !== imagenlight){
        contenedorlight.classList.toggle('show')
        imagenlight.classList.toggle('showimage')
        bxmenu1.style.opacity = '1'
     }
})

const aparecerimagen = (imagen)=>{
imagenlight.src = imagen;
contenedorlight.classList.toggle('show')
imagenlight.classList.toggle('showimage')
bxmenu1.style.opacity = '0'
}