import React from 'react'
import { connect } from 'react-redux'
import * as CourseActions from '../../store/actions/characterActions'
import { LinkWrapper } from '../../utils/linkWarpper/linkWrapper'
import { urls } from '../../utils/urls/urls'

const ThemeButtons = ({ characterActions }) => {
    return (
        <section className='themeButtons-scetion'>

            <h2 className='global-title'>Escolha o seu Mundo</h2>

            <div className='themeButtons-buttons-flex'>
                <LinkWrapper to={urls.loginOrCreate.path}>
                    <button
                        className='themeButtons-button themeButtons-esgal'
                        onClick={() => characterActions('esgal')}
                    >Esgal <br /> A Terra dos Exilados
                    </button>
                </LinkWrapper>
                <LinkWrapper to={urls.loginOrCreate.path}>
                    <button
                        className='themeButtons-button themeButtons-crimmah'
                        onClick={() => characterActions('crimmah')}
                    >
                        Cronicas de Crimmah
                    </button>
                </LinkWrapper>
                <LinkWrapper to={urls.loginOrCreate.path}>
                    <button
                        className='themeButtons-button themeButtons-yggdrasil'
                        onClick={() => characterActions('yggdrasil')}
                    >
                        Expedição em Yggdrasil
                    </button>
                </LinkWrapper>

            </div>

        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    characterActions: (world) =>
        dispatch(CourseActions.changingWorld(world))
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButtons)
