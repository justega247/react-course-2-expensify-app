import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSENGER_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: "Rented",
//   note: "Rental",
//   amount: 12,
//   createdAt: 1400
// });

// database.ref('notes/-LHtt3ROGfNGvv6BkRyO').remove();

// database.ref('notes').push({
//   title: 'To Learn',
//   body: 'Python, Javascript'
// });

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error:', e);
// });

// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Google'
//   })
// }, 7000)

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error ', e)
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 5000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 10000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 15000);

// database.ref('job').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error occured ', e);
//   });

// database.ref().set({
//   name: "Okeremeta Tega",
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: "Lagos",
//     country: "Nigeria"
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This failed! ', e);
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': "Dubai"
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': "Amazon",
//   'location/city': "Dubai!"
// });

// database.ref('isSingle').set(null);

// database.ref('location/home').set("here");

// database.ref('attributes').set({
//   height: "185cm",
//   weight: "65kg"
// }).then(() => {
//   console.log('This worked!');
// }).catch((e) => {
//   console.log('Something went wrong', e);
// });

// database.ref().remove().then(() => {
//   console.log('remove worked!');
// }).catch((e) => {
//   console.log('Something went wrong', e);
// });