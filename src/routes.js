import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'


const Rotas = () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen/>}/>
        </Routes>
    </Router>
)

export default Rotas