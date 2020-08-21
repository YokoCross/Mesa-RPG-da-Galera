import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { urls } from '../../utils/urls/urls'
import ThemeButtons from '../../view/themesButtons/themeButtons'
import LoginOrCreate from '../../view/loginOrCreate/loginOrCreate'
import History from '../../view/history/history'
import Contact from '../../view/contact/contact'
import EsgalCreationController from '../esgalCreationController/esgalCreationController'
import CrimmahCreation from '../../view/creationViews/crimmahCreation'
import YggdrasilCreation from '../../view/creationViews/yggdrasilCreation'
import EsgalPlayerToken from '../../view/EsgalPlayerToken/EsgalPlayerToken'

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
                    render={() => <EsgalCreationController />}
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
                <Route
                    exact
                    path={urls.esgalPlayerToken.path}
                    render={() => <EsgalPlayerToken />}
                />

            </div>
        )
    }
}
export default HomeControler
