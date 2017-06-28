const nock = require('nock');


module.exports = (username, apiKey) => {
    nock('https://bigml.io:443', { encodedQueryParams: true })
        .post('/project', { name: 'test' })
        .query(true)
        .reply(201, {
            category: 0,
            code: 201,
            configuration: null,
            configuration_status: false,
            created: '2017-06-26T22:38:53.102819',
            description: '',
            dev: null,
            name: 'test',
            private: true,
            resource: 'project/59518cfd7e0a8d5065020459',
            stats: { anomalies: { count: 0 },
                anomalyscores: { count: 0 },
                associations: { count: 0 },
                associationsets: { count: 0 },
                batchanomalyscores: { count: 0 },
                batchcentroids: { count: 0 },
                batchpredictions: { count: 0 },
                batchtopicdistributions: { count: 0 },
                centroids: { count: 0 },
                clusters: { count: 0 },
                configurations: { count: 0 },
                correlations: { count: 0 },
                datasets: { count: 0 },
                ensembles: { count: 0 },
                evaluations: { count: 0 },
                executions: { count: 0 },
                libraries: { count: 0 },
                logisticregressions:
          { count: 0 },
                models: { count: 0 },
                predictions: { count: 0 },
                scripts: { count: 0 },
                sources: { count: 0 },
                statisticaltests:
          { count: 0 },
                topicdistributions: { count: 0 },
                topicmodels: { count: 0 } },
            status: {
                code: 5,
                message: 'The project has been created',
            },
            tags: [],
            updated: '2017-06-26T22:38:53.102864',
        }, [ ]);

    nock('https://bigml.io:443', { encodedQueryParams: true })
        .get('/project/59518cfd7e0a8d5065020459', {})
        .query(true)
        .reply(200, { category: 0, code: 200, configuration: null, configuration_status: false, created: '2017-06-26T22:38:53.102000', description: '', dev: null, name: 'test', private: true, resource: 'project/59518cfd7e0a8d5065020459', stats: { anomalies: { count: 0 }, anomalyscores: { count: 0 }, associations: { count: 0 }, associationsets: { count: 0 }, batchanomalyscores: { count: 0 }, batchcentroids: { count: 0 }, batchpredictions: { count: 0 }, batchtopicdistributions: { count: 0 }, centroids: { count: 0 }, clusters: { count: 0 }, configurations: { count: 0 }, correlations: { count: 0 }, datasets: { count: 0 }, ensembles: { count: 0 }, evaluations: { count: 0 }, executions: { count: 0 }, libraries: { count: 0 }, logisticregressions: { count: 0 }, models: { count: 0 }, predictions: { count: 0 }, scripts: { count: 0 }, sources: { count: 0 }, statisticaltests: { count: 0 }, topicdistributions: { count: 0 }, topicmodels: { count: 0 } }, status: { code: 5, message: 'The project has been created' }, tags: [], updated: '2017-06-26T22:38:53.102000' }, [ ]);
    const objects = [
        {
            category:0,
            code:200,
            configuration:null,
            configuration_status:false,
            created:'2017-06-26T22:38:53.102000',
            description:'',
            dev:null,
            name:'test',
            private:true,
            resource:'project/59518cfd7e0a8d5065020459',
            stats:{ anomalies:{ count:0 },
                anomalyscores:{ count:0 },
                associations:{ count:0 },
                associationsets:{ count:0 },
                batchanomalyscores:{ count:0 },
                batchcentroids:{ count:0 },
                batchpredictions:{ count:0 },
                batchtopicdistributions:{ count:0 },
                centroids:{ count:0 },
                clusters:{ count:0 },
                configurations:{ count:0 },
                correlations:{ count:0 },
                datasets:{ count:0 },
                ensembles:{ count:0 },
                evaluations:{ count:0 },
                executions:{ count:0 },
                libraries:{ count:0 },
                logisticregressions:{ count:0 },
                models:{ count:0 },
                predictions:{ count:0 },
                scripts:{ count:0 },
                sources:{ count:0 },
                statisticaltests:{ count:0 },
                topicdistributions:{ count:0 },
                topicmodels:{ count:0 } },
            status:{ code:5, message:'The project has been created' },
            tags:[],
            updated:'2017-06-26T22:38:53.102000'
        } ];

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .get('/project', {})
        .query(true)
        .reply(200, { meta:{ limit:20, next:null, offset:0, previous:null, total_count:1 }, objects: objects }, [ ]);

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .put('/project/5952c9dac135860b22014028', { name:'test 2' })
        .query(true)
        .reply(202, { category:0, code:202, configuration:null, configuration_status:false, created:'2017-06-27T21:10:50.646000', description:'', dev:null, name:'test 2', private:true, resource:'project/5952c9dac135860b22014028', stats:{ anomalies:{ count:0 }, anomalyscores:{ count:0 }, associations:{ count:0 }, associationsets:{ count:0 }, batchanomalyscores:{ count:0 }, batchcentroids:{ count:0 }, batchpredictions:{ count:0 }, batchtopicdistributions:{ count:0 }, centroids:{ count:0 }, clusters:{ count:0 }, configurations:{ count:0 }, correlations:{ count:0 }, datasets:{ count:0 }, ensembles:{ count:0 }, evaluations:{ count:0 }, executions:{ count:0 }, libraries:{ count:0 }, logisticregressions:{ count:0 }, models:{ count:0 }, predictions:{ count:0 }, scripts:{ count:0 }, sources:{ count:0 }, statisticaltests:{ count:0 }, topicdistributions:{ count:0 }, topicmodels:{ count:0 } }, status:{ code:5, message:'The project has been created' }, tags:[], updated:'2017-06-27T21:10:50.957945' }, [ ]);

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .post('/project', { name:'test' })
        .query(true)
        .reply(201, { category:0, code:201, configuration:null, configuration_status:false, created:'2017-06-28T15:56:54.136273', description:'', dev:null, name:'test', private:true, resource:'project/5953d1c6c135860b160057a0', stats:{ anomalies:{ count:0 }, anomalyscores:{ count:0 }, associations:{ count:0 }, associationsets:{ count:0 }, batchanomalyscores:{ count:0 }, batchcentroids:{ count:0 }, batchpredictions:{ count:0 }, batchtopicdistributions:{ count:0 }, centroids:{ count:0 }, clusters:{ count:0 }, configurations:{ count:0 }, correlations:{ count:0 }, datasets:{ count:0 }, ensembles:{ count:0 }, evaluations:{ count:0 }, executions:{ count:0 }, libraries:{ count:0 }, logisticregressions:{ count:0 }, models:{ count:0 }, predictions:{ count:0 }, scripts:{ count:0 }, sources:{ count:0 }, statisticaltests:{ count:0 }, topicdistributions:{ count:0 }, topicmodels:{ count:0 } }, status:{ code:5, message:'The project has been created' }, tags:[], updated:'2017-06-28T15:56:54.136300' }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 15:56:54 GMT',
            'Location',
            'http://bigml.io/andromeda/project/5953d1c6c135860b160057a0',
            'Server',
            'nginx',
            'X-Content-Type-Options',
            'nosniff',
            'X-Frame-Options',
            'SAMEORIGIN',
            'X-UA-Compatible',
            'IE=Edge',
            'X-XSS-Protection',
            '1; mode=block',
            'Content-Length',
            '1121',
            'Connection',
            'Close' ]);

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .put('/project/5953d1c6c135860b160057a0', { name:'test 2' })
        .query(true)
        .reply(202, { category:0, code:202, configuration:null, configuration_status:false, created:'2017-06-28T15:56:54.136000', description:'', dev:null, name:'test 2', private:true, resource:'project/5953d1c6c135860b160057a0', stats:{ anomalies:{ count:0 }, anomalyscores:{ count:0 }, associations:{ count:0 }, associationsets:{ count:0 }, batchanomalyscores:{ count:0 }, batchcentroids:{ count:0 }, batchpredictions:{ count:0 }, batchtopicdistributions:{ count:0 }, centroids:{ count:0 }, clusters:{ count:0 }, configurations:{ count:0 }, correlations:{ count:0 }, datasets:{ count:0 }, ensembles:{ count:0 }, evaluations:{ count:0 }, executions:{ count:0 }, libraries:{ count:0 }, logisticregressions:{ count:0 }, models:{ count:0 }, predictions:{ count:0 }, scripts:{ count:0 }, sources:{ count:0 }, statisticaltests:{ count:0 }, topicdistributions:{ count:0 }, topicmodels:{ count:0 } }, status:{ code:5, message:'The project has been created' }, tags:[], updated:'2017-06-28T15:56:54.547716' }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 15:56:54 GMT',
            'Server',
            'nginx',
            'X-Content-Type-Options',
            'nosniff',
            'X-Frame-Options',
            'SAMEORIGIN',
            'X-UA-Compatible',
            'IE=Edge',
            'X-XSS-Protection',
            '1; mode=block',
            'Content-Length',
            '1123',
            'Connection',
            'Close' ]);
};
