import React from 'react';
import { connect } from 'react-redux'
import * as CourseActions from '../../store/actions/toggleNavbarVisible'

const Header = ({ navbarVisible, toggleNavbarVisible }) => {

    return (
        <header className='header-main'>

            <div className='header-div-flex'>
                <button
                    className='header-button-hamburguer'
                    onClick={() => toggleNavbarVisible(navbarVisible)}
                />
                <h1 className='header-h1'>RPG da Galera</h1>
            </div>

            <nav className={`${navbarVisible} `} id='header-nav'>
                <ul className='header-ul'>
                    <li>Home</li>
                    <li>History</li>
                    <li>Talk to me</li>
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