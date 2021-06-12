import { IOptions } from '../../../core/interfaces/IIterableStruct';

export interface IProps {
  buttons: IOptions[];
  handleClick: (_id: string) => void;
}
