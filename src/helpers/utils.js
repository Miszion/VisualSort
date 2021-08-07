import Line from '../classes/Line'


const generateRandom = (range) => {
    let min = Math.ceil(1)
    let max = Math.floor(range)

    return Math.floor(Math.random() * (max- min + 1) + min)

}

export const generateLines = (range, startColor) => {

    const array = []
    const lineArray = []
    const randomDict = {}

    while (array.length < range) {
        
        let random = generateRandom(50)

        while (randomDict[random]) {
            random = generateRandom(50)
        }

        randomDict[random] = 1

        array.push(random)

    }


    for (var i = 0; i < array.length; i++) {

        const newLine = new Line(startColor, (10 * array[i]));

        lineArray.push(newLine)
    }

    return lineArray

}