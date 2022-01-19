let growingPlants = []

// adds seed to the field akak growingPlants array
export const addPlant = (seedObject) => {
    growingPlants.push(seedObject)
    return growingPlants
}

// Array.isArray(seedObject)? corn?

export const usePlants = () => {
    // return JSON.parse(JSON.stringify(array))
    return growingPlants.slice()
}