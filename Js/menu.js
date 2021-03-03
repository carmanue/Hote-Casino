const bxmenu = document.querySelector('.bxmenu');
const menu = document.querySelector('.menu-navegacion');

/*console.log(menu)
console.log(bxmenu)*/


bxmenu.addEventListener('click', ()=>{
    menu.classList.toggle("stread")
})

window.addEventListener('click', e=>{
if (menu.classList.contains('stread')  && e.target != menu && e.target != bxmenu){
                
                menu.classList.toggle("stread")
}
})