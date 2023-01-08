let evenNumbers = 0;
let oddNumbers = 0;
let otherNumbers = 0;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null];
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || (typeof (array[i]) !== 'number')){
            otherNumbers++;
        } else {
            if (array[i] % 2 === 0) {
                evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
}
console.log('Четных чисел ' + evenNumbers);
console.log('Нечетных чисел ' + oddNumbers);
console.log('Остальные ' + otherNumbers);
