# Project Context: OpenSeason (STX Raffle)

**Project Description:**
OpenSeason is a decentralized raffle application built on the Stacks (Bitcoin L2) blockchain. Users connect their Stacks wallet (e.g., Xverse, Leather) to purchase tickets using STX. The application pools these funds into a "Pot." A winner is selected periodically (based on rounds), receiving the pot minus a 5% platform fee.

**Goal:**
Migrate the application from **Stacks Testnet** to **Stacks Mainnet**.

---

## 1. Technical Architecture

* **Blockchain:** Stacks (Layer 2 on Bitcoin).
* **Smart Contract Language:** Clarity (`.clar`).
* **Frontend Framework:** Next.js (App Router) with TypeScript.
* **UI Library:** Chakra UI + Emotion.
* **Wallet Integration:** `@stacks/connect-react` (Hiro Systems).
* **Data Fetching:** Custom hook `useRaffleData` polling the Stacks Node API and CoinGecko for STX price.

---

## 2. Current Smart Contract Logic (`stx-raffle.clar`)

* **Function:** `(buy-ticket)`
* **Arguments:** None (0 arguments).
* **Logic:** Buys exactly 1 ticket per transaction.
* **Price:** Hardcoded constant `u100000` (0.1 STX).
* **Fees:** 5% retained by the contract owner.


* **Randomness:** Currently uses `(mod stacks-block-height total-tickets)` to determine the winner.
* *Note for Migration:* This is insecure for high-value Mainnet apps (miner manipulation risk) but functional for a v1 launch.



---

## 3. Frontend Implementation Details

### **Authentication (`lib/auth.ts` & `ConnectWallet.tsx`)**

* Uses `UserSession` from `@stacks/auth` (NOT `@stacks/connect`).
* Wrapped in `<Connect>` provider from `@stacks/connect-react` in `app/page.tsx`.
* Persists session in `localStorage`.

### **Transaction Handling (`ActionCard.tsx`)**

* Uses the `doContractCall` hook.
* **Network:** Currently hardcoded to `STACKS_TESTNET`.
* **Contract Address:** Currently hardcoded to Testnet address: `ST3GAYKCWBD2PTNR77WGYWCPPR102C5E0C9V1H9ZX`.
* **Function Call:** Calls `buy-ticket` with `functionArgs: []` (Empty array).

### **Data Reading (`useRaffleData.ts`)**

* Fetches Pot Size directly from the contract via `fetchCallReadOnlyFunction`.
* Fetches STX/USD price via CoinGecko API.
* **Parsing:** Handles `cvToJSON` parsing carefully to avoid `NaN` errors on big integers.

