function mapArrayDeclarative(arr, func) {
    return arr.map(func);
}

function mapArrayImperative(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

const myArr = [1, 2, 3, 4, 5]
function someFunc(n) {
    return n * 2
}

console.log('test declarative method: ', mapArrayDeclarative(myArr, someFunc))
console.log('test imperative method: ', mapArrayImperative(myArr, someFunc))