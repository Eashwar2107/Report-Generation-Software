// routes/api.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const TestScoreController = require('../controllers/TestScoreController');

router.post('/users', UserController.createUser);
router.get('/users/:rollNumber', UserController.getUser);
router.post('/testscores', TestScoreController.createTestScore);
router.get('/testscores/:rollNumber', TestScoreController.getTestScores);

module.exports = router;
