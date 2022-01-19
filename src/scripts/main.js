import { createPlan } from "./plan.js"
console.log("Welcome to the main module")

// first import of plan
const yearlyPlan = createPlan()
// console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
// console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

// const potatoSeed = createPotato()
// console.log(potatoSeed)

import { createSoyBean } from "./seeds/soybean.js"

// const soybeanSeed = createSoyBean()
// console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
// console.log(wheatSeed)

import { addPlant } from "./field.js" 
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
 let planted = plantSeeds(yearlyPlan)
// let testSeed = addPlant(planted)
// let testUse = usePlants(testSeed)

console.log(planted)

