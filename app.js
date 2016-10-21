// require('newrelic');
var express = require('express'),
    app = express(),
    google = require('google'),
    ImagesClient = require('google-images'),
    _ = require('lodash'),
    Promise = require("bluebird"),
    client = new ImagesClient('006472375744838889227:wgcx2gvcnys', 'AIzaSyB86QS2VTZDWSSyo5qEadjJnvp_SO3L14o'),
    language = require('@google-cloud/language')({
        projectId: "medium-146413",
        keyFilename: "/Users/Zephyr/Desktop/Sprint2/key.json"
    }),
    bodyParser = require('body-parser'),
    YouTube = require('youtube-node'),
    Twitter = require('node-twitter'),
    googleapi = require('googleapis');

// Google knowledge graph
var kgsearchapi = googleapi.kgsearch('v1');

// Google Youtube
var youTube = new YouTube();
youTube.setKey('AIzaSyDK-lenDCs83cEvFTknrvpINEHnZCSOcIg');

// Twitter search
var twitterSearchClient = new Twitter.SearchClient(
    'wbD14ZNvLlj78jEu0iRp1Nfgv',
    'bHWhrnK1nrSu5Mctbfj8rMLlUxumkopEmm2LrtT4JISKKHnpGj',
    '47969995-GLbixhkzUvYzcaGFMT9YAf3Uvmj8ZbQ36wRKgC9Eq',
    'Vc2IvRYGzMetg1M91rVtM1QGFHVvbHt6E8zumMLkD0tfE'
);


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.post('/detect', function(req, res) {

    console.log(req.body);
    var paragraph = req.body.text;

    console.log(req.body);
    var options = {
        verbose: true
    };

    return new Promise(function(resolve, reject) {
            language.detectEntities(paragraph, options, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    console.log(data);
                    var results = _.flattenDeep([data.people, data.places, data.organizations]);
                    resolve(results);
                }
            });
        })
        .then(function(entities) {
            var promises = [];
            _.forEach(entities, function(entity) {
                promises.push(searchGoogle(entity));
                promises.push(searchGoogleImages(entity));
                promises.push(searchYoutube(entity));
                promises.push(searchTwitter(entity));
                promises.push(searchWiki(entity));
            });
            Promise
                .all(promises)
                .then(function() {
                    res.send(entities);
                    // });
                })
        })
        .catch(function(err) {
            console.log('ERR', err);
        });
});

app.get('/', function(req, res) {
    res.send('iTrek 2017!');
});

app.get('/*', function(req, res, next) {
    res.sendFile('index.html', {
        root: __dirname + '/public'
    });
});

var searchGoogle = function(entity) {
    return new Promise(function(resolve, reject) {
        google(entity.name, 1, function(err, data) {
            console.log(data);
            entity["googleSearch"] = data;
            resolve(entity);
        });
    });
};

var searchGoogleImages = function(entity) {
    return new Promise(function(resolve, reject) {
        console.log(entity);
        client.search(entity.name)
            .then(function(data) {
                console.log(data);
                entity["googleImages"] = data;
                resolve(entity);
            });
    });
};

var searchYoutube = function(entity) {
    return new Promise(function(resolve, reject) {
        console.log(entity);
        youTube.search(entity.name, 1, function(error, result) {
            // console.log(JSON.stringify(result, null, 2));
            entity["youtube"] = result;
            resolve(entity);
        });
    });
};

var searchTwitter = function(entity) {
    return new Promise(function(resolve, reject) {
        twitterSearchClient.search({
            'q': '"' + entity.name + '"'
        }, function(error, result) {
            if (error) {
                console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
            }
            if (result) {
                // console.log(result);
                entity["tweets"] = result;
                resolve(entity);
            }
        });
    });
};

var searchWiki = function(entity) {
    return new Promise(function(resolve, reject) {
        var params = {
            auth: 'AIzaSyDK-lenDCs83cEvFTknrvpINEHnZCSOcIg',
            query: entity.name
        };
        kgsearchapi.entities.search(params, function(err, response) {
            if (err) {
                console.log('Encountered error', err);
            } else {
                // console.log(JSON.stringify(response, null, 2));
                entity["wikipedia"] = response;
                resolve(entity);
            }
        });
    });
}
