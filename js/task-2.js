function makeArray(firstArray, secondArray, maxLength) {
    const calcArray = firstArray.concat(secondArray);
    if (calcArray.length > maxLength) {
       return calcArray.slice(0, maxLength);
    } else {
        return calcArray;
    }
}

// const makeArray = (firstArray, secondArray, maxLength) => {
//     const calcArray = firstArray.concat(secondArray);
//     if (calcArray.length > maxLength) {
//         return calcArray.slice(0, maxLength);
//     } else {
//         return calcArray;
//     }
// }


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []



