export function changingWorld (world){
    return{
        type:'CHANGING_WORLD',
        world,
    }
}

export function searchingName (name){
    return{
        type:'SEARCHING_NAME',
        name,
    }
}