import authHelper from '../helpers/authHelper';
import checkin from '../models/checkin';
import checkinViewModel from '../viewModels/checkin';
import mongoose from 'mongoose'

export default (router) => {

  router.post('/checkinCreate', authHelper.jwtCheck, (req, res) => {

    const userId = req.user.sub;

    checkin.create({
      _id: mongoose.Types.ObjectId(),
      date: new Date(),
      plusCode: req.body.code,
      userId,
    }, (err, checkin) => {
      if (err){
        res.status(500).send();
      }
      res.json(checkinViewModel(checkin));
    });
    
  })

}