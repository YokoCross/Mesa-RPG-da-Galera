export function changingWorld(world) {
    return {
        type: 'CHANGING_WORLD',
        world,
    }
}

export function searchingName(name) {
    return {
        type: 'SEARCHING_NAME',
        name,
    }
}

export function choosingRace(event, name) {
    event.preventDefault()
    return {
        type: 'CHOOSING_RACE',
        name,
    }
}

export function choosingClass(event, value) {
    event.preventDefault()
    return {
        type: 'CHOOSING_CLASS',
        value,
    }
}

export function choosingSkills(event, value) {
    event.preventDefault()
    event.target.setAttribute('class', 'display-none')
    return {
        type: 'CHOOSING_SKILLS',
        value,
    }
}