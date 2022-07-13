export const lowercaseString = (text) => {
    return text.toLowerCase()
}

export const uppercaseString = (text) => {
    return text.toUpperCase()
}

export const onlyNumbers = (text) => {
    let numbers = ""
    if(text != undefined){
        for (let index = 0; index < text.length; index++) {
            if(!isNaN(text[index])) numbers = numbers+text[index]
        }
    }
    return numbers
}