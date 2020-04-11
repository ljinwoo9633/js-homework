let GetMinNumberInArrayUsingMath = (array: number[]): number => {
    let min = Math.min.apply(null, array);
    return min;
}

let GetMaxNumberInArrayUsingMath = (array: number[]): number => {
    let max = Math.max.apply(null, array);
    return max;
}

let GetMaxNumberUsingBoringMethod = (array: number[]): number => {
    let max = array[0];
    for(let index = 0; index < array.length; index++)
    {
        if(max < array[index])
        {
            max = array[index];
        }
    }
    return max;
}

let GetMinNumberUsingBoringMethod = (array: number[]): number => {
    let min = array[0];
    for(let index = 0; index < array.length; index++)
    {
        if(min > array[index])
        {
            min = array[index];
        }
    }
    return min;
}

let array = [273, 52, 103, 57, 271];

let min = GetMinNumberUsingBoringMethod(array);
let max = GetMaxNumberUsingBoringMethod(array);

let minUsingMath = GetMinNumberInArrayUsingMath(array);
let maxUsingMath = GetMaxNumberInArrayUsingMath(array);

console.log(`min: ${min}`);
console.log(`max: ${max}`);
console.log(`min using math: ${minUsingMath}`);
console.log(`max using math: ${maxUsingMath}`);
