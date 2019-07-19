
const pick = require('object.pick');
const passport = require('passport');

const twitterHelper = require('./twitter-helper');
const personalityHelper = require('./personality-insights');
const profileFromTweets = personalityHelper.profileFromTweets;
const profileFromText = personalityHelper.profileFromText;

module.exports = (app) => {
  // personality profile from text
  app.post('/api/profile/text', (req, res, next) =>
    profileFromText(req.body)
      .then(res.json.bind(res))
      .catch(next)
  );

  // personality profile from tweets
  app.post('/api/profile/twitter', (req, res, next) => {
    if (!req.body.userId) {
      return next({ code: 400, error: 'Missing required parameters: userId' });
    }

    const user = {
      credentials : req.user ? req.user.credentials : null,
      userId: req.body.userId,
    };

    return twitterHelper.getTweets(user)
      .then(profileFromTweets(req.body))
      .then(res.json.bind(res))
      .catch(next);
  });

  // twitter oauth
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    failureRedirect: '/#error',
    successRedirect: '/?source=myself'
  }));

  // home page
  app.get('/', (req, res) =>
    res.render('index', {
      twitterUser: req.query.source ==='myself' && req.user ? req.user.profile : {},
      showTwitterButton: !!process.env.TWITTER_CONSUMER_KEY,
    })
  );

  // sunburst
  app.post('/sunburst', (req, res) =>
    res.render('sunburst', {
      sunburst: pick(req.body, ['profile', 'image'])
    })
  );

  // terms of use
  app.get('/terms-of-use', (req, res) => res.render('terms-of-use'));
};
