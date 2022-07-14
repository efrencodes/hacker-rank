// https://www.hackerrank.com/challenges/mini-max-sum/
(() => {
    const miniMaxSum = (arr: number[]) => {
        let arrSum: number[] = [];
        let suma = 0;
        arr.forEach((value) => {
            suma += value;
        });
        arr.forEach((_, index) => {
            const resta = suma - arr[index];
            arrSum.push(resta);
        });
        return `${Math.min(...arrSum)} ${Math.max(...arrSum)}`;
    };

    function miniMaxSuma(arr: number[]) {
        let min = +Infinity,
            max = -Infinity,
            sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (arr[i] < min) min = arr[i];
            if (arr[i] > max) max = arr[i];
        }
        console.log(sum - max, sum - min);
    }

    console.log(miniMaxSum([7, 69, 2, 221, 8974]));
    miniMaxSuma([7, 69, 2, 221, 8974]);
})();
