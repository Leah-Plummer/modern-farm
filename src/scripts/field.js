

let plantsInField = []
let copyOfPlantsInField = []






export const addPlant = (plant) => {
    
    for (let obj of plant){
        if (Array.isArray(obj)) {
            for (let item of obj) 
            {
            plantsInField.push(item)
            }
        } else {
        plantsInField.push(obj)
    }
}
    return plantsInField
}

export const usePlants = () => {
    copyOfPlantsInField = plantsInField 
    return copyOfPlantsInField 
}
