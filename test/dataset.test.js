const fs = require('fs');
const path = require('path');
const assert = require('assert');

const nock = require('nock');

const fixtures = require('./fixtures/dataset.fixture');


const status = {
    code:1,
    message:'The dataset is being processed and will be created soon'
};

describe('dataset endpoint', () => {
    before(() => {
        fixtures();
       // nock.recorder.rec();
    });

    it('should create a dataset', function *() {
        this.bigMl._source = { resource: 'source/59553434c135860b1600619d' };
        const res = yield this.bigMl.createDataset();
        assert(this.bigMl._dataset);
        assert.deepEqual(res.status, status);
    });

    it('should get the data set', function *() {
        this.bigMl._dataset = { resource:'dataset/595535df7e0a8d5062019eb0' };
        const res = yield this.bigMl.getDataset({ test:'test' });
        assert(this.bigMl._dataset);
        const status = {
            bytes: 4608,
            code: 5,
            elapsed: 869,
            field_errors: {},
            message: 'The dataset has been created',
            progress: 1,
            row_format_errors: {
                total: 0
            },
            serialized_rows: 150,
            task: 'Done'
        };
        assert.deepEqual(res.status, status);
    });

    it('should update  a dataset', function *() {
        this.bigMl._dataset = { resource:'dataset/595535df7e0a8d5062019eb0' };
        const res = yield this.bigMl.updateDataset({ name:'test 2' });
        assert(res.name === 'test 2');
    });

    it('should delete a dataset', function *() {
        this.bigMl._dataset = { resource:'dataset/595535df7e0a8d5062019eb0' };
        const res = yield this.bigMl.deleteDataset();
        assert(!res);
    });

    it('should set the dataset property', function *() {
        this.bigMl.setDataset({ test:'testing' });
        assert(this.bigMl._dataset.test === 'testing');
    });
});
