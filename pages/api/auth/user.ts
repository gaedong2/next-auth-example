import Users from "../../../models/user";
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../database/conn";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select("+password");
    if (!user) {
        return res.status(401).json({ error: "Invalid login" });
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid login" });
    }

    const token = jwt.sign({ id: user._id }, 'XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=', { expiresIn: '1h' });
    return res.status(200).json({ user, token });
}
