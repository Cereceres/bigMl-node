
const nock = require('nock');
module.exports = () => {
    nock('https://bigml.io:443', { encodedQueryParams:true })
        .post('/dataset', { source:'source/59553434c135860b1600619d' })
        .query(true)
        .reply(201, { all_fields:true, category:0, cluster:null, cluster_status:false, code:201, columns:0, configuration:null, configuration_status:false, correlations:{}, created:'2017-06-29T17:16:15.087224', credits:0.00439453125, dataset_origin_status:true, description:'', download:{ code:0, excluded_input_fields:[], header:true, input_fields:[], message:'', preview:[], separator:',' }, excluded_fields:[], field_types:{ categorical:0, datetime:0, effective_fields:0, items:0, numeric:0, preferred:0, text:0, total:0 }, fields_meta:{ count:0, limit:1000, offset:0, total:0 }, input_fields:[], locale:'en-US', missing_numeric_rows:0, missing_tokens:[], name:'testing dataset', new_fields:[], number_of_anomalies:0, number_of_anomalyscores:0, number_of_associations:0, number_of_associationsets:0, number_of_batchanomalyscores:0, number_of_batchcentroids:0, number_of_batchpredictions:0, number_of_batchtopicdistributions:0, number_of_centroids:0, number_of_clusters:0, number_of_correlations:0, number_of_ensembles:0, number_of_evaluations:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_statisticaltests:0, number_of_topicdistributions:0, number_of_topicmodels:0, origin_batch_resource:null, origin_batch_status:false, output_fields:[], price:0, private:true, project:null, ranges:null, refresh_field_types:false, refresh_preferred:false, replacements:null, resource:'dataset/595535df7e0a8d5062019eb0', row_offset:0, row_step:1, rows:0, sample_rates:null, seeds:null, shared:false, size:4608, source:'source/59553434c135860b1600619d', source_status:true, statisticaltest:null, status:{ code:1, message:'The dataset is being processed and will be created soon' }, subscription:false, tags:[], tde_download:{ code:0, excluded_input_fields:[], input_fields:[], message:'', preview:[] }, term_limit:1000, updated:'2017-06-29T17:16:15.087243', user_metadata:{} }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Thu, 29 Jun 2017 17:16:15 GMT',
            'Location',
            'http://bigml.io/andromeda/dataset/595535df7e0a8d5062019eb0',
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
            '2165',
            'Connection',
            'Close' ]);

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .get('/dataset/595535df7e0a8d5062019eb0', {})
        .query((query) => query.test === 'test')
        .reply(200, { all_fields:true, category:0, cluster:null, cluster_status:false, code:200, columns:5, configuration:null, configuration_status:false, correlations:{}, created:'2017-06-29T17:16:15.087000', credits:0.00439453125, dataset_origin_status:true, description:'', download:{ code:0, excluded_input_fields:[], header:true, input_fields:[], message:'', preview:[], separator:',' }, excluded_fields:[], field_types:{ categorical:1, datetime:0, effective_fields:5, items:0, numeric:4, preferred:5, text:0, total:5 }, fields:{ '000000':{ column_number:0, datatype:'double', name:'sepal length', optype:'numeric', order:0, preferred:true, summary:{ bins:[ [ 4.3, 1 ], [ 4.425, 4 ], [ 4.6, 4 ], [ 4.77143, 7 ], [ 4.9625, 16 ], [ 5.1, 9 ], [ 5.2, 4 ], [ 5.3, 1 ], [ 5.4, 6 ], [ 5.5, 7 ], [ 5.6, 6 ], [ 5.7, 8 ], [ 5.8, 7 ], [ 5.9, 3 ], [ 6, 6 ], [ 6.1, 6 ], [ 6.2, 4 ], [ 6.3, 9 ], [ 6.4, 7 ], [ 6.5, 5 ], [ 6.6, 2 ], [ 6.7, 8 ], [ 6.8, 3 ], [ 6.9, 4 ], [ 7, 1 ], [ 7.1, 1 ], [ 7.2, 3 ], [ 7.3, 1 ], [ 7.4, 1 ], [ 7.6, 1 ], [ 7.7, 4 ], [ 7.9, 1 ] ], exact_histogram:{ populations:[ 1, 4, 6, 11, 19, 5, 13, 14, 10, 12, 13, 12, 10, 7, 2, 4, 1, 5, 1 ], start:4.2, width:0.2 }, kurtosis:-0.57357, maximum:7.9, mean:5.84333, median:5.8, minimum:4.3, missing_count:0, population:150, skewness:0.31175, standard_deviation:0.82807, sum:876.5, sum_squares:5223.85, variance:0.68569 } }, '000001':{ column_number:1, datatype:'double', name:'sepal width', optype:'numeric', order:1, preferred:true, summary:{ counts:[ [ 2, 1 ], [ 2.2, 3 ], [ 2.3, 4 ], [ 2.4, 3 ], [ 2.5, 8 ], [ 2.6, 5 ], [ 2.7, 9 ], [ 2.8, 14 ], [ 2.9, 10 ], [ 3, 26 ], [ 3.1, 11 ], [ 3.2, 13 ], [ 3.3, 6 ], [ 3.4, 12 ], [ 3.5, 6 ], [ 3.6, 4 ], [ 3.7, 3 ], [ 3.8, 6 ], [ 3.9, 2 ], [ 4, 1 ], [ 4.1, 1 ], [ 4.2, 1 ], [ 4.4, 1 ] ], exact_histogram:{ populations:[ 1, 7, 11, 14, 24, 37, 19, 18, 7, 8, 2, 1, 1 ], start:2, width:0.2 }, kurtosis:0.18098, maximum:4.4, mean:3.05733, median:3, minimum:2, missing_count:0, population:150, skewness:0.31577, standard_deviation:0.43587, sum:458.6, sum_squares:1430.4, variance:0.18998 } }, '000002':{ column_number:2, datatype:'double', name:'petal length', optype:'numeric', order:2, preferred:true, summary:{ bins:[ [ 1, 1 ], [ 1.16667, 3 ], [ 1.3, 7 ], [ 1.4, 13 ], [ 1.5, 13 ], [ 1.6, 7 ], [ 1.7, 4 ], [ 1.9, 2 ], [ 3, 1 ], [ 3.3, 2 ], [ 3.5, 2 ], [ 3.6, 1 ], [ 3.75, 2 ], [ 3.9, 3 ], [ 4.0375, 8 ], [ 4.23333, 6 ], [ 4.46667, 12 ], [ 4.6, 3 ], [ 4.74444, 9 ], [ 4.94444, 9 ], [ 5.1, 8 ], [ 5.25, 4 ], [ 5.4, 2 ], [ 5.56667, 9 ], [ 5.75, 6 ], [ 5.95, 4 ], [ 6.1, 3 ], [ 6.3, 1 ], [ 6.4, 1 ], [ 6.6, 1 ], [ 6.7, 2 ], [ 6.9, 1 ] ], exact_histogram:{ populations:[ 2, 9, 26, 11, 2, 0, 0, 0, 0, 0, 1, 2, 2, 2, 4, 8, 6, 12, 8, 9, 12, 4, 5, 9, 5, 5, 1, 1, 3, 1 ], start:1, width:0.2 }, kurtosis:-1.39554, maximum:6.9, mean:3.758, median:4.35, minimum:1, missing_count:0, population:150, skewness:-0.27213, standard_deviation:1.7653, sum:563.7, sum_squares:2582.71, variance:3.11628 } }, '000003':{ column_number:3, datatype:'double', name:'petal width', optype:'numeric', order:3, preferred:true, summary:{ counts:[ [ 0.1, 5 ], [ 0.2, 29 ], [ 0.3, 7 ], [ 0.4, 7 ], [ 0.5, 1 ], [ 0.6, 1 ], [ 1, 7 ], [ 1.1, 3 ], [ 1.2, 5 ], [ 1.3, 13 ], [ 1.4, 8 ], [ 1.5, 12 ], [ 1.6, 4 ], [ 1.7, 2 ], [ 1.8, 12 ], [ 1.9, 5 ], [ 2, 6 ], [ 2.1, 6 ], [ 2.2, 3 ], [ 2.3, 8 ], [ 2.4, 3 ], [ 2.5, 3 ] ], exact_histogram:{ populations:[ 5, 36, 8, 1, 0, 10, 18, 20, 6, 17, 12, 11, 6 ], start:0, width:0.2 }, kurtosis:-1.33607, maximum:2.5, mean:1.19933, median:1.3, minimum:0.1, missing_count:0, population:150, skewness:-0.10193, standard_deviation:0.76224, sum:179.9, sum_squares:302.33, variance:0.58101 } }, '000004':{ column_number:4, datatype:'string', name:'species', optype:'categorical', order:4, preferred:true, summary:{ categories:[ [ 'Iris-setosa', 50 ], [ 'Iris-versicolor', 50 ], [ 'Iris-virginica', 50 ] ], missing_count:0 }, term_analysis:{ enabled:true } } }, fields_meta:{ count:5, effective_fields:5, limit:1000, offset:0, query_total:5, total:5 }, input_fields:[ '000000', '000001', '000002', '000003', '000004' ], locale:'en_US', missing_numeric_rows:0, missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], name:'testing dataset', new_fields:[], number_of_anomalies:0, number_of_anomalyscores:0, number_of_associations:0, number_of_associationsets:0, number_of_batchanomalyscores:0, number_of_batchcentroids:0, number_of_batchpredictions:0, number_of_batchtopicdistributions:0, number_of_centroids:0, number_of_clusters:0, number_of_correlations:0, number_of_ensembles:0, number_of_evaluations:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_statisticaltests:0, number_of_topicdistributions:0, number_of_topicmodels:0, objective_field:{ column_number:4, datatype:'string', id:'000004', name:'species', optype:'categorical', order:4, term_analysis:{ enabled:true } }, origin_batch_resource:null, origin_batch_status:false, output_fields:[], price:0, private:true, project:null, ranges:null, refresh_field_types:false, refresh_preferred:false, replacements:null, resource:'dataset/595535df7e0a8d5062019eb0', row_offset:0, row_step:1, rows:150, sample_rates:null, seeds:null, shared:false, size:4608, source:'source/59553434c135860b1600619d', source_status:true, statisticaltest:null, status:{ bytes:4608, code:5, elapsed:869, field_errors:{}, message:'The dataset has been created', progress:1, row_format_errors:{ total:0 }, serialized_rows:150, task:'Done' }, subscription:false, tags:[], tde_download:{ code:0, excluded_input_fields:[], input_fields:[], message:'', preview:[] }, term_limit:1000, updated:'2017-06-29T17:16:18.139000', user_metadata:{} }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Thu, 29 Jun 2017 18:23:05 GMT',
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
            '6165',
            'Connection',
            'Close' ]);

    nock('https://bigml.io:443', { encodedQueryParams:true })
        .put('/dataset/595535df7e0a8d5062019eb0', { name:'test 2' })
        .query(true)
        .reply(202, { all_fields:true, category:0, cluster:null, cluster_status:false, code:202, columns:5, configuration:null, configuration_status:false, correlations:{}, created:'2017-06-29T17:16:15.087000', credits:0.00439453125, dataset_origin_status:true, description:'', download:{ code:0, excluded_input_fields:[], header:true, input_fields:[], message:'', preview:[], separator:',' }, excluded_fields:[], field_types:{ categorical:1, datetime:0, effective_fields:5, items:0, numeric:4, preferred:5, text:0, total:5 }, fields:{ '000000':{ column_number:0, datatype:'double', name:'sepal length', optype:'numeric', order:0, preferred:true, summary:{ bins:[ [ 4.3, 1 ], [ 4.425, 4 ], [ 4.6, 4 ], [ 4.77143, 7 ], [ 4.9625, 16 ], [ 5.1, 9 ], [ 5.2, 4 ], [ 5.3, 1 ], [ 5.4, 6 ], [ 5.5, 7 ], [ 5.6, 6 ], [ 5.7, 8 ], [ 5.8, 7 ], [ 5.9, 3 ], [ 6, 6 ], [ 6.1, 6 ], [ 6.2, 4 ], [ 6.3, 9 ], [ 6.4, 7 ], [ 6.5, 5 ], [ 6.6, 2 ], [ 6.7, 8 ], [ 6.8, 3 ], [ 6.9, 4 ], [ 7, 1 ], [ 7.1, 1 ], [ 7.2, 3 ], [ 7.3, 1 ], [ 7.4, 1 ], [ 7.6, 1 ], [ 7.7, 4 ], [ 7.9, 1 ] ], exact_histogram:{ populations:[ 1, 4, 6, 11, 19, 5, 13, 14, 10, 12, 13, 12, 10, 7, 2, 4, 1, 5, 1 ], start:4.2, width:0.2 }, kurtosis:-0.57357, maximum:7.9, mean:5.84333, median:5.8, minimum:4.3, missing_count:0, population:150, skewness:0.31175, standard_deviation:0.82807, sum:876.5, sum_squares:5223.85, variance:0.68569 } }, '000001':{ column_number:1, datatype:'double', name:'sepal width', optype:'numeric', order:1, preferred:true, summary:{ counts:[ [ 2, 1 ], [ 2.2, 3 ], [ 2.3, 4 ], [ 2.4, 3 ], [ 2.5, 8 ], [ 2.6, 5 ], [ 2.7, 9 ], [ 2.8, 14 ], [ 2.9, 10 ], [ 3, 26 ], [ 3.1, 11 ], [ 3.2, 13 ], [ 3.3, 6 ], [ 3.4, 12 ], [ 3.5, 6 ], [ 3.6, 4 ], [ 3.7, 3 ], [ 3.8, 6 ], [ 3.9, 2 ], [ 4, 1 ], [ 4.1, 1 ], [ 4.2, 1 ], [ 4.4, 1 ] ], exact_histogram:{ populations:[ 1, 7, 11, 14, 24, 37, 19, 18, 7, 8, 2, 1, 1 ], start:2, width:0.2 }, kurtosis:0.18098, maximum:4.4, mean:3.05733, median:3, minimum:2, missing_count:0, population:150, skewness:0.31577, standard_deviation:0.43587, sum:458.6, sum_squares:1430.4, variance:0.18998 } }, '000002':{ column_number:2, datatype:'double', name:'petal length', optype:'numeric', order:2, preferred:true, summary:{ bins:[ [ 1, 1 ], [ 1.16667, 3 ], [ 1.3, 7 ], [ 1.4, 13 ], [ 1.5, 13 ], [ 1.6, 7 ], [ 1.7, 4 ], [ 1.9, 2 ], [ 3, 1 ], [ 3.3, 2 ], [ 3.5, 2 ], [ 3.6, 1 ], [ 3.75, 2 ], [ 3.9, 3 ], [ 4.0375, 8 ], [ 4.23333, 6 ], [ 4.46667, 12 ], [ 4.6, 3 ], [ 4.74444, 9 ], [ 4.94444, 9 ], [ 5.1, 8 ], [ 5.25, 4 ], [ 5.4, 2 ], [ 5.56667, 9 ], [ 5.75, 6 ], [ 5.95, 4 ], [ 6.1, 3 ], [ 6.3, 1 ], [ 6.4, 1 ], [ 6.6, 1 ], [ 6.7, 2 ], [ 6.9, 1 ] ], exact_histogram:{ populations:[ 2, 9, 26, 11, 2, 0, 0, 0, 0, 0, 1, 2, 2, 2, 4, 8, 6, 12, 8, 9, 12, 4, 5, 9, 5, 5, 1, 1, 3, 1 ], start:1, width:0.2 }, kurtosis:-1.39554, maximum:6.9, mean:3.758, median:4.35, minimum:1, missing_count:0, population:150, skewness:-0.27213, standard_deviation:1.7653, sum:563.7, sum_squares:2582.71, variance:3.11628 } }, '000003':{ column_number:3, datatype:'double', name:'petal width', optype:'numeric', order:3, preferred:true, summary:{ counts:[ [ 0.1, 5 ], [ 0.2, 29 ], [ 0.3, 7 ], [ 0.4, 7 ], [ 0.5, 1 ], [ 0.6, 1 ], [ 1, 7 ], [ 1.1, 3 ], [ 1.2, 5 ], [ 1.3, 13 ], [ 1.4, 8 ], [ 1.5, 12 ], [ 1.6, 4 ], [ 1.7, 2 ], [ 1.8, 12 ], [ 1.9, 5 ], [ 2, 6 ], [ 2.1, 6 ], [ 2.2, 3 ], [ 2.3, 8 ], [ 2.4, 3 ], [ 2.5, 3 ] ], exact_histogram:{ populations:[ 5, 36, 8, 1, 0, 10, 18, 20, 6, 17, 12, 11, 6 ], start:0, width:0.2 }, kurtosis:-1.33607, maximum:2.5, mean:1.19933, median:1.3, minimum:0.1, missing_count:0, population:150, skewness:-0.10193, standard_deviation:0.76224, sum:179.9, sum_squares:302.33, variance:0.58101 } }, '000004':{ column_number:4, datatype:'string', name:'species', optype:'categorical', order:4, preferred:true, summary:{ categories:[ [ 'Iris-setosa', 50 ], [ 'Iris-versicolor', 50 ], [ 'Iris-virginica', 50 ] ], missing_count:0 }, term_analysis:{ enabled:true } } }, fields_meta:{ count:5, effective_fields:5, limit:1000, offset:0, query_total:5, total:5 }, input_fields:[ '000000', '000001', '000002', '000003', '000004' ], locale:'en_US', missing_numeric_rows:0, missing_tokens:[ '', 'NaN', 'NULL', 'N/A', 'null', '-', '#REF!', '#VALUE!', '?', '#NULL!', '#NUM!', '#DIV/0', 'n/a', '#NAME?', 'NIL', 'nil', 'na', '#N/A', 'NA' ], name:'test 2', new_fields:[], number_of_anomalies:0, number_of_anomalyscores:0, number_of_associations:0, number_of_associationsets:0, number_of_batchanomalyscores:0, number_of_batchcentroids:0, number_of_batchpredictions:0, number_of_batchtopicdistributions:0, number_of_centroids:0, number_of_clusters:0, number_of_correlations:0, number_of_ensembles:0, number_of_evaluations:0, number_of_logisticregressions:0, number_of_models:0, number_of_predictions:0, number_of_statisticaltests:0, number_of_topicdistributions:0, number_of_topicmodels:0, objective_field:{ column_number:4, datatype:'string', id:'000004', name:'species', optype:'categorical', order:4, term_analysis:{ enabled:true } }, origin_batch_resource:null, origin_batch_status:false, output_fields:[], price:0, private:true, project:null, ranges:null, refresh_field_types:false, refresh_preferred:false, replacements:null, resource:'dataset/595535df7e0a8d5062019eb0', row_offset:0, row_step:1, rows:150, sample_rates:null, seeds:null, shared:false, size:4608, source:'source/59553434c135860b1600619d', source_status:true, statisticaltest:null, status:{ bytes:4608, code:5, elapsed:869, field_errors:{}, message:'The dataset has been created', progress:1, row_format_errors:{ total:0 }, serialized_rows:150, task:'Done' }, subscription:false, tags:[], tde_download:{ code:0, excluded_input_fields:[], input_fields:[], message:'', preview:[] }, term_limit:1000, updated:'2017-06-29T19:07:05.477941', user_metadata:{} }, [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Type',
            'application/json',
            'Date',
            'Thu, 29 Jun 2017 19:07:05 GMT',
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
            '6156',
            'Connection',
            'Close' ]);
    nock('https://bigml.io:443', { encodedQueryParams:true })
        .delete('/dataset/595535df7e0a8d5062019eb0', {})
        .query(true)
        .reply(204, '', [ 'Access-Control-Allow-Methods',
            'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin',
            '*',
            'Cache-Control',
            'max-age=0, no-cache, no-store, must-revalidate',
            'Content-Length',
            '0',
            'Content-Type',
            'text/html; charset=utf-8',
            'Date',
            'Thu, 29 Jun 2017 19:27:28 GMT',
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
            'Connection',
            'Close' ]);
};