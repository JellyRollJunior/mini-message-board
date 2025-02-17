const db = require('../db/queries.js');

const getMessages = async (request, response) => {
    const messages = await db.getMessages();
    response.render('index', { messages });
};

module.exports = { getMessages };
