import React from 'react'
import {Link} from 'react-router-dom'
import './Logo.css'
import logo from '../../assets/img/crud.png'

export default (props) =>
    <aside className="logo">
        <Link to="/" className="logo"></Link>
        <img src={logo} alt="logo"/>
    </aside>