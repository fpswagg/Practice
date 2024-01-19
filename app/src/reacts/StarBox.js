import "../styles/StarBox.css";

export default function StarBox( {width = Math.round(Math.random()*40)+15, height = 1, x = -(Math.round(Math.random()*window.innerWidth)), y = Math.round(Math.random()*window.innerHeight) } ) {
    return (<div
        className="star-box"
        style={ {
            position: "absolute",
            width: `${width}px`,
            height: `${height}px`,
            left: `${x-width}px`,
            top: `${y-(height/2)}px`
        } }></div>);
}