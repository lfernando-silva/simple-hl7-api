import ReqMessage from './req-message';

export default interface Request {
    msg: ReqMessage,
    raw: string,
    sender: string,
    facility: string,
    type: string,
    event: string,
}