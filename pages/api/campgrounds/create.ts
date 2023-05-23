import { getSession } from "next-auth/react";
import Campground from "../../../models/campground";
import db from "../../../lib/db";
import {NextApiRequest, NextApiResponse} from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // 요청 데이터에서 필요한 정보 추출
        const {
            name, description, // 필드들 } = req.body;

            // TODO: 유효성 검사 등 필요한 로직 수행

            // TODO: 데이터베이스에 캠프그라운드 생성

            res.status
        (201).json({message: 'Campground created successfully'});
    } else
        {
            res.status(405).json({message: 'Method Not Allowed'});
        }
    }
}
