const request = require('request');
const baseUrl = 'https://bigml.io/';
const params = {
    baseUrl: baseUrl,
    headers: {
        'content-type': 'application/json'
    },
    qsParseOptions: {
        sep: ';'
    }
};

module.exports = class {
    constructor(userName, apiKey) {
        const { BIGML_USERNAME = userName, BIGML_API_KEY = apiKey } = process.env;
        this.params = params;
        this.params.qs = {
            username: BIGML_USERNAME,
            api_key: BIGML_API_KEY
        };
    }
    api(uri = '', method = 'GET', json = {}, headers = {}, qs = {}) {
        Object.assign(this.params, { headers: headers, json: json, method: method, uri: uri });
        Object.assign(this.params.qs, qs);
        return new Promise(getResponse(this.params));
    }
};

const getResponse = (params) => (resolve, reject) => {
    request(params, (err, response) => {
        if (err) return reject(err);

        resolve(response.body);
    });
};
