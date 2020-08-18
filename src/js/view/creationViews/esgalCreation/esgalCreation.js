import React, { useState } from 'react'
import { connect } from 'react-redux'

import * as CourseActions from '../../../store/actions/characterActions'

const EsgalCreation = ({ classes, skills, racaChosen, classChosen, skillschosen, choosingRace, choosingClass, choosingSkills }) => {

    const [name, setName] = useState('')

    return (
        <section>
            <h2 className='global-title'>Criação de Personagem</h2>
            <form>
                <div className='esgalCreation-input-flex'>
                    <label className='global-label' htmlFor='character-name'>Nome do Personagem</label>
                    <input required value={name} onChange={event => setName(event.target.value)} className='global-input' id='character-name'></input>
                </div>

                <div className={racaChosen}>
                    <label className='global-label' >Raça do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        <button onClick={(event) => choosingRace(event, 'Anão')} className='esgalCreation-button-skill'>Anão</button>
                        <button onClick={(event) => choosingRace(event, 'Humano')} className='esgalCreation-button-skill'>Humano</button>
                        <button onClick={(event) => choosingRace(event, 'Elfo')} className='esgalCreation-button-skill'>Elfo</button>
                    </div>
                </div>

                <div className={classChosen}>
                    <label className='global-label' >Classe do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        {
                            classes.map(classe => {
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
                <div className={skillschosen}>
                    <label className='global-label' >Classe do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        {
                            skills.map(skill => {
                                return (
                                    <button
                                        className={`esgalCreation-button-skill ${skill.skillAtribute}`}
                                        key={skill.skilName}
                                        onClick={(event) => choosingSkills(event, skill.skilName)}
                                    >
                                        {skill.skilName}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

                <button type='submit'>Criar personagem</button>
            </form>
        </section>
    )

}

const mapStateToProps = (state) => ({
    classes: state.classesStore.classes,
    skills: state.classesStore.skills,
    racaChosen: state.charactersStore.racaChosen,
    classChosen: state.charactersStore.classChosen,
    skillschosen: state.charactersStore.skillschosen,
})

const mapDispatchToProps = dispatch => ({
    choosingRace: (event, name) =>
        dispatch(CourseActions.choosingRace(event, name)),

    choosingClass: (event, value) =>
        dispatch(CourseActions.choosingClass(event, value)),

    choosingSkills: (event, value) =>
        dispatch(CourseActions.choosingSkills(event, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EsgalCreation)
