// import createSeeds functions
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// define a plantSeeds function
export let plantSeeds = (plantingPlan) => {
    let plantArr = plantingPlan.slice()
    for (let row of plantingPlan) {
        for (let plant of row) {
            if (row[plant] = "Asparagus") {
                plant = createAsparagus()
            }
            else if (row[plant] = "Potato") {
                plant = createPotato()
            }
            else if (row[plant] = "Soybean") {
                plant = createSoyBean()
            }
            else if (row[plant] = "Sunflower") {
                plant = createSunflower()
            }
            else if (row[plant] = "Wheat") {
                plant = createWheat()
            }
            else if (row[plant] = "Corn") {
                plant = createCorn()
            }
        }
        
    }
    return plantArr
}

// must accept planting plan as input(define a parameter)
// plan is an array
// 4 arrays representing rows to pe plants
// iterate 1)parent array
// iterate 2)child array
// as you iterate the rows, invoke the corresponding factory function (createX to get X seed)
// add seed to array of plants in field module
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]