var menuIcon = document.querySelector('.menu-icon')
var navList = document.querySelector('.nav_list')

menuIcon.addEventListener('click', ()=>{
    // Mostrar
    if (navList.classList.contains('ativo')){
        navList.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png'
        document.body.style.overflow = "scroll";

    }
    // Esconder
    else{
        navList.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
        document.body.style.overflow = "hidden";
    }
})

// Ativando e Removendo menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Ativando link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    document.body.style.overflow = "scroll";

    // Removendo menu
    navList.classList.remove('ativo')
}

navLink.forEach(n => n.addEventListener('click', linkAction))