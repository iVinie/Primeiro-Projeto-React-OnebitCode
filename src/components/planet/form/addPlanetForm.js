import React, { Fragment, useState } from "react";
import '../../../css/styleForm.css'
const initialState = {
    name:'',
    description:'',
    img_url:'',
    link:''
}
const AddPlanetForm = (props) => {
    const [newPlanet, setNewPlanet] = useState(initialState)
    const handleChange = e => setNewPlanet({
        ...newPlanet,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const handleForm = e => {
        props.addPlanet(newPlanet)
        e.preventDefault()
        setNewPlanet(initialState)
    }
    return (
        <Fragment>
            <form onSubmit={handleForm}>
                <div className="form">
                    <label htmlFor="name">Nome do planeta: </label>
                    <input id="name" type="text" value={newPlanet.name} name="name" onChange={handleChange}/>
                    <label htmlFor="description">Descrição:  </label>
                    <input id="description" type="text" name="description" value={newPlanet.description} onChange={handleChange}/>
                    <label htmlFor="img_url">URL da imagem: </label>
                    <input id="img_url" type="text" name="img_url" value={newPlanet.img_url} onChange={handleChange}/>
                    <label htmlFor="link">Link para mais informações:  </label>
                    <input id="link" type="text" name="link" value={newPlanet.link} onChange={handleChange}/>
                    <input type="submit" className="button"/>
                </div>
            </form>
        </Fragment>
    )
}
export default AddPlanetForm