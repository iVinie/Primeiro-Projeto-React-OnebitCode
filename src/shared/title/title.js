import React, {Fragment} from "react"

const Title = (props) => {
    return(
        <Fragment>
            <p className="title">{props.name}</p>
        </Fragment>
    )
}

export default Title