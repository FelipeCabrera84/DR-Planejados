window.addEventListener('scroll', function(){
    console.log('Evento de rolagem ativada')
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');
let degrees = 0;

prev.addEventListener('click', function(){
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})

next.addEventListener('click', function(){
    degrees -= 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})

let video = document.querySelector('video');


window.addEventListener('scroll', function(){
    console.log('Evento de rolagem ativada')
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})

