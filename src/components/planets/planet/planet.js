
import ImgPlanet from '../../../shared/img/image'
import Description from '../../../shared/description/description'
import Title from "../../../shared/title/title"
import '../../../css/stylePlanet.css'
import { Link } from 'react-router-dom'


const Planet = (props) => {
    return (
        <div className="test">
            <Link to={`/planet/${props.id}`}><Title name={props.name} /></Link>
            <Description description={props.description} link={props.link} />
            <ImgPlanet img_url={props.img_url} />
        </div>
    )
}
export default Planet