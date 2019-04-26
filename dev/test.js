//jshint esversion: 6
const Blockchain = require('./blockchain'); // aquiring the blockchain js file.

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, 'dkfjaldkfjldkfj', 'dkfjadlfkjadfk');

bitcoin.createNewTransaction(13, 'COLBURN123456', 'SEMSA1234567');

bitcoin.createNewBlock(2390, 'dkfjadkfjaldfjf', 'dkfjadlfkjadfk');

console.log(bitcoin);

