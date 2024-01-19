import "../styles/MouseArea.css"

export default function MouseArea() {
    return (<div id="mouse-box" onClick={event => {
        if (event.button == 2)
            event.target.remove();

        else {
            event.target.classList.remove("growing-mouse-box");
            setTimeout(() => event.target.classList.add("growing-mouse-box"), 100);
        }
    }}></div>)
}