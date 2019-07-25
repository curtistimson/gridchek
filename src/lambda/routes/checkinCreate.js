import authHelper from '../helpers/authHelper';

export default (router) => {

  router.get('/users', authHelper.jwtCheck, (req, res) => {

    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'jose',
        },
      ],
    })
  })

}