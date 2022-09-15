



export const catalog = (harvestedFood) => {
    
    let foodString = ``
    for (let food of harvestedFood) {
        foodString += `<section class="plant">${food.type}</section>\n`
    }
    return foodString
}