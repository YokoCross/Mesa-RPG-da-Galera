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
                                if (charactersStore.characterCreated.race === 'Anão') {
                                    if (classe.classType === 1 || classe.classType === 3) {
                                        return (
                                            <button
                                                className='esgalCreation-button-skill'
                                                key={classe.class} onClick={(event) => choosingClass(event, classe)}
                                            >
                                                {classe.class}
                                            </button>
                                        )
                                    }
                                    return null
                                }
                                if (charactersStore.characterCreated.race === 'Elfo') {
                                    if (classe.classType === 2 || classe.classType === 3) {
                                        return (
                                            <button
                                                className='esgalCreation-button-skill'
                                                key={classe.class} onClick={(event) => choosingClass(event, classe)}
                                            >
                                                {classe.class}
                                            </button>
                                        )
                                    }
                                    return null
                                }

                                if (charactersStore.characterCreated.race === 'Humano') {
                                    if (classe.classType === 1 || classe.classType === 2) {
                                        return (
                                            <button
                                                className='esgalCreation-button-skill'
                                                key={classe.class} onClick={(event) => choosingClass(event, classe)}
                                            >
                                                {classe.class}
                                            </button>
                                        )
                                    }
                                    return null
                                }
                                return null
                            })
                        }
                    </div>
                </div>
                <div className={charactersStore.skillschosen}>
                    <label className='global-label' >Classe do Personagem</label>
                    <div className='esgalCreation-button-skills-flex'>
                        {
                            classesStore.skills.map(skill => {
                                console.log(charactersStore.characterCreated.class);
                                if(charactersStore.characterCreated.class.class === 'Cavaleiro'){
                                    if(skill.skillAtribute === 'fisico' || skill.skillAtribute === 'divino'){
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
                                    }
                                    return null
                                }
                                if(charactersStore.characterCreated.class.class === 'Arqueiro'){
                                    if(skill.skillAtribute === 'magico' || skill.skillAtribute === 'divino' || skill.skillAtribute === 'geral'){
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
                                    }
                                    return null
                                }
                                if(charactersStore.characterCreated.class.class === 'Sacerdote'){
                                    if(skill.skillAtribute === 'divino' || skill.skillAtribute === 'divino2' || skill.skillAtribute === 'geral'){
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
                                    }
                                    return null
                                }
                                if(charactersStore.characterCreated.class.class === 'Ladrão'){
                                    if(skill.skillAtribute === 'magico' || skill.skillAtribute === 'divino' || skill.skillAtribute === 'geral'){
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
                                    }
                                    return null
                                }
                                if(charactersStore.characterCreated.class.class === 'Monge'){
                                    if(skill.skillAtribute === 'fisico' || skill.skillAtribute === 'divino' || skill.skillAtribute === 'geral'){
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
                                    }
                                    return null
                                }
                                if(charactersStore.characterCreated.class.class === 'Mago'){
                                    if(skill.skillAtribute === 'magico'|| skill.skillAtribute === 'magico2' || skill.skillAtribute === 'geral'){
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
                                    }
                                    return null
                                }
                                return null
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
