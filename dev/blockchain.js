//jshint esversion: 6
const sha256 = require('sha256'); // SHA256 hashing function.

// Blockchain Constructor Function

// function Blockchain() {
//     this.chain = []; // All the blocks that we create and mine will be stored in this array as a chain.
//     this.newTransactions = []; // Hold all new transactions that are created.
// }

class Blockchain {

    constructor() {
        this.chain = [];
        this.pendingTransactions = []; // pending transactions.
    }

}

// Create New Block Method. 
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1, // block number in our chain.
        timestamp: Date.now(),
        transactions: this.pendingTransactions, // new transactions that are pending to be put into a new block.
        nonce: nonce, // comes from a proof of work. (creates the new block)
        hash: hash, // data from the new block, passes new transactions into a hashing function.
        previousBlockHash: previousBlockHash, // 
    };
    this.pendingTransactions = []; // clears out transactions.
    this.chain.push(newBlock); // pushes the newly created block into the chain.

    return newBlock;

};

// Get Last Block Method.
Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1]; 
};


// Create New Transaction Method.
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
    };
    // push new transaction into the pendingTransactions of tbe block.
    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1; // return the num of this block that the new transation will be added too.
};

// Hash Block Method 
// Takes in a block from the blockchain. 
// All of the data being passed from the param will come from a single block in the chain.
// An hashing the data which is essentially hashing a block. An hashes the block into a fixed length string.
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
};


module.exports = Blockchain; // gives access