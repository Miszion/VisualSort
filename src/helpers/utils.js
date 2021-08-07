import Line from '../classes/Line'
export const generateLines = (range, startColor) => {

    const array = []

    for (var i = 1; i < range; i++) {

        const newLine = new Line(startColor, (10 * i));

        array.push(newLine)
    }

    return array

}