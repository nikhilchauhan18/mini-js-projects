function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("appearance");
    emoji.innerText = "💧";
    document.body.appendChild(emoji);
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
    setInterval(() => {
        emoji.remove();
    }, 5000);
}
setInterval(createEmoji, 200);