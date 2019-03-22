import { verifyToken } from '../Helper/auth';

export function requireAuth(req, res, next) {
    console.log(req.body);
    const token = req.get('x-admin-token');
    
    if(!token) {
        return res.status(400).send({
            status: 400,
            message:"Invalid token"
        })
    }else {
        try { // jwt.verify might throw error
            const decoded = verifyToken(token);
            req.user = {
                id: decoded.id,
                email: decoded.email
            };
            next();
        }catch( error ) {
            return res.status(400).send({
                status: 400,
                message: "Access denied"
            })
        }
    }
}