const Koa = require('koa');
const Router = require('koa-router');
const _ = require('lodash');
var bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

const router = new Router();

const PORT = 4000;

const posts = [
    {'id' : 1, 'name': 'J1' },
    {'id' : 2, 'name': 'J2' }
];

router.get('/', (ctx) => {
    ctx.body = 'Hello KOA!';
});

router.get('/posts', ctx => {
    ctx.body = posts;
});

router.post('/posts', ctx => {
    let {id, name} = ctx.request.body;

    if(!name) {
        ctx.throw(400, 'name is required');
    }

    posts.push({id, name});
    ctx.body = posts;
});

router.get('/posts/:id', ctx => {
    ctx.body = posts.find(post => post.id === +ctx.params.id);
});

router.delete('/posts/:id', ctx => {
    ctx.body = _.remove(posts, p => p.id === +ctx.params.id);
});

router.put('/posts/:id', ctx => {
    let {id, name} = ctx.request.body;
    const index = posts.findIndex(p => p.id === +ctx.params.id);
    
    if (id) {
        posts[index].id = id;
    }

    if (name) {
        posts[index].name = name;
    }

    ctx.body = posts;
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
