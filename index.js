import {fetchData} from './fetchData.js'
import {formatData} from './utils.js'
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter username: ', (username) => {
  fetchData(username)
    .then(data => {
      formatData(data);
    })
    .catch(error => {
      console.error(error.message);
    })
  rl.close();
});