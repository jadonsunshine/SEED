import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { generateWallet, generateNewAccount } = require('@stacks/wallet-sdk');
// We need TransactionVersion for the newer library to know which network address to generate
const { getAddressFromPrivateKey, TransactionVersion } = require('@stacks/transactions');

const mnemonic = process.argv[2];

if (!mnemonic) {
    console.error("❌ Error: Please provide your 12 or 24 word phrase in quotes.");
    console.log("Usage: node get-key.js \"word1 word2 ... word24\"");
    process.exit(1);
}

async function getKey() {
  console.log("🔐 Generating keys from mnemonic...");
  
  let wallet = await generateWallet({
    secretKey: mnemonic,
    password: '',
  });

  console.log("\n--- Account Explorer ---");

  for (let i = 0; i < 3; i++) {
    const account = wallet.accounts[i];
    
    // FIX: Use TransactionVersion.Mainnet instead of 'mainnet'
    const mainnetAddress = getAddressFromPrivateKey(
        account.stxPrivateKey, 
        TransactionVersion.Mainnet 
    );

    // FIX: Use TransactionVersion.Testnet instead of 'testnet'
    const testnetAddress = getAddressFromPrivateKey(
        account.stxPrivateKey, 
        TransactionVersion.Testnet 
    );

    console.log(`ACCOUNT INDEX ${i}`);
    console.log(`  Private Key:     ${account.stxPrivateKey}`);
    console.log(`  Mainnet Address: ${mainnetAddress}`);
    console.log(`  Testnet Address: ${testnetAddress}`);
    console.log('-----------------------------------');

    // Generate the next account for the next loop iteration
    wallet = await generateNewAccount(wallet, '');
  }
}

getKey();