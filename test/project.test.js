const assert = require('assert');

const nock = require('nock');
const nockProject = require('./fixtures/project.fixture');
const BigML = require('../index');

nockProject(process.env.BIGML_USERNAME, process.env.BIGML_API_KEY);
const bigML = new BigML();
describe('project andpoint', () => {
    it('should create a project', function *() {
        const res = yield bigML.createProject({ name: 'test' });
        assert(bigML._project)
        assert.deepEqual(res.status, { code: 5, message: 'The project has been created' });
    });

    it('should  get the project', function *() {
        const res = yield bigML.getProject();
        assert.deepEqual(res.status, { code: 5, message: 'The project has been created' });
    });

    it('should  get all the projects', function *() {
        const res = yield bigML.getAllProjects();
        assert(Array.isArray(res));
        assert(res.length === 1);
    });

    it('should  update the  project', function *() {
        yield bigML.createProject({ name: 'test' });
        const res = yield bigML.updateProject({ name: 'test 2' });
        assert.deepEqual(res.status, { code: 5, message: 'The project has been created' });
        assert.deepEqual(res.name, 'test 2');
    });
});
