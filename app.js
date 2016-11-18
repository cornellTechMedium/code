var express = require('express'),
    app = express(),
    google = require('google'),
    ImagesClient = require('google-images'),
    _ = require('lodash'),
    Promise = require("bluebird"),
    client = new ImagesClient('006472375744838889227:wgcx2gvcnys', process.env.GOOGLE_IMAGES_KEY),
    bodyParser = require('body-parser'),
    YouTube = require('youtube-node'),
    Twitter = require('node-twitter'),
    googleapi = require('googleapis'),
    watson = require('watson-developer-cloud'),
    googleAPIKey = process.env.GOOGLE_API_KEY,
    alchemy_language = watson.alchemy_language({
        "url": process.env.IBM_URL,
        "apikey": process.env.IBM_KEY
    });


// Google Map Static
var publicConfig = {
    key: googleAPIKey,
    stagger_time: 1000, // for elevationPath
    encode_polylines: false,
    secure: true, // use https
};
// var gmAPI = new GoogleMapsAPI(publicConfig);

// Google knowledge graph
var kgsearchapi = googleapi.kgsearch('v1');

// Google Youtube
var youTube = new YouTube();
youTube.setKey(googleAPIKey);

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

var io = require('socket.io')();
io.on('connection', function(client) {
    client.on('event', function(data) {});
    client.on('request', function() {
        console.log('requested SOCKET');
        client.emit('response', {
            some: 'data'
        });
    });
});
io.listen(3001);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.post('/detect', function(req, res) {

    var paragraph = req.body.text;

    var options = {
        verbose: true
    };

    return new Promise(function(resolve, reject) {
            var parameters = {
                text: req.body.text
            };

            alchemy_language.keywords(parameters, function(err, response) {
                if (err) throw new Error(err);

                else {
                    var arr = _.map(response.keywords, function(keyword) {
                        return {
                            name: keyword.text
                        };
                    });
                    resolve(arr);
                }

            });
        })
        .then(function(entities) {
            var promises = [];
            _.forEach(entities, function(entity) {
                // promises.push(searchGoogle(entity));
                promises.push(searchGoogleImages(entity));
                promises.push(searchWiki(entity));
                // promises.push(searchTwitter(entity));
                // promises.push(searchYoutube(entity));
                // promises.push(getMap(entity));
            });
            Promise
                .all(promises)
                .then(function() {
                    var result = {};
                    result.entities = entities;
                    result.hashmap = _.keyBy(entities, 'name');
                    res.send(result);
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
            entity["googleSearch"] = data;
            resolve(entity);
        });
    });
};

var searchGoogleImages = function(entity) {
    return new Promise(function(resolve, reject) {
        client.search(entity.name)
            .then(function(data) {
                entity["googleImages"] = data;
                resolve(entity);
            });
    });
};

var searchYoutube = function(entity) {
    return new Promise(function(resolve, reject) {
        youTube.search(entity.name, 10, function(error, result) {
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
            auth: googleAPIKey,
            query: entity.name
        };
        kgsearchapi.entities.search(params, function(err, response) {
            if (err) {
                console.log('Error: ', err);
            } else {
                entity["wikipedia"] = response;
                resolve(entity);
            }
        });
    });
};

// var getMap = function(entity) {
//     if (entity.type == 'LOCATION') {
//         return new Promise(function(resolve, reject) {
//             var params = {
//                 center: entity.name,
//                 zoom: 0,
//                 size: '800x400',
//                 maptype: 'roadmap'
