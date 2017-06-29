# bigMl-node
[client to bigMl API](https://bigml.com/api/) 

## Install

```bash
npm install --save bigml-node
```

## Use

```js

const bigML = new BigML();
const res = yield bigML.createProject({name: 'test'})

```
### BigML Class(userName=process.env.BIGML_USERNAME, apiKey= process.env.BIGML_API_KEY) 
### createProject(data = {}) -> Promise

### getProject(qs) -> Promise
### setProject(project) -> Instance

### getAllProjects() -> Promise

### updateProject(data)  -> Promise

### createSourceFromUrl(url, options = {})  -> Promise

### createSource(_data, options = {}) -> Promise

### setSource(source) -> Instance

### getSource(qs) -> Promise

### updateSource(data) -> Promise

### deleteSource(data) -> Promise

### getAllSources()-> Promise

### createDataset(options)-> Promise

### getDataset(qs)-> Promise


### updateDataset(data) -> Promise

### deleteDataset()-> Promise

### setDataset(dataset)-> Istance

### api(path = '/project', method = 'GET', jsonData = {}, headers = {}, qs = {}) -> Promise


The endspoints not suppoted can be used with api method.