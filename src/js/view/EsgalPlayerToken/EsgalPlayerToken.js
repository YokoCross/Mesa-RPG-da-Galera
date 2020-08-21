import React from 'react'
import { connect } from 'react-redux'

export const EsgalPlayerToken = () => {
    return (
        <section className='esgal-player-token-section'>
            <div className='esgal-player-token-div'>
                <label className='esgal-player-token-label'>Nome:</label>
                <p className='esgal-player-token-write'>um nome</p>
            </div>

            <div className='esgal-player-token-div'>
                <label className='esgal-player-token-label'>Status:</label>
                <p className='esgal-player-token-write'>Saudavel</p>
            </div>

            <div className='esgal-player-token-div'> 
                <label className='esgal-player-token-label'>Raça:</label>
                <p className='esgal-player-token-write'>uma raça</p>
            </div>

            <div className='esgal-player-token-div'>
                <label className='esgal-player-token-label'>Classe:</label>
                <p className='esgal-player-token-write'>uma classe</p>
            </div>

            <div className='esgal-player-token-div2'>
                <label className='esgal-player-token-label'>Titulos:</label>
                <p className='esgal-player-token-write'>uma classe</p>
            </div>

            <div className='esgal-player-token-div2'>
                <label className='esgal-player-token-label'>Itens:</label>
                <p className='esgal-player-token-write'>itens</p>
            </div>

            <div className='esgal-player-token-div2'>
                <label className='esgal-player-token-label'>Habilidades:</label>
                <p className='esgal-player-token-write'>habilidades</p>
            </div>


        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EsgalPlayerToken)
