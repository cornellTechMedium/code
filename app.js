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
        keyFilename: "/Users/adamgavish/Development/medium/config/auth.json"
    }),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

app.post('/detect', function (req, res) {

    console.log(req.body);
    var paragraph = req.body.text;

    console.log(req.body);
    var options = {
        verbose: true
    };

    return new Promise(function (resolve, reject) {
        language.detectEntities(paragraph, options, function (err, data) {
            if (err) {
                reject(err);
            } else {
                var results = _.flattenDeep([data.people, data.places, data.organizations]);
                resolve(results);
            }
        });
    })
        .then(function (entities) {
            var promises = [];
            _.forEach(entities, function (entity) {
                // promises.push(searchGoogle(entity));
                promises.push(searchGoogleImages(entity));
            });
            Promise
                .all(promises)
                .then(function () {
                    res.send(entities);
                    // });
                })
        })
        .catch(function (err) {
            console.log('ERR', err);
        });
});

app.get('/', function (req, res) {
    res.send('iTrek 2017!');
});

app.get('/*', function (req, res, next) {
    res.sendFile('index.html', {root: __dirname + '/public'});
});

var searchGoogle = function (entity) {
    return new Promise(function (resolve, reject) {

        google(entity.name, 1, function (err, data) {
            console.log(data);
            entity["link"] = data;
            resolve(entity);
        });
    });
};

var searchGoogleImages = function (entity) {
    return new Promise(function (resolve, reject) {
        client.search(entity.name)
            .then(function (data) {
                console.log(data);
                entity["images"] = data;
                resolve(entity);
            });
    });
};
