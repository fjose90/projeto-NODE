// src/controllers/UserController.js
import User from "../models/User";

class UserController {
  async getAllUsers(req, res) {
    try {
      const user = new User();
      const users = await user.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getUserById(req, res) {
    try {
      const user = new User();
      const userId = req.params.id;
      const foundUser = await user.getUserById(userId);

      if (!foundUser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(foundUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const user = new User();
      const createdUser = await user.createUser(name, email);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const { name, email } = req.body;
      const user = new User();
      const updatedUser = await user.updateUser(userId, name, email);

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const user = new User();
      const deletedUser = await user.deleteUser(userId);

      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(deletedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default UserController;
