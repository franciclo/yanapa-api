var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: process.env.ELASTICSEARCH_URI,
    log: 'info'
});
