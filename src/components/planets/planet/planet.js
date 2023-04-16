import React, {Fragment} from "react"
import ImgPlanet from '../../../shared/img/image'
import Description from '../../../shared/description/description'
import Title from "../../../shared/title/title"
import '../../../css/stylePlanet.css'


const Planet = (props) => {
    return(
        <div className="test">
            <Title title={props.title}/>
            <Description description={props.description} link_planet={props.link_planet}/>
            <ImgPlanet img_url={props.img_url}/>
        </div>
    )
}

export default Planet