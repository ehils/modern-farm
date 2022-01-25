let growingPlants = []

// adds seed to the field akak growingPlants array
export const addPlant = (seedObj) => {
    if ( Array.isArray(seedObj) === true){
        for (const plant of seedObj) {
            growingPlants.push(plant)
        }
    }
    else growingPlants.push(seedObj)
    return growingPlants
}

// Array.isArray(seedObject)? corn?

export const usePlants = () => {
    // return JSON.parse(JSON.stringify(array))
    return growingPlants.slice()
}
