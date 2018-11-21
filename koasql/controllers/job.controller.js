module.exports = {

    /**
     * 
     * @api {post} /jobs
     * @apiGroup Jobs
     * @apiName createJob
     * @apiParam {String} [title] User must provide job title
     * @apiParam {Number} [CompanyId] User must provide Compant Id
     * @apiParamExample {String} Request Params:
     * {
     *  "title": "Job Title",
     *  "CompantId": 1
     * }
     * @apiSuccess {Object} Job New job created
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200OK
     * {
     *  "id": 1,
     *  "CompanyId": 1,
     *  "title": "Job Title"
     * } 
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/jobs
     * @apiDescription Logged in user can create new job
     * @apiHeader {String} Authorization JWT Token
     * @apiHeaderExample {json} Request Authorization header
     * {
     *  "authorization": "token value"
     * }
     */
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

    /**
     * 
     * @api {get} /jobs
     * @apiGroup Jobs
     * @apiName getJobs
     * @apiSuccess {Object[]} Job List of jobs with candidates
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/jobs
     * @apiDescription Logged in user can view all jobs
     * @apiHeader {String} Authorization JWT Token
     * @apiHeaderExample {json} Request Authorization header
     * {
     *  "authorization": "token value"
     * }
     */ 
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