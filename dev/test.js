//jshint esversion: 6
const Blockchain = require('./blockchain'); // aquiring the blockchain js file.

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, 'dkfjaldkfjldkfj', 'dkfjadlfkjadfk');

bitcoin.createNewTransaction(13, 'COLBURN123456', 'SEMSA1234567');

bitcoin.createNewBlock(2390, 'dkfjadkfjaldfjf', 'dkfjadlfkjadfk'); // mine block

bitcoin.createNewTransaction(50, 'COLBURN123456', 'SEMSA1234567');
bitcoin.createNewTransaction(300, 'COLBURN123456', 'SEMSA1234567');
bitcoin.createNewTransaction(2000, 'COLBURN123456', 'SEMSA1234567');

bitcoin.createNewBlock(2400, 'dkfjadkfjaldfjf', 'dkfjadlfkjadfk'); // mine block

console.log(bitcoin.chain[2]);

