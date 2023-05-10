// filter the even number 

const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 23, 345, 43, 345, 534]
const evenNumber = randomNumbers.filter((number) => {
    return number % 2 === 0
})
// console.log(evenNumber)



// filter the name 
const randomNames = ["Ashok", "Grishma", "Swata", "Jenny", "Jesika", "Nirmala"]
const namesHave5Letters = randomNames.filter((name) => {
    return name.length > 5
})
// console.log(namesHave5Letters)

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((_, i) => i % 2 === 0);
console.log(filteredNumbers)