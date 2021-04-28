

import { Request } from '../types';

import decodeFactory from '../utils/segments';

export default function decodeMessage(req: Request){
    try {
        const decoder = decodeFactory(req.msg.header.name);
        const decodedMessage = decoder(req);
        return decodedMessage;
    } catch (err){
        throw err;
    }
}