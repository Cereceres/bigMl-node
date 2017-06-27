const request = require('request');
const baseUrl = 'https://bigml.io/';
const params = {
  baseUrl,
  headers: {
    'content-type': 'application/json'
  },
  qsParseOptions: {
    sep: ';'
  }
};

module.exports = class {
  constructor(userName, apiKey) {
      console.log('BIGML_USERNAME',  process.env.BIGML_USERNAME)
    const {BIGML_USERNAME=userName, BIGML_API_KEY=apiKey} = process.env;
    params.qs = {
      username: BIGML_USERNAME,
      api_key: BIGML_API_KEY
    };
  }
  api(uri='', method='GET', json = {}, headers={}, qs={}) {
    Object.assign(params, {headers, json, method, uri});
    Object.assign(params.qs, qs);
    console.log('params ', params);
    return new Promise(getResponse(params));
  }
};

const getResponse = params => (resolve, reject) => {
  request(params, (err, response) => {
    if (err) {
      return reject(err);
    }
    resolve(response.body);
  });
};
