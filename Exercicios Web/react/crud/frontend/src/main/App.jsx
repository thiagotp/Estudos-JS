import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'

import { BrowserRouter } from 'react-router-dom'
import Rts from './Routes'

export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo></Logo>
                <Nav></Nav>
                <Rts></Rts>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    )
}