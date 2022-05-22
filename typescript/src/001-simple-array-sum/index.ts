// Given an array of integers, find the sum of its elements.
const simpleArraySum = (ar: number[]): number => {
    let sum: number = 0
    ar.map(number => sum += number)
    return sum
}

const ar = [1,2,3,4,10,11]
console.log(simpleArraySum(ar))
