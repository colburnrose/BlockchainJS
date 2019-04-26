//jshint esversion: 6
// Blockchain Constructor Function

// function Blockchain() {
//     this.chain = []; // All the blocks that we create and mine will be stored in this array as a chain.
//     this.newTransactions = []; // Hold all new transactions that are created.
// }

class Blockchain {

    constructor() {
        this.chain = [];
        this.newTransactions = [];
    }

}

// Create New Block Method. 
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1, // block number in our chain.
        timestamp: Date.now(),
        transactions: this.newTransactions, // new transactions that are waiting to be put into a new block.
        nonce: nonce, // comes from a proof of work. (creates the new block)
        hash: hash, // data from the new block, passes new transactions into a hashing function.
        previousBlockHash: previousBlockHash, // 
    };
    this.newTransactions = []; // clears out transactions.
    this.chain.push(newBlock); // pushes the newly created block into the chain.

    return newBlock;

};

module.exports = Blockchain; // gives access