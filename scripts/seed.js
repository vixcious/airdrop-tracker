const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const AirdropSchema = new mongoose.Schema({
  name: String,
  deadline: Date,
  description: String,
  link: String,
  reminderUsers: [String],
});
const Airdrop = mongoose.model("Airdrop", AirdropSchema);

async function insertDummy() {
  const newAirdrop = new Airdrop({
    name: "Testnet Token Airdrop #1",
    deadline: new Date(Date.now() + 3 * 60 * 1000), // ⏰ 3 menit dari sekarang
    description: "Claim 100 TEST token from Testnet DAO",
    link: "https://testnet.io/airdrop",
    reminderUsers: [process.env.TEST_TELEGRAM_ID], // << Ganti nanti
  });

  await newAirdrop.save();
  console.log("✅ Dummy airdrop inserted!");

  mongoose.disconnect();
}

insertDummy();
