import * as URL from './URLS';

export const loginUser = (params) => Api.post(API.loginUser, params);
export const createUser = (params) => Api.post(API.createUser, params);

// create a const file for all the URLS and access them as URL.createUser , URL.
