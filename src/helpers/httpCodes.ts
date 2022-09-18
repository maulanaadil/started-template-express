type IHttpCodes = {
  Ok: number;
  Created: number;
  BadRequest: number;
  Unauthorized: number;
  Forbidden: number;
  NotFound: number;
  UnprocessableEntity: number;
  InternalServerError: number;
};

const httpCodes: IHttpCodes = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  UnprocessableEntity: 422,
  InternalServerError: 500,
};

export default httpCodes;
