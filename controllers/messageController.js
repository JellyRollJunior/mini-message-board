const db = require('../db.js');

const getMessageByIndex = (request, response) => {
    const { messageIndex } = request.params;
    const message = db.messages[Number(messageIndex)];
    response.render('../views/message.ejs', { message });
};

module.exports = { getMessageByIndex };
