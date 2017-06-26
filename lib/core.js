const baseUrl = 'https://bigml.io/'
const params = {
    baseUrl,
    headers: {
        'content-type': 'application/json'
    },
    qsParseOptions:{
        sep: ';'
    }
}

module.exports = class  {
    constructor(userName, apiKey) {
        const {BIGML_USERNAME= userName, BIGML_API_KEY= apiKey} = process.env
        params.qs = {
            username: BIGML_USERNAME,
            api_key: BIGML_API_KEY
        }
    }

    api(path, method='GET', data = {}, headers={}, query={}){
    Object.assign(params.headers, headers)
    Object.assign(params.qs, query)
    params.method = method
    params.json = data
    return new Promise((resolve, reject) =>{
        reques(params, (err, response) => {
            if (err) return reject(err)
            resolve(response.body)
        })
    })
    }
}