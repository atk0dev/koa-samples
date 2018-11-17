module.exports = {
    
    async create(ctx) {
        try {
            ctx.body = await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address,
            }); 
        }
        catch(err) {
            ctx.throw(500, err);
        }                
    },

    async find(ctx) {
        try {
            ctx.body = await ctx.db.Company.findAll({});
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async findOne(ctx) {
        try {
            const company = await ctx.db.Company.findOne({
                where: {id: +ctx.params.id}
            });    
            if (!company) {
                ctx.throw(404, 'Company id is invalid')
            }
            ctx.body = company;
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    
    async destroy(ctx) {
        try {
            const result = await ctx.db.Company.destroy({
                where: {id: +ctx.params.id}
            });
            result === 0 ? ctx.throw(500, 'Invalid id') : ctx.body = `Company ${ctx.params.id} deleted`;
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async update(ctx) {
        try {
            const result = await ctx.db.Company.update({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address
            }, {
                where: {id: +ctx.params.id}
            });
            result === 0 ? ctx.throw(500, 'Invalid id') : ctx.body = `Company ${ctx.params.id} updated`;
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}
