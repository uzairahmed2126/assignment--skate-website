document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navBar = document.querySelector('.fa-bars');
    const close = document.querySelector('.fa-close')
    const ul = document.querySelector('ul');
    const logo = document.querySelector('.logo');
    const content = document.querySelector('.content')
    const animation = document.querySelector('.anim');
    const hero = document.querySelector('.hero');
    const videoTag = document.querySelector('video');
    const slide3 = document.querySelector('.slide3');
    navBar.addEventListener('click', handleClick);
    close.addEventListener('click', handleCloseClick);
    function handleClick(element) {
        if (element) {
            ul.classList.add('buffer');
            nav.classList.add('navEffect');
            logo.style.visibility = 'hidden';
            close.style.visibility = 'visible';
            navBar.style.visibility = 'hidden';
        }
    };
    function handleCloseClick(element) {
        if (element) {
            ul.classList.remove('buffer');
            nav.classList.remove('navEffect');
            logo.style.visibility = 'visible';
            close.style.visibility = 'hidden';
            navBar.style.visibility = 'visible';
        }
    }
    
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        if(scrollPosition>653) {
            videoTag.pause();
        }else if(scrollPosition<653){
            videoTag.play();
        }
    });
    const div = makeForm('div','id','form');
    const txtInput = makeForm('input','type','text');
    const passInput = makeForm('input','type','password');
    const btnInput = makeForm('button','class','btn');
    btnInput.innerText = 'submit';
    const showPassword = makeForm('i','class','fa-regular fa-eye');
    // showPassword.addEventListener('click',handlePassword);
    slide3.append(div)
    div.append(txtInput,passInput,showPassword,btnInput)
    function makeForm(el,attribute,type) {
        const element = document.createElement(el);
        element.setAttribute(attribute,type);
        return element;
    }
    // function handlePassword() {
    //     console.log(passInput.innerHTML)
    // }
    showPassword.addEventListener('change', function(e) {
        if (e.target) {
            passInput.type = 'text';
        } else {
            passInput.type = 'password';
        }
    });
})
