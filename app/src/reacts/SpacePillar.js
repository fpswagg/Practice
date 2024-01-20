import "../styles/SpacePillar.css";

export default function SpacePillar( { location, size = 100 }) {
    const style = {
        position: "absolute",
        left: "0px",
        top: `${(window.innerHeight/2)-(size/2)}px`,
        width: `${window.innerWidth}px`,
        height: `${size}px`
    };

    return (<div id="space-pillar" style={style}></div>);
}