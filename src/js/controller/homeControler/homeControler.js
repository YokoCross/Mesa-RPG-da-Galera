import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { urls } from '../../utils/urls/urls'
import ThemeButtons from '../../view/themesButtons/themeButtons'
import LoginOrCreate from '../../view/loginOrCreate/loginOrCreate'
import History from '../../view/history/history'
import Contact from '../../view/contact/contact'
import EsgalCreation from '../../view/creationViews/esgalCreation/esgalCreation'
import CrimmahCreation from '../../view/creationViews/crimmahCreation'
import YggdrasilCreation from '../../view/creationViews/yggdrasilCreation'

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
                <Route
                    exact
                    path={urls.esgalCreation.path}
                    render={() => <EsgalCreation />}
                />
                <Route
                    exact
                    path={urls.crimmahCreation.path}
                    render={() => <CrimmahCreation />}
                />
                <Route
                    exact
                    path={urls.yggdrasilCreation.path}
                    render={() => <YggdrasilCreation />}
                />

            </div>
        )
    }
}
export default HomeControler
