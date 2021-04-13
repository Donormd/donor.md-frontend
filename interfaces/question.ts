export interface IQuestionList {
  _id: string;
  title: string;
  paragraph: string;
  control: {
    variant: string;
    options?: string[];
    placeholder?: string;
  };
}

export interface IQuestion {
  _id: string;
  title: string;
  list: IQuestionList[];
}

export interface IQuestionnaireStory {
  idUser: string;
  date: Date;
  list: {
    _id: string;
    value: string[];
  };
}
