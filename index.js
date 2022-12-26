const barBody = document.querySelector('.icons i:nth-child(2)');
function body__open(){
    const bodyBlock = document.getElementById('body');
    const navBar = document.querySelector('nav');

    bodyBlock.classList.toggle('body-side');
    navBar.classList.toggle('nav-activo');

}

barBody.addEventListener('click', body__open);

// tabs
    //almacenar la etiqueta a y section en una variable
const items = document.querySelectorAll('a');
const blockTabs = document.querySelectorAll('.tabs-section');
    //recorre cada etiqueta a
    items.forEach((tabs , index) =>{
        tabs.addEventListener('click', ()=>{
            //quitar clase activo
            blockTabs.forEach((block) =>{
               block.classList.remove('activo');
            })
            items.forEach((tabsOption) =>{
                tabsOption.classList.remove('activo');
            })
            //agregar clase activo
            blockTabs[index].classList.add('activo');
            items[index].classList.add('activo');

        })
    })
    

    