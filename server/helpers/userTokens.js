import { sign, verify } from 'jsonwebtoken';

const tokens = {
    encode(payload) {
        const token = sign(payload, 'secretKey')
        return token 
    },
    decode(token) {
        const response = verify(token, 'secretKey')
        return response
    }
}

export default tokens
