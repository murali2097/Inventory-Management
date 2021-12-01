import axios from 'axios';

class Api {
  static headers(headerProps) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access_token'),
      ...headerProps,
    };
  }

  static get(route) {
    return this.request(route, null, 'GET');
  }

  static post(route, params, headerParams) {
    return this.request(route, params, headerParams, 'POST');
  }

  static request(route, params, headerParams, fromMethos) {
    const url = `${route}`;
    const options = { method: fromMethos, data: params };
    options.headers = Api.headers(headerParams);

    return axios(url, options).catch((error) => {
      // based on auth error code.
      // 401  undefined access
      // 403 unauth - redirect to login page
      alert('Error', error);
      window.history.push({ urlPath: url }, '', url);
      window.location.reload();
    });
  }
}
