const Core = require('./lib/core');


module.exports = class extends Core {
    constructor(userName, apiKey) {
        super(userName, apiKey);
    }
    createProject(data = {}) {
        const path = '/project';
        return this.api(path, 'POST', data)
          .then((response) => {
              this._project = response;
              return response;
          });
    }

    getProject(qs) {
        const path = this._project.resource;

        if (!this._project) return this.getAllProjects();

        return this.api(path, 'GET', {}, {}, qs);
    }
    setProject(project) {
        this._project = project;
        return this;
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

        const path = this._project.resource;
        return this.api(path, 'PUT', data)
            .then((response) => {
                this._project = response;
                return response;
            });
    }

    createSourceFromUrl(url, options = {}) {
        const data = { remote: url };
        Object.assign(data, options);
        data.project = data.project || this._project;
        const path = '/source';
        return this.api(path, 'POST', data)
            .then((response) => {
                this._source = response;
                return response;
            });
    }

    createSource(_data, options = {}) {
        const data = { data: _data.toString() };
        Object.assign(data, options);
        data.project = data.project || this._project;
        const path = '/source';
        return this.api(path, 'POST', data)
            .then((response) => {
                this._source = response;
                return response;
            });
    }

    setSource(source) {
        this.source = source;
        return this;
    }

    getSource(qs) {
        const path = this._source.resource;

        if (!this._source) return this.getAllSources(qs);

        return this.api(path, 'GET', {}, {}, qs);
    }

    updateSource(data) {
        if(!this._source) return Promise.resolve();

        const path = this._source.resource;
        return this.api(path, 'PUT', data)
            .then((response) => {
                this._source = response;
                return response;
            });
    }

    deleteSource(data) {
        if(!this._source) return Promise.resolve();

        const path = this._source.resource;
        return this.api(path, 'DELETE', data)
            .then((response) => {
                this._source = response;
                return response;
            });
    }

    getAllSources() {
        const path = this._nextProjectsPage || '/source';
        const allSources = [];
        const getAll = () => this.api(path, 'GET')
              .then((sources) => {
                  this._nextSourcesPage = sources.meta.next;
                  allSources.push(sources.objects);
                  if(sources.meta.next) return getAll();
                  return allSources;
              });
        return getAll();
    }

    createDataset(options) {
        const path = '/dataset';
        const data = Object.assign({}, options, { source: this._source.resource });
        return this.api(path, 'POST', data)
            .then((response) => {
                this._dataset = response;
                return response;
            });
    }

    getDataset(qs) {
        const path = this._dataset.resource;

        if(!path) return this.getAllDataSets(qs);

        return this.api(path, 'GET', {}, {}, qs);
    }


    updateDataset(data) {
        const path = this._dataset.resource;

        if(!path) return Promise.resolve();

        return this.api(path, 'PUT', data)
            .then((response) => {
                this._dataset = response;
                return response;
            });
    }

    deleteDataset() {
        const path = this._dataset.resource;

        if(!path) return Promise.resolve();

        return this.api(path, 'DELETE');
    }
};
