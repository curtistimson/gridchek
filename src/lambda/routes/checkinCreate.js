import authHelper from '../helpers/authHelper';
import checkin from '../models/checkin';
import mongoose from 'mongoose'

export default (router) => {

  router.post('/checkinCreate', authHelper.jwtCheck, (req, res) => {

    const userid = req.user.sub;

    console.log('req.bo', req.body);
    console.log('req.body.code', req.body.code);

    checkin.create({
      _id: mongoose.Types.ObjectId(),
      date: new Date(),
      plusCode: req.body.code,
      userId: userid,
    }, (err, checkin) => {
      if (err){
        res.status(500).send();
      }
      res.json(checkin);
    });
    
  })

}