let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     text.style.marginTop = value * 2.5 + 'px';
//     leaf.style.top = value * -1.5 + 'px';
//     leaf.style.left = value * 1.5 + 'px';
//     hill5.style.left = value * 1.5 + 'px';
//     hill4.style.left = value * -1.5 + 'px';
//     hill1.style.top = value * 1 + 'px';
// })

let moveable_hill2 = document.getElementById("moveable_hill2")
let moveable_hill1 = document.getElementById("moveable_hill1")
let tree2 = document.getElementById("tree2")
let tree1 = document.getElementById("tree1")
let moon = document.getElementById("moon")

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1 + 'px';
    moveable_hill2.style.left = value * -2 + 'px';
    moveable_hill1.style.left = value * 2 + 'px';
    tree2.style.top = value * 1.5 + 'px';
    tree1.style.top = value * 2 + 'px';
    moon.style.left = value * 2 + 'px';
})