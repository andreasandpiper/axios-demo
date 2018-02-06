console.log('main.js')

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';


//to get the result of the promise when completed, use .then
//.catch if something goes wrong
axios.get(BASE_URL + '/todos' +API_KEY).then((resp) => {
    console.log('GET response: ', resp);
}).catch((err) => {
    console.log('GET error: ', err);
})


const newItem = {
    title: 'Post #1',
    details: 'blah blahblah blahblah blahblah blah'
};

// axios.post(BASE_URL + '/todos' +API_KEY, newItem).then((resp) => {
//     console.log('POST response: ', resp);
// }).catch((err) => {
//     console.log('POST error: ', err);
// })