const assert = require('assert');

const nockProject = require('./fixtures/project');
const BigML = require('../index');

nockProject(process.env.BIGML_USERNAME, process.env.BIGML_API_KEY);
const bigML = new BigML();

describe('project andpoint', () => {
    it('should create a project', function *() {
        const res = yield bigML.createProject({ name: 'test' });
        assert.deepEqual(res.status, { code: 5, message: 'The project has been created' });
    });

    it('should  get the project', function *() {
        const res = yield bigML.getProject();
        assert.deepEqual(res.status, { code: 5, message: 'The project has been created' });
    });
});
