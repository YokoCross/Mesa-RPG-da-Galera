import React from 'react'
import { connect } from 'react-redux'

const ThemeButtons = () => {
    return (
        <section className='themeButtons-scetion'>

            <h2 className='global-title'>Escolha o seu Mundo</h2>

            <div className='themeButtons-buttons-flex'>
                <button
                    className='themeButtons-button themeButtons-esgal'

                >Esgal <br/> A Terra dos Exilalados
                </button>
                <button
                    className='themeButtons-button themeButtons-crimmah'
                >
                    Cronicas de Crimmah
                </button>
                <button
                    className='themeButtons-button themeButtons-yggdrasil'
                >
                    Expedição em Yggdrasil
                </button>
            </div>

        </section>
    )

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButtons)
