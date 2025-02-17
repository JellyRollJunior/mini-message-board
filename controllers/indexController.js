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

const getNewMessage = async (request, response) => {
    response.render('form');
};

const postNewMessage = async (request, response) => {
    const username = request.body.messageUser;
    const text = request.body.messageText;
    await db.insertMessage(username, text);
    response.redirect('/');
};

module.exports = { getMessages, getMessageById, getNewMessage, postNewMessage };
