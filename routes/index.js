var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'SSN Autho Verification',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});


router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

router.get('/telegram-page', requiresAuth(), function (req, res, next) {
  res.render('telegram.ejs', {
    title: 'Telegram Page',
    telegramPost: "Need to built CRUD system to store telegram post"
  });
});

router.post('/telegram', (req, res) => {
  const { body } = req;
  console.log(body)
});

router.post('/tweeted', (req, res) => {
  const { body } = req;
  console.log(body.tweet);
});

module.exports = router;
