import React, { Fragment, useState } from "react";
import '../../../../css/styleForm.css'
const initialState = { name: [] }
const AddSatellitesForm = (props) => {
    const [newSatellite, setNewSatellite] = useState(initialState)
    const handleChange = e => setNewSatellite({
        ...newSatellite,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const handleForm = e => {
        props.addSatellite(newSatellite)
        e.preventDefault()
        setNewSatellite(initialState)
    }
    return (
        <Fragment>
            <form onSubmit={handleForm}>
                <div className="form" id="formSatellite">
                    <label htmlFor="name">Nome do satelite: </label>
                    <input id="name" type="text" value={newSatellite.name} name="name" onChange={handleChange} />
                    <input type="submit" className="button"/>
                </div>
            </form>
        </Fragment>
    )

}
export default AddSatellitesForm