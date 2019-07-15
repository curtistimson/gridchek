import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: Date,
  plusCode: String,
  userId: String,
});
const entry = mongoose.model('checkin', schema);

export default entry;