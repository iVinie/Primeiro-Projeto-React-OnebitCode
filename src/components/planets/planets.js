import React, { Fragment, useState, useEffect } from "react"
import Planet from "./planet/planet"
import '../../css/stylePlanets.css'
import AddPlanetForm from "../planet/form/addPlanetForm"
async function getPlanets() {
    let res = await fetch('http://localhost:3000/api/planets.json')
    let date = await res.json()
    return date
}

const Planets = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        getPlanets().then(date => {
            setPlanets(date['planets'])
        })
    }, [])
    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }
    return (
        <Fragment>
            <h1>Planet List</h1>
            <hr/>
            <AddPlanetForm addPlanet={addPlanet}/>
            <hr/>
            {
                planets.map((planet, index) =>
                    <Planet
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                        id={planet.id}
                        key={index}
                    />
                )
            }
        </Fragment>
    )
}
export default Planets