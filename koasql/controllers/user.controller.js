const Utils = require('../services/utility.service');
const JwtService = require('../services/jwt.service');    

module.exports = {
    async signup(ctx) {

        try {
            let {email, password} = ctx.request.body;
            if (!email) {
                ctx.throw(400, 'Please provide an email');
            }
            if (!password) {
                ctx.throw(400, 'Please provide a password');
            }

            const encPass = await Utils.hashPassword(password);

            let result = await ctx.db.User.create({
                email,
                password: encPass
            });    

            ctx.body = 'Signup successfull';
        } catch (err) {
            ctx.throw(500, err);
        }        
    },

    async login(ctx) {
        try {

            let {email, password} = ctx.request.body;
            
            if (!email) {
                ctx.throw(400, 'Please provide an email');
            }
            
            if (!password) {
                ctx.throw(400, 'Please provide a password');
            }
            
            let user = await ctx.db.User.findOne({
                where: {email}
            });
            
            if (!user) {
                ctx.throw(500, 'Unable to find user');
            }

            const matched = await Utils.comparePasswords(password, user.password);

            if (matched) {
                const token = JwtService.issue({
                    payload: {
                        user: user.id
                    }
                }, '1 day');

                ctx.body = {token};
            }
            else {
                ctx.throw(500, 'Invalid password');
            }

        } catch (err) {
            ctx.throw(500, err);
        }
    }

}