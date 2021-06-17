import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
function Header() {
    return <div
        className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 text-white justify-content-between border-bottom shadow-sm"
    >
        <h3 className="logo my-0 mr-md-auto font-weight-bold">
            Aquafitness family
      </h3>
        <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#carousel">Наші тренери</a>
            <a className="p-2 text-dark" href="#schedule">Розклад</a>
            <a className="p-2 text-dark" href="#footer">Ціни</a>
        </nav>

        <a className="btn btn-outline-dark" href="#schedule">Хочу на заняття!</a>
        <Link to='/login' className="btn btn-info" >Увійти</Link>
    </div>
}

export default Header