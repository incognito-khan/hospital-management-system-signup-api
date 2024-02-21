const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;

class AdminService {
  async findUserByUsername(username) {
    return await User.findOne({ username });
  }

  async generateToken(user) {
    return jwt.sign({ username: user.username, role: user.role }, 'cadakdamamndaerqeid90dkdekiuee8er7efnanfj', { expiresIn: '10m' });
  }

  async createUser(userDetails) {
    const hashedPassword = await bcrypt.hash(userDetails.password, saltRounds);
    userDetails.password = hashedPassword;

    const user = new User(userDetails);
    await user.save();
    return user;
  }
}

module.exports = new AdminService();