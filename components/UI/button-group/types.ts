import { IOptions } from '../../../redux/common';

export interface IProps {
  buttons: IOptions[];
  handleClick: (_id: string) => void;
}
