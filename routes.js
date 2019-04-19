const Router = require('koa-router');
const router = new Router();

router.get('/hello', async (ctx, next) => {
    await next();
    ctx.body = 'Hello World!';
    ctx.response.status = 200;
});

/**
 * This will redirect to user entered field
 * Very vulnerable API, never do somehting like this
 * No idea why I did this ¯\_(ツ)_/¯
 */
router.get('/redirect/:url', async (ctx, next) => {
    await next();
    const url = ctx.params.url;
    ctx.redirect(`http://www.${url}.com`);
});

router.get('/*', async (ctx, next) => {
    await next();
    ctx.body = 'Not Found!';
    ctx.response.status = 404;
});

module.exports = router;