import React, { Fragment } from "react"
import Planet from "./planet/planet"
import '../../css/stylePlanets.css'

const Planets = () => {
    return (
        <Fragment>
            <h1>Planet List</h1>
            <hr></hr>
            <Planet
                title="Mercúrio"
                description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas"
                link_planet="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                img_url="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg"
            />
            <Planet
                title="Terra"
                description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul."
                link_planet="https://pt.wikipedia.org/wiki/Terra"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg"
            />
        </Fragment>
    )
}

export default Planets