// @flow

type GqlErrorLocation = {
  line: number,
  column: number
};

type GqlError = {
  message: string,
  locations?: Array<GqlErrorLocation>
};

type GqlResponse<Data> = {
  data?: Data,
  errors?: Array<GqlError>
};

export type {GqlError, GqlResponse};
