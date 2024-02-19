const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ rollNumber: req.params.rollNumber });
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
};
