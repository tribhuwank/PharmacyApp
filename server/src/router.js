const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    AuthenticationControllerPolicy.register,
    app.post('/register', AuthenticationController.register);

}