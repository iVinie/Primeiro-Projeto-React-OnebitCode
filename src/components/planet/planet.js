import React, { useEffect, useState } from "react"
import ImgPlanet from '../../shared/img/image'
import Description from '../../shared/description/description'
import Title from "../../shared/title/title"
import '../../css/stylePlanet.css'
import Satellites from '../../shared/satellites/Satellites'
import AddSatellitesForm from "../planet/form/addSatellitesForm"
import { useParams , useNavigate, } from "react-router-dom"

async function getPlanet(id) {
    let res = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await res.json()
    return data
}
const Planet = () => {
    const [planet, setPlanet] = useState({})
    const [satellites, setSatellites] = useState([])
    let { id } = useParams( )
    let navigate = useNavigate()
    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        }, error =>{

        })
    }, [])
    const addSatellite = (new_Satellite) => {
        setSatellites([...satellites, new_Satellite])
    }
    function goToHome(){
        navigate('/')
    }
    return (
        <div className="test">
            <Title name={planet.name}/>
            <Description description={planet.description} link={planet.link} />
            <ImgPlanet img_url={planet.img_url} />
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
                <button onClick={() => goToHome()}>Voltar ao inicio</button>
        </div>
    )
}
export default Planet