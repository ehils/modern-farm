// import createSeeds functions
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// define a plantSeeds function
// export const plantSeeds = (plantingPlan) => {
//     let plantArr = plantingPlan.slice()
//     for (let row of plantingPlan) {
//         for (let plant of row) {
//             if (plantingPlan[row[plant]] = "Asparagus") {
//                 plant = createAsparagus()
//             }
//             else if (plantingPlan[row[plant]] = "Potato") {
//                 plant = createPotato()
//             }
//             else if (plantingPlan[row[plant]] = "Soybean") {
//                 plant = createSoyBean()
//             }
//             else if (plantingPlan[row[plant]] = "Sunflower") {
//                 plant = createSunflower()
//             }
//             else if (plantingPlan[row[plant]] = "Wheat") {
//                 plant = createWheat()
//             }
//             else if (plantingPlan[row[plant]] = "Corn") {
//                 plant = createCorn()
//             }
//         }
        
//     }
//     return plantArr
// }

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
export const plantSeeds = (plantingPlan) => {
    let plantArr = plantingPlan.slice()

    for (let i = 0; i < plantingPlan.length; i++) {
        for (let k = 0; k < plantingPlan.length[i]; k++) {
            switch (plantingPlan[i][k]){
                case "Corn":
                const corn = createCorn()
                plantArr[i][k] = corn
                break;
                case "Asparagus":
                    const asparagus = createAsparagus()
                    plantArr[i][k] = asparagus
                    break;
                case "Wheat":
                    const wheat = createWheat()
                    plantArr[i][k] = wheat
                    break;
                case "Potato":
                    const potato = createPotato()
                    plantArr[i][k] = potato
                    break;
                case "Sunflower":
                const sunflower = createSunflower()
                plantArr[i][k] = sunflower
                break;
                case "Soybean":
                const soybean = createSoyBean()
                plantArr[i][k] = soybean
                break;
            }
        }
    }
return plantArr
}