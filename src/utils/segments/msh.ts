import { Request } from "../../types";

export function decode(req: Request) {
  const { delimiters, fields } = req.msg.header;

  return {
    fieldSeparator: delimiters.fieldSeperator,
    encodingCharacters: {
      componentSeparator: delimiters.componentSeperator,
      repeatingDelimiter: delimiters.repititionCharacter,
      escapeDelimiter: delimiters.escapeCharacter,
      subComponentDelimiter: delimiters.subcomponentSeperator,
    },
    sendingApplication: req.sender,
    sendingFacility: req.facility,
    receivingApplication: "",
    receivingFacility: "",
    dateTimeMessage: fields[3].value[0][0].value[0],
    messageType: [
      fields[5].value[0][0].value[0],
      fields[5].value[0][1].value[0],
    ],
  };
}
