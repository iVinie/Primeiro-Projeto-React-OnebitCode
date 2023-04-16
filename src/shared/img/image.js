import React, {Fragment} from "react";
import '../../css/styleImg.css'

const ImgPlanet = (props) => {
    return(
        <Fragment>
        <img  className="planet-img" src={props.img_url}></img>
    </Fragment>
    )
}

export default ImgPlanet