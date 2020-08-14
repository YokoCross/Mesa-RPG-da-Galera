import React from 'react';
import { connect } from 'react-redux'

import * as CourseActions from '../../store/actions/toggleNavbarVisible'
import { LinkWrapper } from '../../utils/linkWarpper/linkWrapper'
import { urls } from '../../utils/urls/urls'

const Header = ({ navbarVisible, toggleNavbarVisible }) => {

    return (
        <header className='header-main'>

            <div className='header-div-flex'>
                <button
                    className='header-button-hamburguer'
                    onClick={() => toggleNavbarVisible(navbarVisible)}
                />
                <h1 className='header-h1'><LinkWrapper className='header-Link' to={urls.inicialButtons.path}>RPG da Galera</LinkWrapper></h1>
            </div>

            <nav className={`${navbarVisible} `} id='header-nav'>
                <ul className='header-ul'>
                    <li><LinkWrapper className='header-Link' to={urls.inicialButtons.path}>Home</LinkWrapper></li>
                    <li><LinkWrapper className='header-Link' to={urls.history.path}>History</LinkWrapper></li>
                    <li><LinkWrapper className='header-Link' to={urls.contact.path}>Talk to me</LinkWrapper></li>
                </ul>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    navbarVisible: state.headerStore.navbarVisible
})

const mapDispatchToProps = dispatch => ({
    toggleNavbarVisible: (displayStatus) =>
        dispatch(CourseActions.toggleNavbarVisible(displayStatus))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)