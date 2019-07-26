import authHelper from '../helpers/authHelper';
import checkin from '../models/checkin';
import checkinViewModel from '../viewModels/checkin';

export default (router) => {

  router.get('/user/checkins', authHelper.jwtCheck, (req, res) => {

    const userId = req.user.sub;

    checkin.find({
      userId,
    })
    .sort({ date: 'desc' })
    .exec((err, checkins) => {
      if (err){
        res.status(500).send();
      }
      res.json({
        checkins: checkins.map(checkin => checkinViewModel(checkin)),
        count: checkins.length,
      })
    });
    
  })

}