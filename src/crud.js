// src/crud.js
import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";

dotenv.config({ path: ".env.dev" });

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});
console.log(pool);
class CRUD {
  async create(item) {
    const { name, description } = item;
    const result = await pool.query(
      "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
      [name, description],
    );
    return result.rows[0];
  }

  async read() {
    const result = await pool.query("SELECT * FROM items");
    return result.rows;
  }

  async update(id, newItem) {
    const { name, description } = newItem;
    const result = await pool.query(
      "UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [name, description, id],
    );
    return result.rows.length > 0;
  }

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM items WHERE id = $1 RETURNING *",
      [id],
    );
    return result.rows.length > 0;
  }
}

export default CRUD;
