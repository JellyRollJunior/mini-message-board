const db = require('../db/queries.js');

const getMessages = async (request, response) => {
    const messages = await db.getMessages();
    response.render('index', { messages });
};

const getMessageById = async (request, response) => {
    const { messageId } = request.params;
    const message = await db.getMessageById(messageId);
    response.render('message', { message });
};

module.exports = { getMessages, getMessageById };
