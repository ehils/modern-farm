export const Catalog = (harvestedFoodArray) => {
    
    let harvestHtml = ""
    // iterate the array of food objects
    for (const plant of harvestedFoodArray) {
    // create HTML string
    harvestHtml +=`<section class="plant">${plant.type}</section>`
        
    }
    return harvestHtml
}