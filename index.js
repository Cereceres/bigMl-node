const Core = require('./lib/core');


module.exports = class extends Core {
    constructor(userName, apiKey) {
        super(userName, apiKey);
    }
    createProject(data = {}) {
        const path = '/project';
        return this.api(path, 'POST', data)
          .then((response) => {
              this._project = response.resource;
              return response;
          });
    }

    getProject() {
        const path = this._project;

        if (!this._project) return this.getAllProjects();

        return this.api(path, 'GET');
    }

    getAllProjects() {
        const path = this._nextProjectsPage || '/project';
        const allProjects = [];
        const getAll = () => this.api(path, 'GET')
              .then((projects) => {
                  this._nextProjectsPage = projects.meta.next;
                  allProjects.push(projects.objects);
                  if(projects.meta.next) return getAll();
                  return allProjects;
              });
        return getAll();
    }

    updateProject(data) {
        if(!this._project) return Promise.resolve();

        const path = this._project;
        return this.api(path, 'PUT', data);
    }
};
