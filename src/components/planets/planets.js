import React, { Fragment } from "react"
import Planet from "./planet/planet"
import '../../css/stylePlanets.css'

async function getPlanets(){
   /*  let res = await fetch('http://localhost:3000/api/planets.json') */
   let res = await fetch('http:')
    let date = await res.json()
    return date
}


const ClikPlanet = (name) => {
    console.log(`Clicou no: ${name}`)
}
class Planets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: []
        }
    }
    componentDidMount(){
        getPlanets().then(date =>{
            this.setState(state => ({
                planets: date['planets']
            }))
        })
    }
    render() {
        return (
            <Fragment>
                <h1>Planet List</h1>
                <hr></hr>
                {
                    this.state.planets.map((planet, index) => 
                        <Planet
                            name={planet.name}
                            description={planet.description}
                            img_url={planet.img_url}
                            link={planet.link}
                            ClikPlanet={ClikPlanet}
                            id={planet.id}
                            key={index}
                        />
                    )
                }
            </Fragment>
        )
    }
}


export default Planets