const BigMl = require('../index');

const bigMl = new BigMl();

Object.assign(process.env, {
    BIGML_USERNAME: 'test',
    BIGML_API_KEY: 'test_key'
});

before(function() {
    this.bigMl = bigMl;
});
