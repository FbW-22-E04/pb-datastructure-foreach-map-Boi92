//1 
console.log(`------1------`);

function doubleValues(array) {
    // ForEach() method

    // const currentArray = [];
    // array.forEach(element => {
    //     currentArray.push(element * 2);
    // });

    // Solved with map()
    const currentArray = array.map(element => element * 2);
    return currentArray;
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));


//2

console.log(`------2------`);

function onlyEvenValues(array) {
    const currentArray = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            currentArray.push(element);
        }
    });
    return currentArray;
}
console.log(onlyEvenValues([1, 2, 3])); // [2])
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10])

//3 
console.log(`------3------`);

function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));

//4 

console.log(`------4------`);

function addKeyAndValue(array, key, value) {
    return array.map(element => {
        element[key] = value;
        return element;
    });
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));



//5 
console.log(`------5------`);

function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];

    // using includes()
    currentArray.forEach((letter) => {
        if (vowelArray.includes(letter)) {
            countObject[letter] = (countObject[letter] || 0) + 1;
        }
    });

    // using filter()
    // vowelArray.forEach(vowel => {
    //     let count = currentArray.filter(letter => letter === vowel);
    //     if (count.length > 0) {
    //         countObject[vowel] = count.length;
    //     };
    // });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};