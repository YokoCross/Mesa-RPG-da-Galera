import React from 'react'
import { connect } from 'react-redux'

const EsgalCreation = ({ classes }) => {

    return (
        <section>
            <form>
                <div className='esgalCreation-input-flex'>
                    <label className='global-label' htmlFor='character-name'>Nome do Personagem</label>
                    <input className='global-input' id='character-name'></input>
                </div>

                <div className='esgalCreation-input-flex'>
                    <label className='global-label' >Raça do Personagem</label>
                    <div>
                        <button>Anão</button>
                        <button>Humano</button>
                        <button>Elfo</button>
                    </div>
                </div>

                <div className='esgalCreation-input-flex'>
                    <label className='global-label' >Classe do Personagem</label>
                    <div>
                        {
                            classes.map(classe => {
                                return (
                                    <button key={classe.class}>{classe.class}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </form>
        </section>
    )

}

const mapStateToProps = (state) => ({
    classes: state.classesStore.classes
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EsgalCreation)
