const _array = [4, [[5], [6, [7], 8], 9, 10]];


function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}


console.log('flattened array: ', flattenArray(_array))