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

//INSERT INTO `item` VALUES ('09', 'LE0003', '6955052900027', '儿童润肤乳', '1690', '100', '1', 1483942676128, 1483942676128, 0);
