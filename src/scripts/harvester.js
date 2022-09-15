let harvestedPlants=[]
export const harvestPlants = (plantsToBeHarvested) => {
    for (let plant of plantsToBeHarvested) {
        let howManyToHarvest = plant.output
       if (plant.type === "Corn") {
        howManyToHarvest=howManyToHarvest/2
    }
    for (let i = 0; i < howManyToHarvest; i++) {
     harvestedPlants.push(plant)
    }
    }
    return harvestedPlants
}