//jshint esversion: 6
const sha256 = require('sha256'); // SHA256 hashing function.

// Blockchain Constructor Function

// function Blockchain() {
//     this.chain = []; // All the blocks that we create and mine will be stored in this array as a chain.
//     this.newTransactions = []; // Hold all new transactions that are created.
// }

class Blockchain {

    constructor() {
        this.chain = []; // Each single block is added to the chain after the proof of work has verified the transactions.
        this.pendingTransactions = []; // pending transactions.

        this.createNewBlock(100, '0', '0'); // generating the Genesis Block.
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
// Returns the block at the end of the chain once its been verified that it's a new transaction.
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
// An hashing the data which is essentially hashing a block. Which then becomes a fixed string.
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
};


// Proof Of Work Method
// Repeatedly hash block until it finds correct hash => '01010101010101010101010'
// Uses current block data for hash, but also the previousBlockHash.
// Cont.. changes nonce value until it finds the correct hash, returns to us the nonce value that creates the correct hash.
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    while(hash.substring(0, 4) !== '0000'){
        nonce++; // increment the count.
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        // console.log(hash);
    }

    return nonce; // Returns nonce val that gives us a valid hash.
}


module.exports = Blockchain; // gives access