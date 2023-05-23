import { getSession } from "next-auth/react";
import Campground from "../../../models/campground";
import db from "../../../lib/db";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req});
    if (!session) {
        return res.status(401).json({error: "Signin required"});
    }
    try {
        await db.connect();
        const order = await Campground.findById(req.query.id);
        await db.disconnect();
        res.status(200).send(order);
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
};

