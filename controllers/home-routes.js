const router = require('express').Router();
const { Gallery, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// First page users see
router.get('/', async (req, res) => {
  res.json({ todo: 'return a view' })
  // HINT: this is the first page a user will see
});

// GET one of something
// Use the custom middleware before allowing the user to access the gallery
// HINT: the withAuth middleware will require the user to be signed in to view this page
router.get('/something/:id', withAuth, async (req, res) => {
  try {
    const someData = await Someting.findByPk(req.params.id, {});

    res.render('something', { someData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
