let plantedSeed = []

export const addPlant = (seedObject) => {
    plantedSeed.push(seedObject)
    return plantedSeed
}

export const usePlants = (array) => {
    // return JSON.parse(JSON.stringify(array))
    return array.slice()
}