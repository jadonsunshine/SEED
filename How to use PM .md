

### 1. Set Up PM2 (Process Manager)

Yes, PM2 is excellent for this. It keeps your script running in the background 24/7, restarts it if it crashes, and lets you close your terminal without stopping the bot.

**Step A: Install PM2**
Since you are on Linux (Ubuntu), you usually need `sudo` for global installations:

```bash
sudo npm install -g pm2

```

**Step B: Start the Bot**
Run this command to start your script with PM2. We'll give it a name (`raffle-bot`) so it's easy to find later.

```bash
pm2 start auto-buy-tickets.js --name raffle-bot

```

**Step C: Check Status & Logs**

* **See if it's running:**
```bash
pm2 list

```


* **Watch the bot working in real-time:**
```bash
pm2 logs raffle-bot

```


*(Press `Ctrl + C` to exit the log view—the bot will keep running in the background).*

**Step D: Stop the Bot (When you are done)**

```bash
pm2 stop raffle-bot

```

*