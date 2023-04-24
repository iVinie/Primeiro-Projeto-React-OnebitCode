
import ImgPlanet from '../../../shared/img/image'
import Description from '../../../shared/description/description'
import Title from "../../../shared/title/title"
import '../../../css/stylePlanet.css'


const Planet = (props) => {
    return (
        <div className="test">
            <Title name={props.name} />
            <Description description={props.description} link={props.link} />
            <ImgPlanet img_url={props.img_url} />
        </div>
    )
}
export default Planet