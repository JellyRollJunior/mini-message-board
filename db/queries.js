const pool = require('./pool.js');

const getMessages = async () => {
    const query = 'SELECT * FROM messages';
    const { rows } = await pool.query(query);
    return rows;
};

module.exports = { getMessages };
