import React, { useEffect, useState } from "react"
import ImgPlanet from '../../../shared/img/image'
import Description from '../../../shared/description/description'
import Title from "../../../shared/title/title"
import '../../../css/stylePlanet.css'
import Satellites from '../../../shared/satellites/Satellites'
import AddSatellitesForm from "./form/addSatellitesForm"
async function getSatellites(id) {
    let res = await fetch(`http://localhost:3000/api/${id}.json`)
    let date = await res.json()
    return date
}
const Planet = (props) => {
    const [satellites, setSatellites] = useState([])
    useEffect(() => {
        getSatellites(props.id).then(date => {
            setSatellites(date['satellites'])
        })
    }, [])
    const addSatellite = (new_Satellite) => {
        setSatellites([...satellites, new_Satellite])
    }
    return (
        <div className="test" onClick={() => { props.ClikPlanet(props.name) }}>

            <Title name={props.name} />
            <Description description={props.description} link={props.link} />
            <ImgPlanet img_url={props.img_url} />

            <p className="title">Satellites</p>
            <ul>
                <hr />
                <AddSatellitesForm addSatellite={addSatellite} />
                <hr />
                {
                    satellites.map((satellite, i) =>
                        <Satellites
                            name={satellite.name}
                            key={i}
                        />
                    )
                }
            </ul>
        </div>
    )
}
export default Planet