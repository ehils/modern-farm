import { createPlan } from "./plan.js"
console.log("Welcome to the main module")

const yearlyPlan = createPlan()
// console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
// console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
// console.log(potatoSeed)

import { createSoyBean } from "./seeds/soybean.js"

const soybeanSeed = createSoyBean()
// console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
// console.log(wheatSeed)

import { addPlant } from "./field.js" 
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

let plan = createPlan()
// let planted = plantSeeds(plan)
// let added =addPlant(planted)
// console.log(added)

let testSeed = addPlant(plan)
let testUse = usePlants(testSeed)

let planed = plantSeeds(testUse)
console.log(planed)

