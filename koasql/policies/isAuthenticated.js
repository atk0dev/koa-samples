const JwtService = require('../services/jwt.service');

module.exports = async (ctx, next) => {
    let token = '';
    if (ctx.request.headers && ctx.request.headers.authorization) {
        token = ctx.request.headers.authorization;
    }
    else {
        ctx.throw(401, 'Auth required');
    }

    const decodedToken = JwtService.verify(token);

    const user = await ctx.db.User.findOne({
        where: {
            id: decodedToken.payload.user
        }
    });

    if (user) {
        ctx.state.user = user.id;
        await next();
    }
    else {
        ctx.throw(401, 'Umauthorized')
    }

};