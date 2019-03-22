import { verifyToken } from '../Helper/auth';

export function adminAuth(req, res, next) {
    console.log(req.body);
    const token = req.get('x-admin-token');
    
    if(!token) {
        return res.status(400).send({
            status: 400,
            message:"Access denied"
        })
    }else {
        try { // jwt.verify might throw error
            const decoded = verifyToken(token);
            req.user = {
                id: decoded.id,
                role: decoded.role
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