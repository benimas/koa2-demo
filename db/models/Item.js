const db = require('../db');

module.exports = db.defineModel('item', {
    id: db.ID,
    code: db.STRING(100),
    encode: db.STRING(100),
    name: db.STRING(100),
    stock: db.STRING(100),
    waitstock: db.STRING(100),
    status: db.STRING(100),
});