const User = require('../db/models/User');


var get_reg = async (ctx, next) => {
    ctx.state = {
        title: 'koa2 title'
    };
    await ctx.render('reg', {});
};

var post_reg = async (ctx, next) => {
    var username = ctx.request.body.username || '',
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '',
        repassword = ctx.request.body.repassword || '';

    console.log(`signup with name: ${username}, password: ${password}.`);

    var now = Date.now();
    if (username != null) {

        (async () => {
            var newuser = await User.create({
                id: 'd-' + now,
                name: username,
                passwd:password,
                gender: false,
                email: email,
                createdAt: now,
                updatedAt: now,
                version: 0
            });
            console.log('created: ' + JSON.stringify(newuser));
        })();
        ctx.response.body = `<h1>恭喜，创建成功!</h1>
        <p><a href="/reg">返回继续</a></p>`;
        //ctx.render('main', { Item: itemdata });

    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /reg': get_reg,
    'POST /reg': post_reg
};
