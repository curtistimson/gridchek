import mongoose from 'mongoose'

const dbUrl = process.env.DB_URL,
      dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false
      }

mongoose.connect(dbUrl, dbOptions)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
export default db