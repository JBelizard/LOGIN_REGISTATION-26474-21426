
import { ProductModel } from '../models/user.model.js';
import { createToken } from '../utils/jwt.js';

export const product = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await UserModel.findOne({ where: { username } });

  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  const user = await UserModel.create({ username, password });

  return res.json(user);
};




