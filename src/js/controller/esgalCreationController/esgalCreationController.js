import React from 'react'
import { connect } from 'react-redux'

import * as CourseActions from '../../store/actions/characterActions'

const EsgalCreationController = ({ charactersStore, classesStore, choosingName, choosingRace, choosingClass, choosingSkills }) => {


    return (
        <section>
            <h2 className='global-title'>Criação de Personagem</h2>
            <form className='esgalCreation-form'>
                <div className='esgalCreation-input-flex'>
                    <label className='global-label' htmlFor='character-name'>Nome do Personagem</label>
                    <input required onChange={event => choosingName(event.target.value)} className='global-input' id='character-name'></input>
                </div>

                <div className={charactersStore.racaChosen}>
                    <label className='global-label' >Raça do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        <button onClick={(event) => choosingRace(event, 'Anão')} className='esgalCreation-button-skill'>Anão</button>
                        <button onClick={(event) => choosingRace(event, 'Humano')} className='esgalCreation-button-skill'>Humano</button>
                        <button onClick={(event) => choosingRace(event, 'Elfo')} className='esgalCreation-button-skill'>Elfo</button>
                    </div>
                </div>

                <div className={charactersStore.classChosen}>
                    <label className='global-label' >Classe do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        {
                            classesStore.classes.map(classe => {
                                return (
                                    <button
                                        className='esgalCreation-button-skill'
                                        key={classe.class} onClick={(event) => choosingClass(event, classe)}
                                    >
                                        {classe.class}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={charactersStore.skillschosen}>
                    <label className='global-label' >Classe do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        {
                            classesStore.skills.map(skill => {

                                return (
                                    <button
                                        className={`esgalCreation-button-skill ${skill.skillAtribute}`}
                                        key={skill.skilName}
                                        onClick={(event) => choosingSkills(event, skill.skilName)}
                                        id={skill.skilName.replace(/\s/g, '')}
                                    >
                                        {skill.skilName}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

                <button type='submit' className={charactersStore.submitbutton}>Criar personagem</button>
            </form>
        </section>
    )

}

const mapStateToProps = (state) => ({

    classesStore: state.classesStore,
    charactersStore: state.charactersStore,
})

const mapDispatchToProps = dispatch => ({
    choosingRace: (event, name) =>
        dispatch(CourseActions.choosingRace(event, name)),

    choosingClass: (event, value) =>
        dispatch(CourseActions.choosingClass(event, value)),

    choosingSkills: (event, value) =>
        dispatch(CourseActions.choosingSkills(event, value)),

    choosingName: name =>
        dispatch(CourseActions.choosingName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EsgalCreationController)
