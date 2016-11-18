angular.module('companiesCtrl', ['companiesService', 'btford.socket-io'])
    .factory('mySocket', function (socketFactory) {
        var socket = io.connect('http://localhost:3001');

        socket.on('connect', function(){
            console.log('connected');
            socket.emit('request', function(data) {
                console.log('data received', data);
            });
        });
        socket.on('response', function(data){
            console.log('response');
        });
        socket.on('disconnect', function(){});


        var mySocket = socketFactory({
            ioSocket: socket
        });

        return mySocket;
    })
    .controller('companiesCtrl', function(mySocket, Cards, $sce, $http, $scope, $timeout, $q, $log, $stateParams, $rootScope, $timeout, $mdSidenav) {

        self = this;
        // Side bar controller
        $scope.toggleLeft = buildToggler('left');
		$scope.openLeft = buildTogglerOpen('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }

		function buildTogglerOpen(componentId) {
            return function() {
                $mdSidenav(componentId).open();
            }
        }
        // Side bar controller


        $scope.renderHtml = function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.update = function(user) {
            /**
             * call Node.js Server to call Google NLP
             */


            var request = {
                "text": user.contactMsg.toString()
            };

            $rootScope.request = request;
            // $rootScope.user = mockRequest.text;
            //
            // $rootScope.data = mockJson;

            // $http.post('http://localhost:5000/detect', request)
            //     .success(function(data) {
            //         $rootScope.user = request.text;
            //         $rootScope.data = data;
            //         console.log('THIS IS THE DATA in companiesCtrl',data);
            //     })
            //     .error(function(data) {
            //         console.log('Error: ' + data);
            //     });
        };
    });

var mockRequest = {
    "text": "When I turned 31, I thought I was too old to apply for a full-time MBA program. Although I had been considering pursuing the degree on and off for eight years, I hadn’t found the right fit. It seemed difficult to start school and move to a new city at a time when my life felt fragmented and the program itself was still evolving, but Cornell Tech attracted me because I could complete the entire degree in one year, and it focused on two of my passions: tech and entrepreneurship. New York is a great city. December 21st 2016 will be amazing. Distraction. Before Cornell Tech I was studying in Tel Aviv Jaffa College. Israel is cool. Michael Bloomberg invest a lot of money in Nasdaq."
};