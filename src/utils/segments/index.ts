import { decode as decodeMsh } from './msh';

export default function decodeFactory(decoder: string){
    if(decoder && decoder.toLowerCase() === 'msh'){
        return decodeMsh
    }

    throw new Error('Decoder not implemented')
}