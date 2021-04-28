import Delimiters from './delimiters'
export default interface Header {
  fields: Array<any>;
  delimiters: Delimiters;
  name: string;
}
