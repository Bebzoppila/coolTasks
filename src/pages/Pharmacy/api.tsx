
async function getMedInfoFromPhamancy(namePhamancy:string){
    const response = await fetch(`http://127.0.0.1:5000/api/diseases?pharmacy=${namePhamancy}`)
    const data = await response.json()
    console.log(namePhamancy);
    
    return data
}

async function getInfoSideEffects(nameMed:string){
    const response = await fetch(`http://127.0.0.1:5000/api/sideeffects?medication=${nameMed}`)
    const data = await response.json()
    
    return data
}

export { getMedInfoFromPhamancy, getInfoSideEffects}