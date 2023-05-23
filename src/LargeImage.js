//LargeImage Component

function LargeImage(props) {
    return (
        <figure id="largeImage">
            <img
                src={props.src}
                alt={props.alt}
            />
            <figcaption className="caption">
                {props.caption}
            </figcaption>
        </figure>
    );
};

export default LargeImage;