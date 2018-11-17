const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');

const router = require('./routes');

const app = new Koa();
const port = 4000;

const db = require('./models');
db.sequelize.sync({force:true})
    .then(() => {
        console.log('models synced');
    })
    .catch(err => {
        console.log(err);
    });

app.context.db = db;

app.use(bodyParser());
app.use(router.routes());

app.listen(port);

console.log(`Server started on port ${port}`);
