type DateResult = {
  unix: number;
  utc: string;
};

type ErrorResult = {
  error: string;
};

type ApiResult = DateResult | ErrorResult;
