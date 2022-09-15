console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const testArray = [
    {
        type: "Asparagus",
        height: 24,
        output: 4
    }, 
        
    {
    type: "Corn",
    height: 180,
    output: 6
    },
    {
        type: "Corn",
        height: 180,
        output: 6   
    },
        
       
] 

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const planAsObjects = plantSeeds(yearlyPlan)
console.log(planAsObjects)

const firstTest = addPlant(planAsObjects)
console.log(firstTest)

 const secondTest = usePlants(firstTest)
console.log(secondTest)

const thirdTest = harvestPlants(secondTest)
console.log(thirdTest)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(thirdTest)
