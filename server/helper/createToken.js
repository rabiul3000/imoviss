import jwt from 'jsonwebtoken';


const createToken = (id) => {
    const token = jwt.sign({
        data: id,
    }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return token;
}


export default createToken;