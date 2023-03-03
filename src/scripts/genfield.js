const shuffleArray = (array) => {
    let newArray = []
    const arraySize = array.length
    for (let i = 0; i < arraySize; i++) {
        let currentIndex = Math.round(Math.random() * (array.length - 1))
        newArray.push(array[currentIndex])
        array.splice(currentIndex, 1)
    }
    return newArray
}

const chunkArray = (array, chunkSize) => {
    let newArray = []
    for (let i = 0; i < array.length; i+= chunkSize) {
        newArray.push(array.slice(i, i + chunkSize))
    }
    return newArray
}

// const identifyArray = (array, chunkSize) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push({pos: {x: i % chunkSize, y: Math.floor(i/chunkSize)}, mine: array[i].mine})
//     }
//     return newArray
// }

const getNearbySquares = (clickPos, width) => {
    const clickedSquare = clickPos.y * width + clickPos.x
    let squares = [
        clickedSquare,                  // clicked one
        clickedSquare + width,          // south
        clickedSquare - width,          // north
    ]

    if (clickedSquare % width !== 15) {
        squares.push(
            clickedSquare + 1,          // east
            clickedSquare + 1 + width,  // south-east
            clickedSquare + 1 - width   // north-east
        )
    }
    if (clickedSquare % width !== 0) {
        squares.push(
            clickedSquare - 1,          // west
            clickedSquare - 1 + width,  // south-west
            clickedSquare - 1 - width   // north-west
        )
    }
    squares = squares.filter(square => square > -1 && square < 256)
    return squares
}

const generateField = (width, height, mines, clickPos) => {
    // const clickedSquare = clickPos.y * width + clickPos.x
    const array = [...Array(width * height - mines).fill({mine: false, hidden: true}), ...Array(mines).fill({mine: true, hidden: true})]
    const shuffledArray = shuffleArray(array)

    const emptySquaresPos = shuffledArray.map((square, i) => !square.mine ? i : -1).filter(idx => idx !== -1);
    const nearbySquaresPos = getNearbySquares(clickPos, width)
    const filteredEmptyPosArray = emptySquaresPos.filter(i => !nearbySquaresPos.includes(i))
    const shuffledFilteredEmptyPosArray = shuffleArray(filteredEmptyPosArray)
    console.log({emptySquaresPos, nearbySquaresPos, shuffledFilteredEmptyPosArray})
    let iter = 0
    for (let pos of nearbySquaresPos) {
        if (shuffledArray[pos].mine) {
            let foundEmpty = shuffledFilteredEmptyPosArray[iter]
            shuffledArray[foundEmpty] = {...shuffledArray[foundEmpty], mine: true}
            shuffledArray[pos] = {...shuffledArray[pos], mine: false}
            iter++
        }
    }

    // if (shuffledArray[clickedSquare].mine) {
    //     let foundEmpty = shuffledArray.findIndex(i => !i.mine)
    //     shuffledArray[foundEmpty] = {...shuffledArray[foundEmpty], mine: true}
    //     shuffledArray[clickedSquare] = {...shuffledArray[clickedSquare], mine: false}
    // }
    const chunkedArray = chunkArray(shuffledArray, width)
    return calculateFieldCells(chunkedArray)
}

const calculateFieldCells = (inputField) => {
    const field = [...inputField]
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
            if (!field[y][x].mine) {
                let nearby = 0
                if (field[y+1] && field[y+1][x].mine) nearby++
                if (field[y+1] && field[y+1][x+1] && field[y+1][x+1].mine) nearby++
                if (field[y+1] && field[y+1][x-1] && field[y+1][x-1].mine) nearby++
                if (field[y][x+1] && field[y][x+1].mine) nearby++
                if (field[y][x-1] && field[y][x-1].mine) nearby++
                if (field[y-1] && field[y-1][x].mine) nearby++
                if (field[y-1] && field[y-1][x+1] && field[y-1][x+1].mine) nearby++
                if (field[y-1] && field[y-1][x-1] && field[y-1][x-1].mine) nearby++
                field[y][x] = {...field[y][x], nearby: nearby}
            }
        }
    }
    return field
}

// let field = generateField(16, 16, 40, {x: 1, y: 1})
// console.log(field)

export { generateField }