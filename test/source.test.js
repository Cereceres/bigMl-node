const fs = require('fs');
const path = require('path');
const assert = require('assert');
const nock = require('nock');
const BigMl = require('../index');

const bigMl = new BigMl();
const fixtures = require('./fixtures/source.fixture');
const data = fs.readFileSync(path.resolve(__dirname, './fixtures/data.csv'));
const status = {
    code: 1,
    message: 'The request has been queued and will be processed soon'
};

describe('description', () => {
    before(() => {
        fixtures();
    });

    it('should upload from a url', function *() {
        const url = 'https://static.bigml.com/csv/iris.csv';
        const res = yield bigMl.createSourceFromUrl(url);
        assert.deepEqual(res.status, status);
        assert(bigMl._source);
    });

    it('should upload a string', function *() {
        const res = yield bigMl.createSource(data);
        assert.deepEqual(res.status, status);
        assert(bigMl._source);
    });

    it('should get the source', function *() {
        const res = yield bigMl.getSource({ full: true, test:'test' });
        assert(res);
    });

    it('should update the source', function *() {
        const res = yield bigMl.updateSource({ name: 'test 2' });
        assert.deepEqual(res.name, 'test 2');
    });

    it('should get all the source', function *() {
        const res = yield bigMl.getAllSources();
        assert(Array.isArray(res) && res.length === 1);
    });
    it('should delete the source', function *() {
        const res = yield bigMl.deleteSource();
        assert(!res);
    });
});
