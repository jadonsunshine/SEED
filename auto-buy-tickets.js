require('dotenv').config();
const { makeContractCall, broadcastTransaction, AnchorMode } = require('@stacks/transactions');
const { StacksTestnet, StacksMainnet } = require('@stacks/network');

// Configuration
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const NETWORK = process.env.NETWORK === 'mainnet' ? new StacksMainnet() : new StacksTestnet();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CONTRACT_NAME = process.env.CONTRACT_NAME;

// Ticket counter (1-10, then loops)
let ticketCount = 1;

async function buyTickets(count) {
  console.log(`\n🎟️  Buying ${count} ticket(s)...`);
  
  try {
    // Buy tickets one by one (since contract only buys 1 at a time)
    for (let i = 0; i < count; i++) {
      const txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: CONTRACT_NAME,
        functionName: 'buy-ticket',
        functionArgs: [],
        senderKey: PRIVATE_KEY,
        network: NETWORK,
        anchorMode: AnchorMode.Any,
      };

      const transaction = await makeContractCall(txOptions);
      const broadcastResponse = await broadcastTransaction(transaction, NETWORK);
      
      console.log(`✅ Ticket ${i + 1}/${count} purchased!`);
      console.log(`   TX ID: ${broadcastResponse.txid}`);
      
      // Wait 5 seconds between transactions to avoid nonce issues
      if (i < count - 1) {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    console.log(`\n✨ Successfully bought ${count} ticket(s)!`);
    
  } catch (error) {
    console.error('❌ Error buying tickets:', error.message);
  }
}

async function runBot() {
  console.log(`\n🤖 Auto Ticket Buyer Started`);
  console.log(`📊 Network: ${process.env.NETWORK}`);
  console.log(`📍 Contract: ${CONTRACT_ADDRESS}.${CONTRACT_NAME}`);
  console.log(`⏰ Running every 20 minutes`);
  console.log(`🎯 Buying ${ticketCount} ticket(s) this round\n`);
  
  // Buy tickets
  await buyTickets(ticketCount);
  
  // Increment counter (1-10, then reset)
  ticketCount++;
  if (ticketCount > 10) {
    ticketCount = 1;
    console.log('\n🔄 Resetting counter to 1');
  }
  
  console.log(`\n⏳ Next purchase in 20 minutes (buying ${ticketCount} ticket(s))`);
}

// Run immediately on start
runBot();

// Then run every 20 minutes (20 * 60 * 1000 milliseconds)
setInterval(runBot, 20 * 60 * 1000);
