// src/models/User.js
import pool from "../../config";

class User {
  async getAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  async getUserById(id) {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }

  async createUser(name, email) {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email],
    );
    return result.rows[0];
  }

  async updateUser(id, name, email) {
    const result = await pool.query(
      "UPDATE users SET name = $2, email = $3 WHERE id = $1 RETURNING *",
      [id, name, email],
    );
    return result.rows[0];
  }

  async deleteUser(id) {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id],
    );
    return result.rows[0];
  }
}

export default User;
