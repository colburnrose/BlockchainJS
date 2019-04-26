//jshint esversion: 6
const Blockchain = require('./blockchain'); // aquiring the blockchain js file.

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, 'dkfjaldkfjldkfj', 'dkfjadlfkjadfk');
bitcoin.createNewBlock(2389, 'dkfjadfkjldfjdf', 'dfjdkfkjdfkjdfj');
bitcoin.createNewBlock(2389, 'dkfjaldkfjldkfj', 'dkfjadlfkjadfk');
bitcoin.createNewBlock(2389, 'dkfjaldkfjldkfj', 'dkfjadlfkjadfk');

console.log(bitcoin);

