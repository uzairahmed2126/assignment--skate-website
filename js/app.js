document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navBar = document.querySelector('.fa-bars');
    const close = document.querySelector('.fa-close')
    const ul = document.querySelector('ul');
    const logo = document.querySelector('.logo');
    // const content = document.querySelector('.content')
    // const animation = document.querySelector('.anim');
    // const hero = document.querySelector('.hero');
    const videoTag = document.querySelector('video');
    const slide4 = document.querySelector('.slide4');
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

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 653) {
            videoTag.pause();
        } else if (scrollPosition < 653) {
            videoTag.play();
        }
    });
    const form = makeForm('form', 'id', 'form');
    // form.method='post';
    const txtInput = makeForm('input', 'type', 'text');
    txtInput.required;
    const passInput = makeForm('input', 'type', 'password');
    passInput.required;
    const btnInput = makeForm('button', 'class', 'btn');
    btnInput.type = 'submit';
    btnInput.innerText = 'submit';
    const showPassword = makeForm('i', 'class', 'fa-regular fa-eye');
    const hiddenPassword = makeForm('i', 'class', 'fa-regular fa-eye-slash');
    // showPassword.addEventListener('click',handlePassword);
    slide4.append(form);
    form.append(txtInput, passInput, showPassword, hiddenPassword, btnInput);
    showPassword.title = 'show password';
    showPassword.classList.add('password');
    function makeForm(el, attribute, type) {
        const element = document.createElement(el);
        element.setAttribute(attribute, type);
        return element;
    }

    showPassword.addEventListener('click', function (e) {
        if (e.target) {
            hiddenPassword.classList.remove('password');
            showPassword.classList.add('password');
            passInput.type = 'password';
        } else {
            passInput.type = 'text';
        }
    });
    hiddenPassword.addEventListener('click', function (e) {
        if (e.target) {
            hiddenPassword.classList.add('password');
            showPassword.classList.remove('password');
            passInput.type = 'text';
        } else {
            passInput.type = 'password';
        }
    });
})
