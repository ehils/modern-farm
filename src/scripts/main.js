import { createPlan } from "./plan.js"
// console.log("Welcome to the main module")

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
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const mainContainer = document.querySelector(".container")

const exampleGrowPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
plantSeeds(exampleGrowPlan)
let fieldArray = usePlants()
const harvestArray = harvestPlants(fieldArray)
const applicationHTML = Catalog(harvestArray)

mainContainer.innerHTML = applicationHTML

// console.log(testSeed)
// let testUse = usePlants(testSeed)

// let testSow = plantSeeds()
// console.log(testSow)

