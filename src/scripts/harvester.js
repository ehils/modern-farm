
// define a harvestPlants fucntion
// accept plants array as input
export const harvestPlants = (plantArr) => {
    let harvestArray = []
    // iterate array of growing plants
    for (const plant of plantArr) {
        // on each plant get the value of the output property
        
        let output = null
        if (plant.type === "Corn"){
            output = plant.output/2
        } else output = plant.output  
        for (let i=0; i < output; i++) {
            harvestArray.push(plant)
        }     
    }
    // return an array of seed objects
    return harvestArray
}