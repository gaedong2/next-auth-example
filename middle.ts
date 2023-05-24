
import cors from 'cors';

const corsMiddleware = cors({
    origin: '*', // 모든 오리진 허용
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메소드
});

export default function applyCors(req, res, handler) {
    return new Promise((resolve, reject) => {
        corsMiddleware(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(handler(req, res));
        });
    });
}
