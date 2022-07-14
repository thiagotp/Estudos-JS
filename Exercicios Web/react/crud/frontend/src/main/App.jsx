import './App.css'
import React from 'react'

import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Logo from '../components/template/Logo'

export default function App(props) {
    return (
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}