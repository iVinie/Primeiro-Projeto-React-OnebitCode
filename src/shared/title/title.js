import React, {Fragment} from "react"

const Title = (props) => {
    return(
        <Fragment>
            <p className="title">{props.title}</p>
        </Fragment>
    )
}

export default Title