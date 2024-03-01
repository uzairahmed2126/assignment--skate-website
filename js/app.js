document.addEventListener('DOMContentLoaded', () => {
    const mainId = document.getElementById('header')
    const nav = getElementAndEvent('.fa-bars', 'click', handleNav, null);
    const navclass = document.querySelector('.fa-bars');
    function handleNav(e) {
        if (e.target) {
            navclass.style.visibility = 'hidden';
        }
        const div1 = createEl('div', 'div1', 'heyy', mainId);
        const divId = document.getElementById('div1');
        div1.style.background = 'green';
        mainId.style.visibility = 'visible';
        mainId.appendChild(div1);
        mainId.append()
        // div1.style.zIndex=-1;
        // document.body.style.zIndex
        // console.log(e);
    }
    function createEl(element, id, txt, append) {
        const el = document.createElement(element);
        el.id = id;
        el.innerText = txt;
        mainId.append(el)
        return el;
    }
    function getElementAndEvent(clas, event, eventFun, text) {
        const navId = document.querySelector(clas);
        navId.addEventListener(event, eventFun);
        navId.innerText = text;
        return text;
    }
})

