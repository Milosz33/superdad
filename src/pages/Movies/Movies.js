import React from "react";
import "./Movies.scss";

const Movies = () => {
    return(
    <ul className="movies">
       <li key={"snowboard-with-son"}><iframe width="560" height="315" src="https://www.youtube.com/embed/RpRI1iO-vLI" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe></li>

       <li key={"pumptrack"}><iframe width="560" height="315" src="https://www.youtube.com/embed/tVGT5A968PU" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe></li>

       <li key={"pumptrack2"} ><iframe width="560" height="315" src="https://www.youtube.com/embed/QK-oKim64O8" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe></li>

        <li key={"triple-whip"}><iframe width="560" height="315" src="https://www.youtube.com/embed/EBextrtjAf0" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe></li>

        <li key={"kaunertal"}><iframe width="560" height="315" src="https://www.youtube.com/embed/pysgyPUhayw"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe></li>

        <li key={"windsurfing"} ><iframe width="560" height="315" src="https://www.youtube.com/embed/NV69_-VEoCA"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe></li>
    </ul>
    )
}

export default Movies;