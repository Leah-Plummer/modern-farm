import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"

let planOfObjects = []

export const plantSeeds = (plantingPlan) => {
let seed
    for (let row of plantingPlan) {
        for (let plant of row) {
            if (plant == "Asparagus"){
                seed = createAsparagus()
            } else if (plant == "Potato") {
                seed = createPotato()
            } else if (plant == "Soybean") {
               seed = createSoybean()
            } else if (plant == "Sunflower") {
                seed = createSunflower()
            } else if (plant == "Corn") {
                seed = createCorn()
            } else if (plant == "Wheat") {
                seed = createWheat()
            }
            planOfObjects.push(seed)
        }
    }
    return planOfObjects
}