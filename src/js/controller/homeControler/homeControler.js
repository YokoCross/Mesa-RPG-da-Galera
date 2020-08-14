import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { urls } from '../../utils/urls/urls'
import ThemeButtons from '../../view/themesButtons/themeButtons'
import LoginOrCreate from '../../view/loginOrCreate/loginOrCreate'
import History from '../../view/history/history'
import Contact from '../../view/contact/contact'

class HomeControler extends Component {
    render() {
        return (
            <div className='global-container'>
                <Route
                    exact
                    path={urls.inicialButtons.path}
                    render={() => <ThemeButtons />}
                />
                <Route
                    exact
                    path={urls.loginOrCreate.path}
                    render={() => <LoginOrCreate />}
                />
                <Route
                    exact
                    path={urls.history.path}
                    render={() => <History />}
                />
                <Route
                    exact
                    path={urls.contact.path}
                    render={() => <Contact />}
                />

            </div>
        )
    }
}
export default HomeControler
