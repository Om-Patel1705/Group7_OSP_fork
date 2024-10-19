
const { Pool } = require("pg");
require("dotenv").config();


const pool = new Pool({
 
    connectionString: process.env.DATABASE_URL,
    ssl: true, 
  });


  const createTablesQuery = `
CREATE TABLE USERS(
  	id SERIAL PRIMARY KEY,
  	username TEXT,
  	email TEXT,
  	password TEXT,
  	pic TEXT
);

`;

pool
  .query(createTablesQuery)
  .then(() => {
    console.log("Tables successfully created or already exist.");
  })
  .catch((err) => {
    console.error("Error creating tables:", err.message);
  });





  module.exports = pool;