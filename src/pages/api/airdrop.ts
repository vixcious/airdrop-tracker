import mongoose from 'mongoose';

const AirdropSchema = new mongoose.Schema({
  name: String,
  deadline: Date,
  description: String,
  link: String,
  reminderUsers: [String], // user Telegram ID
});

export const Airdrop = mongoose.models.Airdrop || mongoose.model('Airdrop', AirdropSchema);
