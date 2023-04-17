import React from "react"
import ImgPlanet from '../../../shared/img/image'
import Description from '../../../shared/description/description'
import Title from "../../../shared/title/title"
import '../../../css/stylePlanet.css'
import Satellites from '../../../shared/satellites/Satellites'

async function getSatellites(id) {
    let res = await fetch(`http://localhost:3000/api/${id}.json`)
    let date = await res.json()
    return date
}
class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            satellites: []
        }
    }
    componentDidMount() {
        getSatellites(this.props.id).then(date => {
            this.setState(state => ({
                satellites: date['satellites']
            }))
        })
    }
    render() {
        return (
            <div className="test" onClick={() => { this.props.ClikPlanet(this.props.name) }}>
                <Title name={this.props.name} />
                <Description description={this.props.description} link={this.props.link} />
                <ImgPlanet img_url={this.props.img_url} />
                <p className="title">Satellites</p>
                <ul>
                    {
                        this.state.satellites.map((satellite, i) =>
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
}
export default Planet