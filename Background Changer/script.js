const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randomclr();

})

function randomclr() {
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
}