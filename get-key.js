const { generateWallet, generateNewAccount } = require('@stacks/wallet-sdk');
// REMOVE TransactionVersion from the require
const { getAddressFromPrivateKey } = require('@stacks/transactions');

const mnemonic = process.argv[2];

async function getKey() {
  let wallet = await generateWallet({
    secretKey: mnemonic,
    password: '',
  });

  console.log("--- Account Explorer ---");

  for (let i = 0; i < 3; i++) {
    const account = wallet.accounts[i];
    
    // FIX: Use string 'mainnet' instead of TransactionVersion.Mainnet
    const mainnetAddress = getAddressFromPrivateKey(
        account.stxPrivateKey, 
        'mainnet' 
    );

    // FIX: Use string 'testnet' instead of TransactionVersion.Testnet
    const testnetAddress = getAddressFromPrivateKey(
        account.stxPrivateKey, 
        'testnet' 
    );

    console.log(`ACCOUNT INDEX ${i}`);
    console.log(`  Private Key:     ${account.stxPrivateKey.substring(0, 10)}...`);
    console.log(`  Mainnet Address: ${mainnetAddress}`); // Starts with SP
    console.log(`  Testnet Address: ${testnetAddress}`); // Starts with ST
    console.log('-----------------------------------');

    wallet = await generateNewAccount(wallet, '');
  }
}

getKey();