import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const {id} = req.query;

        // 요청 데이터에서 필요한 정보 추출
        const {
            name, description, // 필드들 } = req.body;

            // TODO: 유효성 검사 등 필요한 로직 수행

            // TODO: 데이터베이스에서 해당 id의 캠프그라운드 조회

            // TODO: 캠프그라운드 업데이트 로직 수행

            res.status
        (200).json({message: 'Campground updated successfully'});
    } else
        {
            res.status(405).json({message: 'Method Not Allowed'});
        }
    }
}
