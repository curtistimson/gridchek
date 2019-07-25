import authHelper from '../helpers/authHelper';
import checkin from '../models/checkin';
import mongoose from 'mongoose'

export default (router) => {

  router.post('/checkinCreate', authHelper.jwtCheck, (req, res) => {

    checkin.create({
      _id: mongoose.Types.ObjectId(),
      date: new Date(),
      plusCode: 'test',
      userId: '45678',
    }, (err, checkin) => {
      if (err){
        res.status(500).send();
      }
      res.json(checkin);
    });
    
  })

}