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

module.exports = { getMessages, getMessageById };
