const Pet = require('../db/models/Pet');

var fn_index = async (ctx, next) => {
    ctx.state = {
        title: 'koa2 title'
    };
    await ctx.render('index', {});
};

var get_login = async (ctx, next) => {
ctx.state = {
    title: 'koa2 title'
};
await ctx.render('login', {});
};

var post_login = async (ctx, next) => {
    var erpusername = ctx.request.body.inputuser || '',
        erppassword = ctx.request.body.inputPassword || '';

    console.log(`signin with name: ${erpusername}, password: ${erppassword}.`);

    if (erpusername === 'zas' && erppassword === 'zas') {
        var now = Date.now();
        (async () => {
            var dog = await Pet.create({
                ownerId: 'd-' + now,
                name: 'Odie',
                gender: false,
                birth: '2008-08-08',
                createdAt: now,
                updatedAt: now,
                version: 0
            });
            console.log('created: ' + JSON.stringify(dog));
        })();
        await ctx.render('main', {});
        //ctx.response.body = `<h1>Welcome, ${erpusername}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'GET /login': get_login,
    'POST /login': post_login
};
