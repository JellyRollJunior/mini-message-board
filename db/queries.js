const pool = require('./pool.js');

const getMessages = async () => {
    const query = 'SELECT * FROM messages';
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
};

const getMessageById = async (id) => {
    const query = 'SELECT * FROM messages WHERE id = ($1)';
    const { rows }  = await pool.query(query, [id]);
    console.log(rows);
    return rows[0];
}

const insertMessage = async (username, text) => {
    const query = 'INSERT INTO messages (username, text) VALUES ($1, $2)';
    await pool.query(query, [username, text]);
}

module.exports = { getMessages, getMessageById, insertMessage };
