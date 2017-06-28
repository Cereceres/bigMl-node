const nock = require('nock');
module.exports = () => {
    nock('https://bigml.io:443', { encodedQueryParams:true })
        .post('/source', { remote:'https://static.bigml.com/csv/iris.csv' })
        .query(true)
        .reply(201, { category:0, code:201, configuration:null, configuration_status:false, content_type:'unknown', created:'2017-06-28T21:08:57.959111', credits:0, description:'', disable_datetime:false, field_types:{ categorical:0, datetime:0, items:0, numeric:0, text:0, total:0 }, fields_meta:{ count:0, limit:1000, offset:0, total:0 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'unknown', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59541ae9c135860b0b005539', shared:false, size:0, source_parser:{}, status:{ code:1, message:'The request has been queued and will be processed soon' }, subscription:false, tags:[], term_analysis:{}, type:1, updated:'2017-06-28T21:08:57.959134' }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 21:08:58 GMT',
            'Location',
            'http://bigml.io/andromeda/source/59541ae9c135860b0b005539',
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
            '1133',
            'Connection',
            'Close' ]);


    nock('https://bigml.io:443', { encodedQueryParams:true })
        .post('/source', { data:'sepal length,sepal width,petal length,petal width,species\n5.1,3.5,1.4,0.2,Iris-setosa\n4.9,3.0,1.4,0.2,Iris-setosa\n4.7,3.2,1.3,0.2,Iris-setosa\n4.6,3.1,1.5,0.2,Iris-setosa\n5.0,3.6,1.4,0.2,Iris-setosa\n5.4,3.9,1.7,0.4,Iris-setosa\n4.6,3.4,1.4,0.3,Iris-setosa\n5.0,3.4,1.5,0.2,Iris-setosa\n4.4,2.9,1.4,0.2,Iris-setosa\n4.9,3.1,1.5,0.1,Iris-setosa\n5.4,3.7,1.5,0.2,Iris-setosa\n4.8,3.4,1.6,0.2,Iris-setosa\n4.8,3.0,1.4,0.1,Iris-setosa\n4.3,3.0,1.1,0.1,Iris-setosa\n5.8,4.0,1.2,0.2,Iris-setosa\n5.7,4.4,1.5,0.4,Iris-setosa\n5.4,3.9,1.3,0.4,Iris-setosa\n5.1,3.5,1.4,0.3,Iris-setosa\n5.7,3.8,1.7,0.3,Iris-setosa\n5.1,3.8,1.5,0.3,Iris-setosa\n5.4,3.4,1.7,0.2,Iris-setosa\n5.1,3.7,1.5,0.4,Iris-setosa\n4.6,3.6,1.0,0.2,Iris-setosa\n5.1,3.3,1.7,0.5,Iris-setosa\n4.8,3.4,1.9,0.2,Iris-setosa\n5.0,3.0,1.6,0.2,Iris-setosa\n5.0,3.4,1.6,0.4,Iris-setosa\n5.2,3.5,1.5,0.2,Iris-setosa\n5.2,3.4,1.4,0.2,Iris-setosa\n4.7,3.2,1.6,0.2,Iris-setosa\n4.8,3.1,1.6,0.2,Iris-setosa\n5.4,3.4,1.5,0.4,Iris-setosa\n5.2,4.1,1.5,0.1,Iris-setosa\n5.5,4.2,1.4,0.2,Iris-setosa\n4.9,3.1,1.5,0.2,Iris-setosa\n5.0,3.2,1.2,0.2,Iris-setosa\n5.5,3.5,1.3,0.2,Iris-setosa\n4.9,3.6,1.4,0.1,Iris-setosa\n4.4,3.0,1.3,0.2,Iris-setosa\n5.1,3.4,1.5,0.2,Iris-setosa\n5.0,3.5,1.3,0.3,Iris-setosa\n4.5,2.3,1.3,0.3,Iris-setosa\n4.4,3.2,1.3,0.2,Iris-setosa\n5.0,3.5,1.6,0.6,Iris-setosa\n5.1,3.8,1.9,0.4,Iris-setosa\n4.8,3.0,1.4,0.3,Iris-setosa\n5.1,3.8,1.6,0.2,Iris-setosa\n4.6,3.2,1.4,0.2,Iris-setosa\n5.3,3.7,1.5,0.2,Iris-setosa\n5.0,3.3,1.4,0.2,Iris-setosa\n7.0,3.2,4.7,1.4,Iris-versicolor\n6.4,3.2,4.5,1.5,Iris-versicolor\n6.9,3.1,4.9,1.5,Iris-versicolor\n5.5,2.3,4.0,1.3,Iris-versicolor\n6.5,2.8,4.6,1.5,Iris-versicolor\n5.7,2.8,4.5,1.3,Iris-versicolor\n6.3,3.3,4.7,1.6,Iris-versicolor\n4.9,2.4,3.3,1.0,Iris-versicolor\n6.6,2.9,4.6,1.3,Iris-versicolor\n5.2,2.7,3.9,1.4,Iris-versicolor\n5.0,2.0,3.5,1.0,Iris-versicolor\n5.9,3.0,4.2,1.5,Iris-versicolor\n6.0,2.2,4.0,1.0,Iris-versicolor\n6.1,2.9,4.7,1.4,Iris-versicolor\n5.6,2.9,3.6,1.3,Iris-versicolor\n6.7,3.1,4.4,1.4,Iris-versicolor\n5.6,3.0,4.5,1.5,Iris-versicolor\n5.8,2.7,4.1,1.0,Iris-versicolor\n6.2,2.2,4.5,1.5,Iris-versicolor\n5.6,2.5,3.9,1.1,Iris-versicolor\n5.9,3.2,4.8,1.8,Iris-versicolor\n6.1,2.8,4.0,1.3,Iris-versicolor\n6.3,2.5,4.9,1.5,Iris-versicolor\n6.1,2.8,4.7,1.2,Iris-versicolor\n6.4,2.9,4.3,1.3,Iris-versicolor\n6.6,3.0,4.4,1.4,Iris-versicolor\n6.8,2.8,4.8,1.4,Iris-versicolor\n6.7,3.0,5.0,1.7,Iris-versicolor\n6.0,2.9,4.5,1.5,Iris-versicolor\n5.7,2.6,3.5,1.0,Iris-versicolor\n5.5,2.4,3.8,1.1,Iris-versicolor\n5.5,2.4,3.7,1.0,Iris-versicolor\n5.8,2.7,3.9,1.2,Iris-versicolor\n6.0,2.7,5.1,1.6,Iris-versicolor\n5.4,3.0,4.5,1.5,Iris-versicolor\n6.0,3.4,4.5,1.6,Iris-versicolor\n6.7,3.1,4.7,1.5,Iris-versicolor\n6.3,2.3,4.4,1.3,Iris-versicolor\n5.6,3.0,4.1,1.3,Iris-versicolor\n5.5,2.5,4.0,1.3,Iris-versicolor\n5.5,2.6,4.4,1.2,Iris-versicolor\n6.1,3.0,4.6,1.4,Iris-versicolor\n5.8,2.6,4.0,1.2,Iris-versicolor\n5.0,2.3,3.3,1.0,Iris-versicolor\n5.6,2.7,4.2,1.3,Iris-versicolor\n5.7,3.0,4.2,1.2,Iris-versicolor\n5.7,2.9,4.2,1.3,Iris-versicolor\n6.2,2.9,4.3,1.3,Iris-versicolor\n5.1,2.5,3.0,1.1,Iris-versicolor\n5.7,2.8,4.1,1.3,Iris-versicolor\n6.3,3.3,6.0,2.5,Iris-virginica\n5.8,2.7,5.1,1.9,Iris-virginica\n7.1,3.0,5.9,2.1,Iris-virginica\n6.3,2.9,5.6,1.8,Iris-virginica\n6.5,3.0,5.8,2.2,Iris-virginica\n7.6,3.0,6.6,2.1,Iris-virginica\n4.9,2.5,4.5,1.7,Iris-virginica\n7.3,2.9,6.3,1.8,Iris-virginica\n6.7,2.5,5.8,1.8,Iris-virginica\n7.2,3.6,6.1,2.5,Iris-virginica\n6.5,3.2,5.1,2.0,Iris-virginica\n6.4,2.7,5.3,1.9,Iris-virginica\n6.8,3.0,5.5,2.1,Iris-virginica\n5.7,2.5,5.0,2.0,Iris-virginica\n5.8,2.8,5.1,2.4,Iris-virginica\n6.4,3.2,5.3,2.3,Iris-virginica\n6.5,3.0,5.5,1.8,Iris-virginica\n7.7,3.8,6.7,2.2,Iris-virginica\n7.7,2.6,6.9,2.3,Iris-virginica\n6.0,2.2,5.0,1.5,Iris-virginica\n6.9,3.2,5.7,2.3,Iris-virginica\n5.6,2.8,4.9,2.0,Iris-virginica\n7.7,2.8,6.7,2.0,Iris-virginica\n6.3,2.7,4.9,1.8,Iris-virginica\n6.7,3.3,5.7,2.1,Iris-virginica\n7.2,3.2,6.0,1.8,Iris-virginica\n6.2,2.8,4.8,1.8,Iris-virginica\n6.1,3.0,4.9,1.8,Iris-virginica\n6.4,2.8,5.6,2.1,Iris-virginica\n7.2,3.0,5.8,1.6,Iris-virginica\n7.4,2.8,6.1,1.9,Iris-virginica\n7.9,3.8,6.4,2.0,Iris-virginica\n6.4,2.8,5.6,2.2,Iris-virginica\n6.3,2.8,5.1,1.5,Iris-virginica\n6.1,2.6,5.6,1.4,Iris-virginica\n7.7,3.0,6.1,2.3,Iris-virginica\n6.3,3.4,5.6,2.4,Iris-virginica\n6.4,3.1,5.5,1.8,Iris-virginica\n6.0,3.0,4.8,1.8,Iris-virginica\n6.9,3.1,5.4,2.1,Iris-virginica\n6.7,3.1,5.6,2.4,Iris-virginica\n6.9,3.1,5.1,2.3,Iris-virginica\n5.8,2.7,5.1,1.9,Iris-virginica\n6.8,3.2,5.9,2.3,Iris-virginica\n6.7,3.3,5.7,2.5,Iris-virginica\n6.7,3.0,5.2,2.3,Iris-virginica\n6.3,2.5,5.0,1.9,Iris-virginica\n6.5,3.0,5.2,2.0,Iris-virginica\n6.2,3.4,5.4,2.3,Iris-virginica\n5.9,3.0,5.1,1.8,Iris-virginica\n' })
        .query(true)
        .reply(201, { category:0, code:201, configuration:null, configuration_status:false, content_type:'unknown', created:'2017-06-28T21:08:58.308872', credits:0, description:'', disable_datetime:false, field_types:{ categorical:0, datetime:0, items:0, numeric:0, text:0, total:0 }, fields_meta:{ count:0, limit:1000, offset:0, total:0 }, item_analysis:{}, md5:'unknown', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59541aeac135860b220151dc', shared:false, size:0, source_parser:{}, status:{ code:1, message:'The request has been queued and will be processed soon' }, subscription:false, tags:[], term_analysis:{}, type:2, updated:'2017-06-28T21:08:58.308896' }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 21:08:58 GMT',
            'Location',
            'http://bigml.io/andromeda/source/59541aeac135860b220151dc',
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
            '1028',
            'Connection',
            'Close' ]);


    nock('https://bigml.io:443', { encodedQueryParams:true })
        .get('/source/59541aeac135860b220151dc', {})
        .query((query) => query.full === 'true' && query.test === 'test')
        .reply(200, { category:0, code:200, configuration:null, configuration_status:false, content_type:'unknown', created:'2017-06-28T21:08:58.308000', credits:0, description:'', disable_datetime:false, field_types:{ categorical:0, datetime:0, items:0, numeric:0, text:0, total:5 }, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, item_analysis:{}, md5:'unknown', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59541aeac135860b220151dc', shared:false, size:0, source_parser:{ missing_tokens:[] }, status:{ code:3, elapsed:226, message:'The source is being created', progress:0.923776308885809, task:'Storing decoded data' }, subscription:false, tags:[], term_analysis:{}, type:2, updated:'2017-06-28T21:08:58.593000' }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 21:08:58 GMT',
            'Server',
            'nginx',
            'Vary',
            'Accept-Encoding',
            'X-Content-Type-Options',
            'nosniff',
            'X-Frame-Options',
            'SAMEORIGIN',
            'X-UA-Compatible',
            'IE=Edge',
            'X-XSS-Protection',
            '1; mode=block',
            'Content-Length',
            '1118',
            'Connection',
            'Close' ]);

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .put('/source/59541aeac135860b220151dc', { name:'test 2' })
        .query((query) => query.full === 'true')
        .reply(201, { category:0, code:200, configuration:null, configuration_status:false, content_type:'unknown', created:'2017-06-28T21:08:58.308000', credits:0, description:'', disable_datetime:false, field_types:{ categorical:0, datetime:0, items:0, numeric:0, text:0, total:5 }, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, item_analysis:{}, md5:'unknown', name:'test 2', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59541aeac135860b220151dc', shared:false, size:0, source_parser:{ missing_tokens:[] }, status:{ code:3, elapsed:226, message:'The source is being created', progress:0.923776308885809, task:'Storing decoded data' }, subscription:false, tags:[], term_analysis:{}, type:2, updated:'2017-06-28T21:08:58.593000' }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 21:17:49 GMT',
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
            '134',
            'Connection',
            'Close' ]);


    nock('https://bigml.io:443', { encodedQueryParams:true })
        .get('/source', {})
        .query((query) => query.full === 'true')
        .reply(200, { meta:{ limit:20, next:null, offset:0, previous:null, total_count:18 }, objects:[ { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T21:08:58.308000', credits:0, description:'', disable_datetime:false, field_types:{ categorical:1, datetime:0, items:0, numeric:4, text:0, total:5 }, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59541aeac135860b220151dc', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:280, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T21:08:58.698000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T21:08:57.959000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59541ae9c135860b0b005539', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:328, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T21:08:58.554000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'application/octet-stream', created:'2017-06-28T21:08:51.713000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'data.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'data.csv', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59541ae37e0a8d50660173f8', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:381, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:0, updated:'2017-06-28T21:08:52.346000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'application/octet-stream', created:'2017-06-28T20:58:58.028000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'data.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'data.csv', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59541892c135860b220151cd', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:466, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:0, updated:'2017-06-28T20:58:58.736000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T20:02:37.705000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59540b5dc5285005e500004f', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:342, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T20:02:38.196000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T20:02:37.330000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:200, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59540b5dc5285005e300002f', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:320, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T20:02:39.866000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T20:01:48.228000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59540b2c7e0a8d506b043ca0', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:312, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T20:01:48.710000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T20:01:47.864000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:200, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59540b2b7e0a8d506b043c9c', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:288, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T20:01:49.700000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T20:01:14.760000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:1000, limit:1000, offset:0, query_total:1000, total:4609 }, item_analysis:{}, md5:'5aaa236bc6c00ea0a80d1728d8d0dcfb', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59540b0a7e0a8d506b043c98', shared:false, size:20004, source_parser:{ header:false, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:10216, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T20:01:26.094000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T20:01:14.310000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59540b0ac135860b22014fef', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:418, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T20:01:15.042000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:58:56.977000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:1000, limit:1000, offset:0, query_total:1000, total:4609 }, item_analysis:{}, md5:'5aaa236bc6c00ea0a80d1728d8d0dcfb', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59540a80c5285005e300002b', shared:false, size:20004, source_parser:{ header:false, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:10799, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T19:59:08.821000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:58:56.510000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59540a80c5285005e500004a', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:1018, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T19:58:57.797000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:58:21.158000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:1000, limit:1000, offset:0, query_total:1000, total:4609 }, item_analysis:{}, md5:'5aaa236bc6c00ea0a80d1728d8d0dcfb', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/59540a5dc5285005e8000038', shared:false, size:20004, source_parser:{ header:false, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:10256, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T19:58:33.486000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:58:20.651000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59540a5cc135860b1301005e', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:329, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T19:58:21.309000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:56:02.789000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:1000, limit:1000, offset:0, query_total:1000, total:4609 }, item_analysis:{}, md5:'5aaa236bc6c00ea0a80d1728d8d0dcfb', name:'Unnamed inline source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/595409d27e0a8d5066017386', shared:false, size:20004, source_parser:{ header:false, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:10185, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:2, updated:'2017-06-28T19:56:14.163000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:56:02.338000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/595409d2c135860b1301005a', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:349, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T19:56:03.402000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'text/plain;UTF-8', created:'2017-06-28T19:46:11.130000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'https://static.bigml.com/csv/iris.csv', item_analysis:{}, md5:'d1175c032e1042bec7f974c91e4a65ae', name:'Unnamed remote source', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, remote:'https://static.bigml.com/csv/iris.csv', resource:'source/59540783c135860b210071bf', shared:false, size:4608, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, downloaded_size:4608, elapsed:278, message:'The source has been created', progress:1, task:'Done', total_size:4608 }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:1, updated:'2017-06-28T19:46:11.627000' }, { category:0, charset:'UTF-8', code:200, configuration:null, configuration_status:false, content_type:'application/octet-stream', created:'2017-06-28T19:21:26.112000', credits:0, description:'', disable_datetime:false, fields_meta:{ count:5, limit:1000, offset:0, query_total:5, total:5 }, file_name:'data.csv', item_analysis:{}, md5:'f7d4b36e0cd12d7459e55c3ba96c1410', name:'data.csv', number_of_anomalies:0, number_of_associations:0, number_of_clusters:0, number_of_datasets:0, number_of_ensembles:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_topicmodels:0, private:true, project:null, resource:'source/595401b6c135860b21007182', shared:false, size:337, source_parser:{ header:true, locale:'en_US', missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], quote:'"', separator:',' }, status:{ code:5, elapsed:225, message:'The source has been created', progress:1, task:'Done' }, subscription:false, tags:[], term_analysis:{ enabled:true }, type:0, updated:'2017-06-28T19:21:27.054000' } ] }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 21:08:59 GMT',
            'Server',
            'nginx',
            'Vary',
            'Accept-Encoding',
            'X-Content-Type-Options',
            'nosniff',
            'X-Frame-Options',
            'SAMEORIGIN',
            'X-UA-Compatible',
            'IE=Edge',
            'X-XSS-Protection',
            '1; mode=block',
            'transfer-encoding',
            'chunked',
            'Connection',
            'Close' ]);


    nock('https://bigml.io:443', { encodedQueryParams:true })
        .delete('/source/59541aeac135860b220151dc', {})
        .query((query) => query.full === 'true')
        .reply(201, null, [ 'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Wed, 28 Jun 2017 21:08:59 GMT',
            'ETag',
            '"55930e11-42"',
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
            '66',
            'Connection',
            'Close' ]);
};
