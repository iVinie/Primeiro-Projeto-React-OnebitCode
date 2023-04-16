import React, {Fragment} from "react";

const Description = (props) => {
    return(
        <Fragment>
            <p>{props.description} </p>
            <a href={props.link_planet}>Saiba mais clicando aqui</a>
        </Fragment>
    )
}

export default Description