import dogData from './data.js'

function getNewDogData(){
    if( dogData.length > 1 )
        dogData.shift()
    return getDogData()
}

function getDogData(){
    return dogData[0]
}

function isLastDogData(){
    return dogData.length === 1 ? true : false
}

export { getDogData, getNewDogData, isLastDogData }