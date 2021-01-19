export declare type KeyType = number | string;
export declare type ButtonsProps = {
  key: KeyType;
  text: string;
};

export declare type OnClickProps = (key: KeyType) => void;

export declare type Props = {
  buttons: Array<ButtonsProps>;
  handleClick: OnClickProps;
};
