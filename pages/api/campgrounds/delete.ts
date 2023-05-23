import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.query;

        // TODO: 데이터베이스에서 해당 id의 캠프그라운드 조회

        // TODO: 캠프그라운드 삭제 로직 수행

        res.status(200).json({ message: 'Campground deleted successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
