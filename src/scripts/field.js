let plantedSeed = []

export const addPlant = (seedObject) => {
    plantedSeed.push(seedObject)
    return plantedSeed
}

export const usePlants = () => {
    let newPlantedSeeds = plantedSeed
    return newPlantedSeeds
}