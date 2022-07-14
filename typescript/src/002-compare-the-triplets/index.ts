(() => {
    const compareTriplets = (a: number[], b: number[]): number[] => {
        let alice: number = 0
        let bob: number = 0
        const length: number = a.length
        for (let i = 0; i < length; i++) {
            if (a[i] > b[i]) alice += 1
            if (a[i] < b[i]) bob += 1
        }
        return [alice, bob]
    }

    const a = [1, 2, 3]
    const b = [3, 2, 1]

    console.log(compareTriplets(a, b))
})()
