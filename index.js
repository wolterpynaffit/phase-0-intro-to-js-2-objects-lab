// Write your solution in this file!
let employee = {
    name:"Sam",
    streetAddress: "11 Broadway"

}


function updateEmployeeWithKeyAndValue(object,key,value){
    let copyObj = {...employee}
    copyObj[key] = value
    return copyObj
}

function destructivelyUpdateEmployeeWithKeyAndValue (object,key,value){
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key){
    let copyObj = {...employee}
    delete copyObj[key]
    return copyObj
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}