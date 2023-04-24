import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'
import PlanetScreen from './screens/planet'


const Rotas = () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen/>}/>
            <Route exact path='/planet/:id' element={<PlanetScreen/>}/>
        </Routes>
    </Router>
)

export default Rotas