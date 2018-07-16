// const person = {
//   name: 'Tega!',
//   age: 239,
//   location: {
//     city: 'Lagos',
//     weather: 'cool'
//   }
// };

// const { name: nomenclature, age } = person;

// console.log(`${nomenclature} is ${age} years old`);

// const book = {
//   name: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin',
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

const item = ['Coffee (iced)', '$2.00', '$2.80', '$3.00'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
