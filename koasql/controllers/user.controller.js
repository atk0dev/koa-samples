const Utils = require('../services/utility.service');
const JwtService = require('../services/jwt.service');    

module.exports = {

    /**
     * 
     * @api {post} /signup
     * @apiGroup Users
     * @apiName signupUser
     * @apiParam {String} [email] User must provide email
     * @apiParam {String} [password] User must provide password
     * @apiParamExample {String} Request Params:
     * {
     *  "email": "test@email.com",
     *  "password": "password123"
     * }
     * @apiSuccess {String} Msg Signup successfull
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200OK
     * {
     *  "msg": "Signup successfull"
     * } 
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/signup
     * @apiDescription User can create new account
     */
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

    /**
     * 
     * @api {post} /login
     * @apiGroup Users
     * @apiName loginUser
     * @apiParam {String} [email] User must provide email
     * @apiParam {String} [password] User must provide valid password
     * @apiParamExample {String} Request Params:
     * {
     *  "email": "test@email.com",
     *  "password": "password123"
     * }
     * @apiSuccess {Object} Token JWT to access protecred routes
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200OK
     * {
     *  "token": "Token"
     * } 
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/login
     * @apiDescription Authenticate User with email and password
     */
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