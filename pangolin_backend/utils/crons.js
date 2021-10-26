'use strict';

const cron = require('node-cron');
const Collections = require('../api/createWallet/wallet.model');
const { Token } = require('../config/contract');

/*  CRON job to update in progress withdrawls */
// cron.schedule('*/5 * * * *', async () => {

//     /****************  Sync MintedTokens ****************** */
//     // syncMintTokens()
// });

// async function syncMintTokens () {
//     let hashes = [];
//     let event = await Token.getPastEvents('Mint', { fromBlock: 0, toBlock: 'latest' });
//     let txSaved = await Collections.find({ transactionHash: { $exists: true } }).select('transactionHash')
//     txSaved.forEach(element => {
//         hashes.push(element['transactionHash']);
//     });

//     for (let mint of event) {
//         if (!hashes.includes(mint['transactionHash'].toLowerCase()))
//             await Collections.updateOne({ no: mint['returnValues']['tokenId'] }, { $set: { status: "minted", mintDate: Date.now(), transactionHash: mint['transactionHash'], owner: mint['returnValues']['to'] } })
//     }
// }