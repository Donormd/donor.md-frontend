export interface ErrorResponse extends Error {
  response?: {
    data?: {
      status: number;
      message: string;
    };
  };
}

type dbError = {
  location: string;
  msg: string;
  param: string;
};

export interface ErrorResponseArray {
  response?: {
    data?: {
      status: number;
      message: dbError[];
    };
  };
}
