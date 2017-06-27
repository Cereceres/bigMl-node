const nock = require('nock');


module.exports = (username, apiKey) => {
    nock('https://bigml.io:443', { encodedQueryParams: true })
        .post('/project', { name: 'test' })
        .query({ username: username, api_key: apiKey })
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
        .query({ username: username, api_key: apiKey })
        .reply(200, { category: 0, code: 200, configuration: null, configuration_status: false, created: '2017-06-26T22:38:53.102000', description: '', dev: null, name: 'test', private: true, resource: 'project/59518cfd7e0a8d5065020459', stats: { anomalies: { count: 0 }, anomalyscores: { count: 0 }, associations: { count: 0 }, associationsets: { count: 0 }, batchanomalyscores: { count: 0 }, batchcentroids: { count: 0 }, batchpredictions: { count: 0 }, batchtopicdistributions: { count: 0 }, centroids: { count: 0 }, clusters: { count: 0 }, configurations: { count: 0 }, correlations: { count: 0 }, datasets: { count: 0 }, ensembles: { count: 0 }, evaluations: { count: 0 }, executions: { count: 0 }, libraries: { count: 0 }, logisticregressions: { count: 0 }, models: { count: 0 }, predictions: { count: 0 }, scripts: { count: 0 }, sources: { count: 0 }, statisticaltests: { count: 0 }, topicdistributions: { count: 0 }, topicmodels: { count: 0 } }, status: { code: 5, message: 'The project has been created' }, tags: [], updated: '2017-06-26T22:38:53.102000' }, [ ]);
};
