const updateInterval = setInterval(update, 10);

function update() {
    Array.from(document.getElementsByClassName("star-box")).forEach(starBox => {
        const x = parseInt(starBox.style.left);
        const newX = x + 10;

        starBox.style.left = `${newX}px`;

        if (newX > window.innerWidth)
            starBox.style.left = `${-(Math.round(Math.random()*window.innerWidth))}px`;

    });
}