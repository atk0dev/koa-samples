module.exports = {

    /**
     * 
     * @api {post} /applications
     * @apiGroup Applications
     * @apiName createApplication
     * @apiParam {String} [firstName] User must provide first name
     * @apiParam {String} [lastName] User must provide last name
     * @apiParam {String} [email] User must provide email
     * @apiParam {Number} [jobId] User must provide Job Id
     * @apiParamExample {String} Request Params:
     * {
     *  "firstName": "John",
     *  "lastName": "Doe",
     *  "email": "email@domain.com",
     *  "jobId": 1
     * }
     * @apiSuccess {Object} Application New application created
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200OK
     * {
     *  "id": 1
     * } 
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/applications
     * @apiDescription Logged in user can apply a job
     * @apiHeader {String} Authorization JWT Token
     * @apiHeaderExample {json} Request Authorization header
     * {
     *  "authorization": "token value"
     * }
     */
    async create(ctx) {
        try {
            const candidate = await ctx.db.Candidate.create({
                firstName: ctx.request.body.firstName,
                lastName: ctx.request.body.lastName,
                email: ctx.request.body.email,
            });

            ctx.body = await ctx.db.Application.create({
                JobId: +ctx.request.body.jobId,
                CandidateId: candidate.id
            });
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}