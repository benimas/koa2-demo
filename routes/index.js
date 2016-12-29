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
