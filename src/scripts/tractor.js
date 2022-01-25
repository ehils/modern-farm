// import createSeeds functions
import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// define and export a plantSeeds function
export const plantSeeds = (plantingPlan) => {
    // iterate through row arrays of plan
    for (let row of plantingPlan) {
        // iterate through plants in each row
        // plant variable stores string from array
        for (let plant of row) {
            // condition says that if the string stored in plant variable is equal to the string specified
            if (plant === "Asparagus") {
                // evoke the createAsparagus function to create the seed object   
                const asparagus = createAsparagus()
                // add that seed object to the growing plants array
                addPlant(asparagus)
                }
                else if (plant === "Potato") {
                    const potato = createPotato()
                    addPlant(potato)
                }
                else if (plant === "Corn") {
                    const corn = createCorn()
                    addPlant(corn)
                }
                else if (plant === "Wheat") {
                   const wheat = createWheat()
                   addPlant(wheat)
                }
                else if (plant === "Sunflower") {
                    const sunflower = createSunflower()
                    addPlant(sunflower)
                }
                else if (plant === "Potato") {
                    const soybean = createSoyBean()
                    addPlant(soybean)
                }
            }
        }
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
    // export const plantSeeds = (plantingPlan) => {
    // switch (plant){
    //      case "Corn":
    //      const corn = createCorn()
    //      addPlant(corn)
    //      break;
    // }
    //  switch (plantingPlan[row][plant]){
    //      case "Asparagus":
    //      const asparagus = createAsparagus()
    //      plantArr[row][plant] = asparagus
    //      break;
    //  }
    //  switch (plantingPlan[row][plant]){
    //      case "Wheat":
    //      const wheat = createWheat()
    //      plantArr[row][plant] = wheat
    //      break;
    //  }
    //  switch (plantingPlan[row][plant]){
    //      case "Potato":
    //      const potato = createPotato()
    //          plantArr[row][plant] = potato
    //          break;
    //  }
    //  switch (plantingPlan[row][plant]){
    //      case "SoyBean":
    //      const soybean = createSoyBean()
    //      plantArr[row][plant] = soybean
    //      break;
    //  }
    //  switch (plantingPlan[row][plant]){
    //      case "Sunflower":
    //      const sunflower = createSunflower()
    //      plantArr[row][plant] = sunflower
    //      break;
    //  }
//     let plantArr = plantingPlan.slice()

//     for (let i = 0; i < plantingPlan.length; i++) {
//         for (let k = 0; k < plantingPlan.length[i]; k++) {
//             switch (plantingPlan[i][k]){
//                 case "Corn":
//                 const corn = createCorn()
//                 plantArr[i][k] = corn
//                 break;
//                 case "Asparagus":
//                     const asparagus = createAsparagus()
//                     plantArr[i][k] = asparagus
//                     break;
//                 case "Wheat":
//                     const wheat = createWheat()
//                     plantArr[i][k] = wheat
//                     break;
//                 case "Potato":
//                     const potato = createPotato()
//                     plantArr[i][k] = potato
//                     break;
//                 case "Sunflower":
//                 const sunflower = createSunflower()
//                 plantArr[i][k] = sunflower
//                 break;
//                 case "Soybean":
//                 const soybean = createSoyBean()
//                 plantArr[i][k] = soybean
//                 break;
//             }
//         }
//     }
// return plantArr
//