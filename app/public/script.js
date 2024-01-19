const updateInterval = setInterval(update, 10);

function update() {
    Array.from(document.getElementsByClassName("star-box")).forEach(starBox => {
        const x = parseInt(starBox.style.left);
        const newX = x + 10;

        starBox.style.left = `${newX}px`;

        if (newX > window.innerWidth)
            starBox.style.left = `${-(Math.round(Math.random()*window.innerWidth))}px`;

    });
    
    // const mouseArea = document.getElementById("mouse-box");

    // if (mouseArea != null && mouseArea != undefined) {
    //     mouseArea.style.left = `${x}px`;
    //     mouseArea.style.top = `${y}px`;
    // }

    
}