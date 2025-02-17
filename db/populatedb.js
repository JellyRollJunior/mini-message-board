#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR (255),
  username VARCHAR (255),
  send_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (text, username) 
VALUES
  ('haaaaa? HAAAA?', 'Usagi'),
  ('ya ya YAAAA', 'Chiikawa'),
  ('naichatta', 'Hachiware');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();
