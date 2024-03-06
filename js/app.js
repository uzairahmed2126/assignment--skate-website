document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.fa-bars');
    const close = document.querySelector('.fa-close')
    const ul = document.querySelector('ul');
    const logo = document.querySelector('.logo');
    const content = document.querySelector('.content')
    const animation = document.querySelector('.anim');
    const hero = document.querySelector('.hero');
    navBar.addEventListener('click', handleClick);
    close.addEventListener('click', handleCloseClick);
    document.addEventListener('scroll', handleScroll);
    function handleClick(element) {
        if (element) {
            ul.classList.add('buffer');
            logo.style.visibility = 'hidden';
            close.style.visibility = 'visible';
            navBar.style.visibility = 'hidden';
        }
    };
    function handleCloseClick(element) {
        if (element) {
            ul.classList.remove('buffer');
            logo.style.visibility = 'visible';
            close.style.visibility = 'hidden';
            navBar.style.visibility = 'visible';
        }
    }
    function handleScroll(element) {
        // document.classList.add('anim');
    }
})
