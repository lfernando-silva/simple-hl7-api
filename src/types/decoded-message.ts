export default interface DecodedMessage {
    fieldSeparator: string,
    encodingChars: string,
    sendingApplication: string,
    sendingFacility: string,
    receivingApplication: string,
    receivingFacility: string,
    dateTimeMessage: string,
    secutiry: string,
    messageType: string
}