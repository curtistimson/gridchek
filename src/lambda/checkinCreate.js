import mongoose from 'mongoose'
import db from './db'
import checkin from './models/checkin';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {

    await checkin.create({
      _id: mongoose.Types.ObjectId(),
      date: new Date(),
      plusCode: 'test',
      userId: '45678',
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ "success": true })
    }
  } catch (err) {
    console.log('checkin.create', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}

