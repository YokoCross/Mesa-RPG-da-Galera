import React from 'react'

export const Header = (props) => {

    const { navbarVisible, toggleNavbarVisible } = props

    return (
        <header className='header-main'>

            <div className='header-div-flex'>
                <button className='header-button-hamburguer' onClick={toggleNavbarVisible} />
                <h1 className='header-h1'>RPG da Galera</h1>

            </div>
            <nav id='header-nav' style={{ display: navbarVisible }}>
                <ul className='header-ul'>
                    <li>Home</li>
                    <li>History</li>
                    <li>Talk to me</li>
                </ul>
            </nav>
        </header>
    )
}