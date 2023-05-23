import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // GET 요청 처리
        res.status(200).json({ message: 'GET request received' });
    } else if (req.method === 'PUT') {
        // PUT 요청 처리
        res.status(200).json({ message: 'PUT request received' });
    } else if (req.method === 'POST') {
        // POST 요청 처리
        res.status(200).json({ message: 'POST request received' });
    } else {
        // 지원하지 않는 요청 메소드 처리
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
