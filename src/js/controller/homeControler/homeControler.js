import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { urls } from '../../utils/urls/urls'
import ThemeButtons from '../../view/themesButtons/themeButtons'
import LoginOrCreate from '../../view/loginOrCreate/loginOrCreate'

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

            </div>
        )
    }
}
export default HomeControler
