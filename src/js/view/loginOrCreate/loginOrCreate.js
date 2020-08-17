import React, { useState } from 'react'
import { connect } from 'react-redux'

import * as CourseActions from '../../store/actions/characterActions'
import { LinkWrapper } from '../../utils/linkWarpper/linkWrapper'

const LoginOrCreate = ({ searchingName, chosenWorld }) => {

    const [wantedName, setWantedName] = useState('');
    console.log(chosenWorld);
    return (
        <section className='login-or-create-section'>

            <h2 className='global-title'>Ponto de Acesso</h2>

            <div className='login-or-create-content-fex'>

                <div className='login-or-create-name-search-flex'>

                    <label className='global-label' htmlFor='name-search'>Qual o nome do seu personagem?</label>
                    <input
                        className='global-input'
                        id='name-search'
                        type='text'
                        onChange={event => setWantedName(event.target.value)}
                    ></input>
                    <button
                        onClick={() => searchingName(wantedName)}
                        className='global-button' >Buscar personagem</button>

                </div>

                <div className='login-or-create-new-character-flex'>
                    <label className='global-label'>Qual o nome do seu personagem?</label>
                    <LinkWrapper to={`/${chosenWorld}Creation`}>
                        <button className='global-button' >Criar novo personagem</button>
                    </LinkWrapper>
                </div>
            </div>
        </section>
    )

}

const mapStateToProps = (state) => ({
    chosenWorld:state.charactersStore.chosenWorld
})

const mapDispatchToProps = dispatch => ({
    searchingName: (wantedName) =>
        dispatch(CourseActions.searchingName(wantedName))


})

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrCreate)
