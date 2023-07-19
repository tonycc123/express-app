const express = require('express');

const router = express.Router();

router.get('/profiles/:username', async (req, res, next) => {
  try {
    res.send('get /profiles/:username')
  } catch (err) {
    next(err)
  }
})