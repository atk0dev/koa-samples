module.exports = {
    async create(ctx) {
        try {
            if (!ctx.request.body.title) {
                ctx.throw(400, 'Please provide job title');
            }            
            if (!ctx.request.body.companyId) {
                ctx.throw(400, 'Please provide company id')
            }
            ctx.body = await ctx.db.Job.create({
                title: ctx.request.body.title,
                CompanyId: +ctx.request.body.companyId
            });
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async find(ctx) {
        try {
            ctx.body = await ctx.db.Job.findAll({
                include: [{
                    model: ctx.db.Candidate
                }]
            });
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}