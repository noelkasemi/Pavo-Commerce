import {useState} from "../Page/Partials/Imports";

export default function ImageMagnifier({
    src, width, height,
    magnifierHeight = 100, magnifierWidth = 100, zoomLevel = 2,
}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    return (
        <section style={{position: "relative", height: height, width: width}}>
            <img
                src={src}
                style={{ height: height, width: width }}
                onMouseEnter={(e) => {
                    // update image size and turn-on magnifier
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width * 1.5, height * 1.5]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.pageX - left - window.scrollX;
                    const y = e.pageY - top - window.scrollY;
                    setXY([x, y]);
                }}
                onMouseLeave={() => {
                    // close magnifier
                    setShowMagnifier(false);
                }}
                alt={"img"}
            />

            {/* Zoomed in image */}
            <section style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent magnifier blocks the mousemove event of img
                    pointerEvents: "none",

                    // set size of magnifier
                    height: `${magnifierHeight * 5}px`,
                    width: `${magnifierWidth * 5}px`,

                    // zoomed image position
                    top: `${magnifierHeight - (width / 3)}px`,
                    left: `${magnifierWidth + (width / 1.3)}px`,
                    opacity: "1",
                    border: "2px solid #e65228",
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

                    //calculate position of zoomed image
                    backgroundPositionX: `${-x * zoomLevel + 30}px`,
                    backgroundPositionY: `${-y * zoomLevel + 30}px`
                }}
            ></section>

            {/* Image hover square */}
            <section
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent maginier blocks the mousemove event of img
                    pointerEvents: "none",

                    // set size of magnifier
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,

                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    opacity: "0.5",
                    border: "1px solid lightgray",
                    backgroundColor: "white",

                    // backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

                    //calculete position of zoomed image.
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            ></section>
        </section>
    );
}