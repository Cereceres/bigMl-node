const Core = require('./lib/core');


module.exports = class extends Core {
  constructor(userName, apiKey) {
    super(userName, apiKey);
  }
  createProject(data={}) {
    const path = '/project';
    return this.api(path, 'POST', data)
      .then(response => {
        this._project = response.resource;
        return response;
      });
  }

  getProject() {
    if(!this._project) {
      return Promise.resolve()
    }
    const path = this._project;
    return this.api(path, 'GET');
  }
};
