

import { ReqMessage, DecodedMessage } from '../types';

export default function decodeMessage(reqMessage: ReqMessage){
    // const values: string[] = reqMessage.header.fields.map((f: any) => f.value[0][0].value[0]);

    // const decoded = {
    //     fieldSeparator: reqMessage.header.delimiter
    // } as DecodedMessage;

    console.log(reqMessage)

}