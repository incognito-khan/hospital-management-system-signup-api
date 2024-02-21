const AdminService = require('../service/adminSignupService');
const responseService = require('../responceHandling/adminResponse');


const signUpController = async (req, res) => {
  const { username, password, email, phoneNumber } = req.body;

  const existingUser = await AdminService.findUserByUsername(username);
  if (existingUser) {
    return responseService.sendError(res, 'User already exists');
  }

  const token = await AdminService.generateToken({ username });

  const newUser = await AdminService.createUser({ username, password, email, token, phoneNumber });
  responseService.sendCreated(res, 'User created successfully', newUser);
};


module.exports = { signUpController };