//jshint esversion: 6
const Blockchain = require('./blockchain'); // aquiring the blockchain js file.

// const bitcoin = new Blockchain();
// bitcoin.createNewBlock(2389, 'dkfjaldkfjldkfj', 'dkfjadlfkjadfk');

// bitcoin.createNewTransaction(13, 'COLBURN123456', 'SEMSA1234567');

// bitcoin.createNewBlock(2390, 'dkfjadkfjaldfjf', 'dkfjadlfkjadfk'); // mine block

// bitcoin.createNewTransaction(50, 'COLBURN123456', 'SEMSA1234567');
// bitcoin.createNewTransaction(300, 'COLBURN123456', 'SEMSA1234567');
// bitcoin.createNewTransaction(2000, 'COLBURN123456', 'SEMSA1234567');

// bitcoin.createNewBlock(2400, 'dkfjadkfjaldfjf', 'dkfjadlfkjadfk'); // mine block


// Testing Hash Method
// const blockChain = new Blockchain();

// const previousHashBlock = '51654646465421dfdf516';
// const currentBlockData = [
//     {
//         amount: 100,
//         sender: 'COLBURN1234567',
//         recipient: 'SEMSA12345678',
//     },
//     {
//         amount: 200,
//         sender: 'COLBURN987456',
//         recipient: 'SEMSA987456',
//     },
//     {
//         amount: 300,
//         sender: 'COLBURN123789',
//         recipient: 'SEMSA123789',
//     }
// ];
// const nonce = 75;

// blockChain.hashBlock(previousHashBlock, currentBlockData, nonce);

// console.log(blockChain.hashBlock(previousHashBlock, currentBlockData, nonce));



// Testing Proof Of Work Method
// Testing for the nonce value associated with the previousBlockHash and currentBlockData.
const blockChain = new Blockchain();

const previousHashData = '122345645468dfd';
const currentBlockData = [
    {
        amount: 100,
        sender: 'COLBURN123456',
        recipient: 'SEMSA123456',
    },
    {
        amount: 200,
        sender: 'COLBURN1234567',
        recipient: 'SEMSA1234567',
    },
    {
        amount: 300,
        sender: 'COLBURN1234568',
        recipient: 'SEMSA1234568',
    },
];

blockChain.proofOfWork(previousHashData, currentBlockData);
blockChain.hashBlock(previousHashData, currentBlockData, 56940);
console.log(blockChain.proofOfWork(previousHashData, currentBlockData));
console.log(blockChain.hashBlock(previousHashData, currentBlockData, 56940));



