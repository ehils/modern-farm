let plantedSeed = []

export const addPlant = (seedObject) => {
    plantedSeed.push(seedObject)
    return plantedSeed
}

export const usePlants = () => {
    // return JSON.parse(JSON.stringify(array))
    return plantedSeed.slice()
}