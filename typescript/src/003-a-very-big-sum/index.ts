// https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=next-challenge&h_v=zen
(() => {
    const aVeryBigSum = (ar: number[]): number => {
        let sum: number = 0
        ar.map(number => sum += number)
        return sum
    }

    const ar = [1000000001,1000000002,1000000003,1000000004,1000000005]

    console.log(aVeryBigSum(ar))
})()
