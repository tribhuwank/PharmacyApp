const {User} = require('../models');

module.exports = {

    async register(req, res) {
     
        try {
            console.log(User);
            const user = await User.create(req.body);
            res.send(user.toJson());
        } catch(err) {
            console.log(err)
            res.status(400).send({
                error: 'This email account is already in use'
            });
        }
    }

    
}