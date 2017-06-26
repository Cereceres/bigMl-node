const Core = require('./lib/core')


module.exports = class extends Core {
    constructor(userName, apiKey) {
        super(userName, apiKey)
    }
    createProject(data={}){
        const path = '/project'
        return this.api(path, data, 'POST')
            .then(response => {
                this._project = this.reponse.resource
                return reponse
            })
    }

    createProject(){
        const path = this._project
        return this.api(path, {}, 'GET')
            .then(response => {
                this._project = this.reponse.resource
                return reponse
            })
    }
}