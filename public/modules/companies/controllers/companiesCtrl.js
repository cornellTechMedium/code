angular.module('companiesCtrl', ['companiesService'])
    .controller('companiesCtrl', function(Cards, $sce, $http, $scope, $timeout, $q, $log, $stateParams, $rootScope, $timeout, $mdSidenav) {

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

var mockJson = {
    "language": "en",
    "sentiment": {
        "polarity": 50,
        "magnitude": 480.0000190734863
    },
    "entities": [{
        "name": "Michael Bloomberg",
        "type": "PERSON",
        "metadata": {
            "wikipedia_url": "http://en.wikipedia.org/wiki/Michael_Bloomberg"
        },
        "salience": 0.9714799001812935,
        "mentions": [{
            "text": {
                "content": "Michael Bloomberg",
                "beginOffset": -1
            }
        }],
        "images": [{
            "type": "image/jpeg",
            "width": 665,
            "height": 913,
            "size": 52308,
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Michael_R_Bloomberg.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTri2bEFNmP_IceGuYSX7C4yB-gDR8mseZjXTgB7DOPpjf_xA0hHDaGSiQ",
                "width": 107,
                "height": 147
            }
        }, {
            "type": "image/jpeg",
            "width": 992,
            "height": 559,
            "size": 48462,
            "url": "http://a.abcnews.com/images/Politics/GTY_michael_bloomberg_jt_160123_16x9_992.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2-WRC4VSmggUJpwBEexefBXsCx2pBVXduKJq8k6UbamvIiPbQB_kM1Pw",
                "width": 149,
                "height": 84
            }
        }, {
            "type": "image/jpeg",
            "width": 768,
            "height": 576,
            "size": 45166,
            "url": "https://static01.nyt.com/images/2016/07/25/us/25bloomberg/25bloomberg-master768.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnl_lyFrBx1ymCFTkwRo9G_sNe16PTAj2c9PJGBzNR6EJYYfToP5Jo6e41",
                "width": 142,
                "height": 107
            }
        }, {
            "type": "image/jpeg",
            "width": 1600,
            "height": 800,
            "size": 106972,
            "url": "http://esq.h-cdn.co/assets/16/03/1600x800/landscape-1453569282-gettyimages-159690433.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tG5WxuULFamo6fgEUw-H6RpSXQik4UwwAEPmzaS5JmQCepD0i6cWW2mw",
                "width": 150,
                "height": 75
            }
        }, {
            "type": "image/jpeg",
            "width": 620,
            "height": 412,
            "size": 71180,
            "url": "http://media.salon.com/2016/01/trump_bloomberg-620x412.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbq5j7Rv81RiRuMYO9pYEmQbIJwHoaX7-mqlqWofivYdIM059wQISN20pF",
                "width": 136,
                "height": 90
            }
        }, {
            "type": "image/jpeg",
            "width": 400,
            "height": 280,
            "size": 21752,
            "url": "http://images.forbes.com/media/lists/10/2009/michael-bloomberg.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRInaB0GdqRX29bls7wNtBS9b8pOjzZJlg7LofbloCl4X2FTpWGubY68UI",
                "width": 124,
                "height": 87
            }
        }, {
            "type": "image/jpeg",
            "width": 1536,
            "height": 1024,
            "size": 290397,
            "url": "http://i.huffpost.com/gen/907595/images/o-MICHAEL-BLOOMBERG-GUN-CONTROL-facebook.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbLXv9btd1Qy4lCwt8cdXcDZK35KRZGwztmGF-wVNJuU3YwAne11MjB2IM",
                "width": 150,
                "height": 100
            }
        }, {
            "type": "image/jpeg",
            "width": 928,
            "height": 523,
            "size": 47438,
            "url": "http://cdn3.thr.com/sites/default/files/imagecache/landscape_928x523/2013/04/michael_bloomberg.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLZMIx5d-yvjxfjD_Z8eh0zNwjsW9FPDzgOdY0Gn-l310Wgnh7ZzvfNcI",
                "width": 147,
                "height": 83
            }
        }, {
            "type": "image/jpeg",
            "width": 650,
            "height": 400,
            "size": 46039,
            "url": "http://cdn.theatlantic.com/assets/media/img/posts/bloombergpoint.banner.reuters.jpg.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOCyl061wV4cMMtmHyO83WevA0Tyob6Q0mkV4W50W1VKGVTikpcS_fHbKk",
                "width": 137,
                "height": 84
            }
        }, {
            "type": "image/jpeg",
            "width": 885,
            "height": 516,
            "size": 51234,
            "url": "http://twt-thumbs.washtimes.com/media/image/2015/10/27/bloomberg_c0-0-970-565_s885x516.jpg?eecf4f5849beafb0f1553ce374128c718fb7e8b5",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsmid29vfP4Wb4VS3AC7-bnxUB2wnirCkVgJR77_KCC_xphgskBQ0RHU",
                "width": 146,
                "height": 85
            }
        }]
    }, {
        "name": "New York",
        "type": "LOCATION",
        "metadata": {
            "wikipedia_url": "http://en.wikipedia.org/wiki/New_York_City"
        },
        "salience": 4.998599365353584,
        "mentions": [{
            "text": {
                "content": "New York",
                "beginOffset": -1
            }
        }],
        "images": [{
            "type": "image/jpeg",
            "width": 3911,
            "height": 2600,
            "size": 2150581,
            "url": "http://cache.marriott.com/Images/HWS_Messages/Meetings_In_New_York.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgdWxIhBZTrmZ1JBOsYk4fa-D1UEqH0y-k1n5xAmxHv5bHAH-9eCUYjOIh",
                "width": 150,
                "height": 100
            }
        }, {
            "type": "image/jpeg",
            "width": 800,
            "height": 376,
            "size": 196828,
            "url": "http://usa.sae.edu/assets/Campuses/New-York/2015/New_York_City_view.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRN-uT1zorz-CYHtSiEKUrG5q1TZAqhDctjR1wxJb2Cdwey-OvDcQyuoA",
                "width": 143,
                "height": 67
            }
        }, {
            "type": "image/jpeg",
            "width": 1200,
            "height": 800,
            "size": 309104,
            "url": "http://www.newyorker.com/wp-content/uploads/2015/12/Veix-Goodbye-New-York-Color-1200.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkuPrQaoRfGS_LWCAL7JkTRh8myYqbV_cH7LhHjQ7NM9kaRXsRf3-PZAei",
                "width": 150,
                "height": 100
            }
        }, {
            "type": "image/jpeg",
            "width": 2048,
            "height": 1365,
            "size": 971501,
            "url": "https://media.timeout.com/images/102920649/image.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgmqMmjzaqL1az_pJER7hBojbOLMcte3oKV7HHL7pyiz3fRFdkHQXxxP2v",
                "width": 150,
                "height": 100
            }
        }, {
            "type": "image/jpeg",
            "width": 1920,
            "height": 690,
            "size": 487128,
            "url": "https://www.cornellclubnyc.com/Images/Library/slider-2.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj3KyErJtAVIXPkMyn5wwwBHr4LGIM-uxkl-ewXxYOgcUMqoqd6I2jzemv",
                "width": 150,
                "height": 54
            }
        }, {
            "type": "image/jpeg",
            "width": 1536,
            "height": 1151,
            "size": 516107,
            "url": "http://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline1536.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ1YPBd1aEhpkUn3SxOaEpi_1mVlffH4DynhtAH3KUfJY7Qbtz3h-CoDY",
                "width": 150,
                "height": 112
            }
        }, {
            "type": "image/jpeg",
            "width": 550,
            "height": 331,
            "size": 49071,
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQrBzlxaQ52wIcfioBU2p3SVrVTE5wds4cazjXfNAbUHY1sAOkk66Uf3v",
                "width": 133,
                "height": 80
            }
        }, {
            "type": "image/jpeg",
            "width": 2000,
            "height": 1000,
            "size": 634792,
            "url": "http://www.izzysnypizza.com/wp-content/uploads/2015/01/izzy-ny-pizza.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UcEFgsV4P2QdpqL7VnH2UQYmLKNdB43syM437oW35KRKZeazm5syrE8",
                "width": 150,
                "height": 75
            }
        }, {
            "type": "image/jpeg",
            "width": 1400,
            "height": 787,
            "size": 376735,
            "url": "http://www.sofitel.com/imagerie/destinations/city/new-york-overview-1400x788-1.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7XaMjFwNZZ7hEyPGKtsnjgtDAxEe51kGNCKNwkMtPlJlt5ozxnFsLl7h6",
                "width": 150,
                "height": 84
            }
        }, {
            "type": "image/jpeg",
            "width": 550,
            "height": 325,
            "size": 36805,
            "url": "https://static.mgmresorts.com/content/dam/MGM/new-york-new-york/entertainment/attractions/hersheys-chocolate-world/new-york-new-york-hersheys-brooklyn-bridge-exterior-lifestyle.tif.image.550.325.high.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKwo4djBkeaGRPGa6uI9xvcUrE1RQzQurnHu4j49ixbzGQLPCV0uFjMNE",
                "width": 133,
                "height": 79
            }
        }]
    }, {
        "name": "Israel",
        "type": "LOCATION",
        "metadata": {
            "wikipedia_url": "http://en.wikipedia.org/wiki/Israel"
        },
        "salience": 1.55072920024395,
        "mentions": [{
            "text": {
                "content": "Israel",
                "beginOffset": -1
            }
        }],
        "images": [{
            "type": "image/png",
            "width": 2000,
            "height": 2580,
            "size": 1166276,
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Map_of_Israel,_neighbours_and_occupied_territories.svg/2000px-Map_of_Israel,_neighbours_and_occupied_territories.svg.png",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSika5gzKXcQd4_Z0YO1OiYnJMQxC6qX8-nbPcFXSPB6qrMr7pxobRtHy3W",
                "width": 116,
                "height": 150
            }
        }, {
            "type": "image/jpeg",
            "width": 805,
            "height": 405,
            "size": 449383,
            "url": "https://www.touristisrael.com/wp-content/uploads/bigstock-Panorama-of-Jerusalem-old-city-848642421.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGEJukSBQ3gz3oB1knAIYPb_4yLEmu1eMa2czeZ3WsAbpem6q6JzFqu0mJ",
                "width": 143,
                "height": 72
            }
        }, {
            "type": "image/jpeg",
            "width": 4217,
            "height": 2767,
            "size": 14779903,
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Israel_Supreme_Court.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRj6kzfyzn6xQGTHfwsREtDQMOLVPXZhKjHK-9nCTRAuaX52abotb_YTGU",
                "width": 150,
                "height": 98
            }
        }, {
            "type": "image/jpeg",
            "width": 424,
            "height": 283,
            "size": 48444,
            "url": "https://www.sixt.com/fileadmin/user_upload/pictures-city-page/israel-country.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaW7VXBLJOZEgT-YIjG6ZLY22Fh2wCgz-GwYpJhhD5HgzYKtt6jWepC9E",
                "width": 126,
                "height": 84
            }
        }, {
            "type": "image/svg+xml",
            "width": 2168,
            "height": 3300,
            "size": 292626,
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Kingdom_of_Israel_1020_map.svg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMRTf_-k78ydZP9K2MBqAolv5b8VsHDE_RmBMtPDbxIEAJWmLemAy8Ihg",
                "width": 99,
                "height": 150
            }
        }, {
            "type": "image/jpeg",
            "width": 1600,
            "height": 900,
            "size": 210137,
            "url": "https://media.gadventures.com/media-server/cache/db/e3/dbe36311a14a6b7d893d87be41e00284.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWn0iSUZ2iGUzEn_5jom_TwZZiavSoVlYU-kckroZnoYheTY82okOSQP8",
                "width": 150,
                "height": 84
            }
        }, {
            "type": "image/jpeg",
            "width": 1600,
            "height": 1106,
            "size": 300349,
            "url": "http://s3.amazonaws.com/iexplore_web/images/assets/000/006/295/original/israel.jpg?1443185316",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQirGjigvfy6Ix48gfIughfC855VSceKi-occCtcRS1uCQx2kZjNEGTpH0",
                "width": 150,
                "height": 104
            }
        }, {
            "type": "image/jpeg",
            "width": 2048,
            "height": 1536,
            "size": 698597,
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/PikiWiki_Israel_19099_ruins_of_tel_aviv_dolphinarium.JPG",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAzM5D564qnGmSCpLZexbPNTLoSl1005YYb1o87KwAkHrpxe5Z_WZ7GRET",
                "width": 150,
                "height": 113
            }
        }, {
            "type": "image/png",
            "width": 1032,
            "height": 727,
            "size": 85927,
            "url": "http://www.operationworld.org/files/ow/maps/lgmap/isra-MMAP-md.png",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUD_yCKdpwlYUR3dZjtg4otmODMTZGKbFSjeCPJKlEZ4KVXzvt_SpgmC8",
                "width": 150,
                "height": 106
            }
        }, {
            "type": "image/jpeg",
            "width": 420,
            "height": 545,
            "size": 31649,
            "url": "http://www.nationsencyclopedia.com/photos/israel-1357.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8U3W2Mb5F-8oBd9AqiKN04o9K3wgQrALtEqs9Aju9EMpk37fXFn7aUFw",
                "width": 102,
                "height": 133
            }
        }]
    }, {
        "name": "Cornell Tech",
        "type": "ORGANIZATION",
        "metadata": {
            "wikipedia_url": "http://en.wikipedia.org/wiki/Cornell_Tech"
        },
        "salience": 21.201691031455994,
        "mentions": [{
            "text": {
                "content": "Cornell Tech",
                "beginOffset": -1
            }
        }, {
            "text": {
                "content": "Cornell Tech",
                "beginOffset": -1
            }
        }],
        "images": [{
            "type": "image/jpeg",
            "width": 1200,
            "height": 652,
            "size": 173345,
            "url": "http://static1.businessinsider.com/image/536a55c3eab8ea0f07187ab2-1200-652/campus_lawn_revise-1.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_onzwWi6BCz8N-mncnPqGxucCYVMmF9Bg4QdTnJQm6rXDOYMTEj2lUCb2",
                "width": 150,
                "height": 82
            }
        }, {
            "type": "image/jpeg",
            "width": 1000,
            "height": 585,
            "size": 188939,
            "url": "https://static1.squarespace.com/static/562d2466e4b0947cbf0e8eb7/t/56e7050fd210b8f0cedf2904/1457980697930/background.jpg?format=1500w",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFMXGf1wx1I8J4jRjwBvMd0PttmbuCHXxF6LbXp5r5nK8OwsPVuG2WwMg",
                "width": 149,
                "height": 87
            }
        }, {
            "type": "image/png",
            "width": 1200,
            "height": 721,
            "size": 139586,
            "url": "http://static2.businessinsider.com/image/536a5aa469beddd664d1b080-1200-750/screen%20shot%202014-05-07%20at%2012.08.36%20pm.png",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIFCGR5DK97T90fVQa8NMCO553frY1LepL3T7RgIyPb74R5ZS_N7lSlM",
                "width": 150,
                "height": 90
            }
        }, {
            "type": "image/jpeg",
            "width": 1400,
            "height": 789,
            "size": 442471,
            "url": "http://b-i.forbesimg.com/peterhigh/files/2014/01/Cornell-NYC-Tech.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNftzvr907N-DULi-wZXtq3wtie9RT9QJENW-oPg_m3YRJ4W4YxBz9MSY",
                "width": 150,
                "height": 85
            }
        }, {
            "type": "image/png",
            "width": 455,
            "height": 210,
            "size": 6280,
            "url": "http://www.217pta.com/uploads/1/7/9/9/17996371/1466086_orig.png",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCWMTt64Ev_R1-a6OGDbg9YLm9aqFUNTDf6410Ra229UbBn7v88u176S4",
                "width": 128,
                "height": 59
            }
        }, {
            "type": "image/png",
            "width": 822,
            "height": 616,
            "size": 123228,
            "url": "http://static3.businessinsider.com/image/536a7bfa69bedd5d6fd26826-822-616/cornell-tech-campus.png",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkR7kZGU0LJNnhE-rdVYIDq3OIQd47jl0XSJZ1x_1GmfcUAnmXyuns2X8y",
                "width": 144,
                "height": 108
            }
        }, {
            "type": "image/jpeg",
            "width": 822,
            "height": 616,
            "size": 123228,
            "url": "http://www.217pta.com/uploads/1/7/9/9/17996371/1792380_orig.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTj5KiwpxQ0traNUpgAHOJhkW9pLd-tjs9CoWipmd-GswRM4JE-WQeJwq0",
                "width": 144,
                "height": 108
            }
        }, {
            "type": "image/jpeg",
            "width": 465,
            "height": 278,
            "size": 121663,
            "url": "http://www.newyorker.com/wp-content/uploads/2012/10/CornellTech_465px.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvlFB0bu6rbiRV7PZgGp7czaL8qkFjOIb8t64ResZl8DXAo4SZDy3DVI0",
                "width": 128,
                "height": 77
            }
        }, {
            "type": "image/jpeg",
            "width": 919,
            "height": 500,
            "size": 412517,
            "url": "https://tech.cornell.edu/images/made/uploads/posts/The_Bridge_-_Credit_Weiss_Manfredi_919_500_c1.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8OP1Lp01lBHyWbojb9TrlQQWCxr-8c5wSqUlt5uAKU5RND22F6MjdST_q",
                "width": 147,
                "height": 80
            }
        }, {
            "type": "image/jpeg",
            "width": 1851,
            "height": 600,
            "size": 159039,
            "url": "https://cdn0.vox-cdn.com/thumbor/xKwbk0hb8rZeWKbBACIj7mLUv7w=/0x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/5066285/cornell_tech_pocket_guide.0.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSs1pazeL3Gh9pd9MfM5s32vLnN3EtXvlyaaBjw1oDy8v96dspW_WiSJl8",
                "width": 150,
                "height": 49
            }
        }]
    }, {
        "name": "Tel Aviv Jaffa College",
        "type": "ORGANIZATION",
        "metadata": {},
        "salience": 1.1892742477357388,
        "mentions": [{
            "text": {
                "content": "Tel Aviv Jaffa College",
                "beginOffset": -1
            }
        }],
        "images": [{
            "type": "image/png",
            "width": 200,
            "height": 200,
            "size": 5690,
            "url": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/1/005/01d/27a/1851c47.png",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzcu129OxS2UMFzZ2p1DVUenb-YZl2Nw2W7Jz7LsdbCDh1wDyWLt0f7Q",
                "width": 104,
                "height": 104
            }
        }, {
            "type": "image/jpeg",
            "width": 600,
            "height": 300,
            "size": 79679,
            "url": "http://www.lan-alum.com/wordpress/wp-content/uploads/2014/03/1328-003-600x300.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4NeW2s-feagGAQhuRxSZSrPRuhlXgrv602CRxlCjQpIN1lsJsvLPSE8ym",
                "width": 135,
                "height": 68
            }
        }, {
            "type": "image/",
            "width": 400,
            "height": 254,
            "size": 38155,
            "url": "http://www.jpost.com/HttpHandlers/ShowImage.ashx?ID=319118",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSH4kVXIMhHoUUPIKepy8WRXxUj1nymuvRewbtvPmX0cnTRim4PFIRek",
                "width": 124,
                "height": 79
            }
        }, {
            "type": "image/jpeg",
            "width": 200,
            "height": 90,
            "size": 8503,
            "url": "https://acty.mta.ac.il/Style%20Library/MtaMarketingImagesEn/logo_en.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRadc1tRe8LtaoHZ3UTNN35DqqgZKhLLPP-VGkbOSIvp-6Z1qjvW_aAgg",
                "width": 104,
                "height": 47
            }
        }, {
            "type": "image/jpeg",
            "width": 506,
            "height": 789,
            "size": 292989,
            "url": "http://dornsife.usc.edu/assets/sites/1/imgs/overseas/Israel/Old_Jaffa_the_port_and_Tel_Aviv.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTK10wXQ1n21kLJs7oEmrVXfAVbJ0kwOW8fu9vD7VRPe8dFJ72sT8GFc10",
                "width": 92,
                "height": 143
            }
        }, {
            "type": "image/jpeg",
            "width": 416,
            "height": 355,
            "size": 108988,
            "url": "http://www.telavivfoundation.org/UserFiles/project_photos/projects_a/acecon2.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnsp_4Ru1Wsx-EICzV9DLHCS9pX4z3SAkKQk6TiqLUKN3PLXiEDGlV6g",
                "width": 125,
                "height": 107
            }
        }, {
            "type": "image/jpeg",
            "width": 674,
            "height": 239,
            "size": 50942,
            "url": "https://media.licdn.com/mpr/mpr/shrinknp_674_240/AAEAAQAAAAAAAAYrAAAAJDE5MzA5MjUxLWUwZDctNDhhMC04ZDIxLTkyMDE3M2ZmMTViZA.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTutTkalcveXKR4ULR6znlVeBHrAb7rvnK4yIjJJyAPcXlXVlKe7lpra_CN",
                "width": 138,
                "height": 49
            }
        }, {
            "type": "image/jpeg",
            "width": 532,
            "height": 355,
            "size": 74159,
            "url": "http://www.telavivfoundation.org/UserFiles/project_photos/projects_g/Gutman_Library1.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfVsEt2nsnauPM9cg7QO2MA0aVYlBeLN4sq4HXZ6Vt1JmZ1UROmxUflKLd",
                "width": 132,
                "height": 88
            }
        }, {
            "type": "image/png",
            "width": 646,
            "height": 220,
            "size": 286603,
            "url": "https://media.licdn.com/media/p/8/000/2c1/01c/27dd202.png",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzn4SikGkEVmaR7ni8s-IaayglclFm_kUcgtsNGaz4ll4H1Ev4XGDxa2Bc",
                "width": 137,
                "height": 47
            }
        }, {
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 99565,
            "url": "http://static.panoramio.com/photos/large/17864510.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEyC2FVHOuQQ45zdtPegCuOx1sSy6d-maeCHCJqP7Qsi23iC_gsPspO3Y",
                "width": 150,
                "height": 113
            }
        }]
    }, {
        "name": "Nasdaq",
        "type": "ORGANIZATION",
        "metadata": {
            "wikipedia_url": "http://en.wikipedia.org/wiki/NASDAQ"
        },
        "salience": 1.1892742477357388,
        "mentions": [{
            "text": {
                "content": "Nasdaq",
                "beginOffset": -1
            }
        }],
        "images": [{
            "type": "image/jpeg",
            "width": 1320,
            "height": 742,
            "size": 508772,
            "url": "http://s.marketwatch.com/public/resources/MWimages/MW-DF139_nasdaq_ZG_20150209120238.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbL26YHTCYudX54nzhotP6-bAm69ebl9VsNDHKZ9a-hEnh7ssV3bcAc8Ud",
                "width": 150,
                "height": 84
            }
        }, {
            "type": "image/png",
            "width": 631,
            "height": 217,
            "size": 12657,
            "url": "http://www.nasdaq.com/ambition/img/logo.png",
            "thumbnail": {
                "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXbRKJUlUx71NvOubEHD6apy-meaQ9ls0myhwPBgodIF6AGeAO_3ER4GnW",
                "width": 137,
                "height": 47
            }
        }, {
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 474402,
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/NASDAQ_studio.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwGc0R_4SbApE-uUf6YdjHGD5nlNspy0WEZgezNTrKuiHyM1FJZwQP5-rJ",
                "width": 150,
                "height": 113
            }
        }, {
            "type": "image/png",
            "width": 378,
            "height": 108,
            "size": 8396,
            "url": "http://business.nasdaq.com/Images//Nasdaqlogo_homepage_tcm5044-15630.png",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSB9F7MuYj-OraZyAPTYy7K2Geb7fLgRFoqzrSRHvtqucHDRLtJGKtGjJs",
                "width": 122,
                "height": 35
            }
        }, {
            "type": "image/jpeg",
            "width": 620,
            "height": 350,
            "size": 82855,
            "url": "http://reconcapitalpartners.com/wp-content/uploads/Recon-Capital-Nasdaq-100-USA-Today-.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW7g1OM3Jo8c6po_0UJbgTTjILRmNz0-TMClnQ7dQxderGGiwlgu_0Ck3",
                "width": 136,
                "height": 77
            }
        }, {
            "type": "image/jpeg",
            "width": 299,
            "height": 188,
            "size": 27649,
            "url": "http://www.nasdaq.com/images/Ndotcom_microsite_299x188.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTu3rZiB1ooVkk54-SRkr8H_yD78oR20i9uLsNj3P7LN6kW4TztdmE7oA",
                "width": 116,
                "height": 73
            }
        }, {
            "type": "image/jpeg",
            "width": 2460,
            "height": 1620,
            "size": 251040,
            "url": "http://business.nasdaq.com/Images//L1_Pillar_headline_o_tcm5044-9600.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0o5_GVkeoxxA2WYj_ImdytGSYVVIGzKk_xDxIjn4jPCLvyybcAmFm2rO",
                "width": 150,
                "height": 99
            }
        }, {
            "type": "image/jpeg",
            "width": 1800,
            "height": 1200,
            "size": 431684,
            "url": "http://www.nasdaq.com/reference/tower2.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQReImR-bxKNmOQVtus77cgTo2Sr6VlrLMmh1bfpyfmNX4fnEmsWNYHDD1R",
                "width": 150,
                "height": 100
            }
        }, {
            "type": "image/jpeg",
            "width": 553,
            "height": 369,
            "size": 132942,
            "url": "https://si.wsj.net/public/resources/images/BA-BH301_NASDAQ_G_20150220192050.jpg",
            "thumbnail": {
                "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFY5LCJ0TUnksCgCzeGW2c9OD8g3CnwpQtnGm7iJ-DlfrQKklCklxgf_mn",
                "width": 133,
                "height": 89
            }
        }, {
            "type": "image/png",
            "width": 631,
            "height": 631,
            "size": 30309,
            "url": "http://www.nasdaq.com/ambition/uploads/ckfinder/images/Nasdaq_Social.png",
            "thumbnail": {
                "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS69ykTdUp7s9fhZ7g3eC1-qcJbWPOQnAIWmI7GyXqHykp-8po7uEKuZc_V7g",
                "width": 137,
                "height": 137
            }
        }]
    }],
    "sentences": [{
        "content": "When I turned 31, I thought I was too old to apply for a full-time MBA program.",
        "beginOffset": -1
    }, {
        "content": "Although I had been considering pursuing the degree on and off for eight years, I hadn’t found the right fit.",
        "beginOffset": -1
    }, {
        "content": "It seemed difficult to start school and move to a new city at a time when my life felt fragmented and the program itself was still evolving, but Cornell Tech attracted me because I could complete the entire degree in one year, and it focused on two of my passions: tech and entrepreneurship.",
        "beginOffset": -1
    }, {
        "content": "New York is a great city.",
        "beginOffset": -1
    }, {
        "content": "December 21st 2016 will be amazing.",
        "beginOffset": -1
    }, {
        "content": "Distraction.",
        "beginOffset": -1
    }, {
        "content": "Before Cornell Tech I was studying in Tel Aviv Jaffa College.",
        "beginOffset": -1
    }, {
        "content": "Israel is cool.",
        "beginOffset": -1
    }, {
        "content": "Michael Bloomberg invest a lot of money in Nasdaq.",
        "beginOffset": -1
    }],
    "tokens": [{
        "text": {
            "content": "When",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 2,
            "label": "ADVMOD"
        },
        "lemma": "When"
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 2,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "turned",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "ADVCL"
        },
        "lemma": "turn"
    }, {
        "text": {
            "content": "31",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NUM"
        },
        "dependencyEdge": {
            "headTokenIndex": 2,
            "label": "DOBJ"
        },
        "lemma": "31"
    }, {
        "text": {
            "content": ",",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "P"
        },
        "lemma": ","
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "thought",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "ROOT"
        },
        "lemma": "think"
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "was",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "CCOMP"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "too",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 10,
            "label": "ADVMOD"
        },
        "lemma": "too"
    }, {
        "text": {
            "content": "old",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "ACOMP"
        },
        "lemma": "old"
    }, {
        "text": {
            "content": "to",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRT"
        },
        "dependencyEdge": {
            "headTokenIndex": 12,
            "label": "AUX"
        },
        "lemma": "to"
    }, {
        "text": {
            "content": "apply",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 10,
            "label": "XCOMP"
        },
        "lemma": "apply"
    }, {
        "text": {
            "content": "for",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 12,
            "label": "PREP"
        },
        "lemma": "for"
    }, {
        "text": {
            "content": "a",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 19,
            "label": "DET"
        },
        "lemma": "a"
    }, {
        "text": {
            "content": "full",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 17,
            "label": "AMOD"
        },
        "lemma": "full"
    }, {
        "text": {
            "content": "-",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 17,
            "label": "P"
        },
        "lemma": "-"
    }, {
        "text": {
            "content": "time",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 19,
            "label": "NN"
        },
        "lemma": "time"
    }, {
        "text": {
            "content": "MBA",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 19,
            "label": "NN"
        },
        "lemma": "MBA"
    }, {
        "text": {
            "content": "program",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 13,
            "label": "POBJ"
        },
        "lemma": "program"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "Although",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 25,
            "label": "MARK"
        },
        "lemma": "Although"
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 25,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "had",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 25,
            "label": "AUX"
        },
        "lemma": "have"
    }, {
        "text": {
            "content": "been",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 25,
            "label": "AUX"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "considering",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "ADVCL"
        },
        "lemma": "consider"
    }, {
        "text": {
            "content": "pursuing",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 25,
            "label": "XCOMP"
        },
        "lemma": "pursue"
    }, {
        "text": {
            "content": "the",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 28,
            "label": "DET"
        },
        "lemma": "the"
    }, {
        "text": {
            "content": "degree",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 26,
            "label": "DOBJ"
        },
        "lemma": "degree"
    }, {
        "text": {
            "content": "on",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 26,
            "label": "ADVMOD"
        },
        "lemma": "on"
    }, {
        "text": {
            "content": "and",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "CONJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 29,
            "label": "CC"
        },
        "lemma": "and"
    }, {
        "text": {
            "content": "off",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 29,
            "label": "CONJ"
        },
        "lemma": "off"
    }, {
        "text": {
            "content": "for",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 26,
            "label": "PREP"
        },
        "lemma": "for"
    }, {
        "text": {
            "content": "eight",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NUM"
        },
        "dependencyEdge": {
            "headTokenIndex": 34,
            "label": "NUM"
        },
        "lemma": "eight"
    }, {
        "text": {
            "content": "years",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 32,
            "label": "POBJ"
        },
        "lemma": "year"
    }, {
        "text": {
            "content": ",",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "P"
        },
        "lemma": ","
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "had",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "AUX"
        },
        "lemma": "have"
    }, {
        "text": {
            "content": "n’t",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "NEG"
        },
        "lemma": "n’t"
    }, {
        "text": {
            "content": "found",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "ROOT"
        },
        "lemma": "find"
    }, {
        "text": {
            "content": "the",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 42,
            "label": "DET"
        },
        "lemma": "the"
    }, {
        "text": {
            "content": "right",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 42,
            "label": "AMOD"
        },
        "lemma": "right"
    }, {
        "text": {
            "content": "fit",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "DOBJ"
        },
        "lemma": "fit"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 39,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "It",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "NSUBJ"
        },
        "lemma": "It"
    }, {
        "text": {
            "content": "seemed",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "ROOT"
        },
        "lemma": "seem"
    }, {
        "text": {
            "content": "difficult",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "ACOMP"
        },
        "lemma": "difficult"
    }, {
        "text": {
            "content": "to",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRT"
        },
        "dependencyEdge": {
            "headTokenIndex": 48,
            "label": "AUX"
        },
        "lemma": "to"
    }, {
        "text": {
            "content": "start",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "XCOMP"
        },
        "lemma": "start"
    }, {
        "text": {
            "content": "school",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 48,
            "label": "DOBJ"
        },
        "lemma": "school"
    }, {
        "text": {
            "content": "and",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "CONJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 48,
            "label": "CC"
        },
        "lemma": "and"
    }, {
        "text": {
            "content": "move",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 48,
            "label": "CONJ"
        },
        "lemma": "move"
    }, {
        "text": {
            "content": "to",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 51,
            "label": "PREP"
        },
        "lemma": "to"
    }, {
        "text": {
            "content": "a",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 55,
            "label": "DET"
        },
        "lemma": "a"
    }, {
        "text": {
            "content": "new",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 55,
            "label": "AMOD"
        },
        "lemma": "new"
    }, {
        "text": {
            "content": "city",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 52,
            "label": "POBJ"
        },
        "lemma": "city"
    }, {
        "text": {
            "content": "at",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 51,
            "label": "PREP"
        },
        "lemma": "at"
    }, {
        "text": {
            "content": "a",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 58,
            "label": "DET"
        },
        "lemma": "a"
    }, {
        "text": {
            "content": "time",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 56,
            "label": "POBJ"
        },
        "lemma": "time"
    }, {
        "text": {
            "content": "when",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 62,
            "label": "ADVMOD"
        },
        "lemma": "when"
    }, {
        "text": {
            "content": "my",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 61,
            "label": "POSS"
        },
        "lemma": "my"
    }, {
        "text": {
            "content": "life",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 62,
            "label": "NSUBJ"
        },
        "lemma": "life"
    }, {
        "text": {
            "content": "felt",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 58,
            "label": "RCMOD"
        },
        "lemma": "feel"
    }, {
        "text": {
            "content": "fragmented",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 62,
            "label": "ACOMP"
        },
        "lemma": "fragmented"
    }, {
        "text": {
            "content": "and",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "CONJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 62,
            "label": "CC"
        },
        "lemma": "and"
    }, {
        "text": {
            "content": "the",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 66,
            "label": "DET"
        },
        "lemma": "the"
    }, {
        "text": {
            "content": "program",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 70,
            "label": "NSUBJ"
        },
        "lemma": "program"
    }, {
        "text": {
            "content": "itself",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 66,
            "label": "NN"
        },
        "lemma": "itself"
    }, {
        "text": {
            "content": "was",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 70,
            "label": "AUX"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "still",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADV"
        },
        "dependencyEdge": {
            "headTokenIndex": 70,
            "label": "ADVMOD"
        },
        "lemma": "still"
    }, {
        "text": {
            "content": "evolving",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 62,
            "label": "CONJ"
        },
        "lemma": "evolve"
    }, {
        "text": {
            "content": ",",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "P"
        },
        "lemma": ","
    }, {
        "text": {
            "content": "but",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "CONJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "CC"
        },
        "lemma": "but"
    }, {
        "text": {
            "content": "Cornell",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 74,
            "label": "NN"
        },
        "lemma": "Cornell"
    }, {
        "text": {
            "content": "Tech",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 75,
            "label": "NSUBJ"
        },
        "lemma": "Tech"
    }, {
        "text": {
            "content": "attracted",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "CONJ"
        },
        "lemma": "attract"
    }, {
        "text": {
            "content": "me",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 75,
            "label": "DOBJ"
        },
        "lemma": "me"
    }, {
        "text": {
            "content": "because",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "MARK"
        },
        "lemma": "because"
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "could",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "AUX"
        },
        "lemma": "could"
    }, {
        "text": {
            "content": "complete",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 75,
            "label": "ADVCL"
        },
        "lemma": "complete"
    }, {
        "text": {
            "content": "the",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 83,
            "label": "DET"
        },
        "lemma": "the"
    }, {
        "text": {
            "content": "entire",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 83,
            "label": "AMOD"
        },
        "lemma": "entire"
    }, {
        "text": {
            "content": "degree",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "DOBJ"
        },
        "lemma": "degree"
    }, {
        "text": {
            "content": "in",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "PREP"
        },
        "lemma": "in"
    }, {
        "text": {
            "content": "one",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NUM"
        },
        "dependencyEdge": {
            "headTokenIndex": 86,
            "label": "NUM"
        },
        "lemma": "one"
    }, {
        "text": {
            "content": "year",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 84,
            "label": "POBJ"
        },
        "lemma": "year"
    }, {
        "text": {
            "content": ",",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "P"
        },
        "lemma": ","
    }, {
        "text": {
            "content": "and",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "CONJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "CC"
        },
        "lemma": "and"
    }, {
        "text": {
            "content": "it",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 90,
            "label": "NSUBJ"
        },
        "lemma": "it"
    }, {
        "text": {
            "content": "focused",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 80,
            "label": "CONJ"
        },
        "lemma": "focuse"
    }, {
        "text": {
            "content": "on",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 90,
            "label": "PREP"
        },
        "lemma": "on"
    }, {
        "text": {
            "content": "two",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NUM"
        },
        "dependencyEdge": {
            "headTokenIndex": 91,
            "label": "POBJ"
        },
        "lemma": "two"
    }, {
        "text": {
            "content": "of",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 92,
            "label": "PREP"
        },
        "lemma": "of"
    }, {
        "text": {
            "content": "my",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 95,
            "label": "POSS"
        },
        "lemma": "my"
    }, {
        "text": {
            "content": "passions",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 93,
            "label": "POBJ"
        },
        "lemma": "passion"
    }, {
        "text": {
            "content": ":",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 92,
            "label": "P"
        },
        "lemma": ":"
    }, {
        "text": {
            "content": "tech",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 92,
            "label": "APPOS"
        },
        "lemma": "tech"
    }, {
        "text": {
            "content": "and",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "CONJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 97,
            "label": "CC"
        },
        "lemma": "and"
    }, {
        "text": {
            "content": "entrepreneurship",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 97,
            "label": "CONJ"
        },
        "lemma": "entrepreneurship"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 45,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "New",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 102,
            "label": "NN"
        },
        "lemma": "New"
    }, {
        "text": {
            "content": "York",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 103,
            "label": "NSUBJ"
        },
        "lemma": "York"
    }, {
        "text": {
            "content": "is",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 103,
            "label": "ROOT"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "a",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 106,
            "label": "DET"
        },
        "lemma": "a"
    }, {
        "text": {
            "content": "great",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 106,
            "label": "AMOD"
        },
        "lemma": "great"
    }, {
        "text": {
            "content": "city",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 103,
            "label": "ATTR"
        },
        "lemma": "city"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 103,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "December",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 109,
            "label": "NN"
        },
        "lemma": "December"
    }, {
        "text": {
            "content": "21st",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 112,
            "label": "NSUBJ"
        },
        "lemma": "21st"
    }, {
        "text": {
            "content": "2016",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NUM"
        },
        "dependencyEdge": {
            "headTokenIndex": 109,
            "label": "NUM"
        },
        "lemma": "2016"
    }, {
        "text": {
            "content": "will",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 112,
            "label": "AUX"
        },
        "lemma": "will"
    }, {
        "text": {
            "content": "be",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 112,
            "label": "ROOT"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "amazing",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 112,
            "label": "ACOMP"
        },
        "lemma": "amazing"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 112,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "Distraction",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 115,
            "label": "ROOT"
        },
        "lemma": "Distraction"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 115,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "Before",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 122,
            "label": "PREP"
        },
        "lemma": "Before"
    }, {
        "text": {
            "content": "Cornell",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 119,
            "label": "NN"
        },
        "lemma": "Cornell"
    }, {
        "text": {
            "content": "Tech",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 117,
            "label": "POBJ"
        },
        "lemma": "Tech"
    }, {
        "text": {
            "content": "I",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PRON"
        },
        "dependencyEdge": {
            "headTokenIndex": 122,
            "label": "NSUBJ"
        },
        "lemma": "I"
    }, {
        "text": {
            "content": "was",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 122,
            "label": "AUX"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "studying",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 122,
            "label": "ROOT"
        },
        "lemma": "study"
    }, {
        "text": {
            "content": "in",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 122,
            "label": "PREP"
        },
        "lemma": "in"
    }, {
        "text": {
            "content": "Tel",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 127,
            "label": "NN"
        },
        "lemma": "Tel"
    }, {
        "text": {
            "content": "Aviv",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 127,
            "label": "NN"
        },
        "lemma": "Aviv"
    }, {
        "text": {
            "content": "Jaffa",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 127,
            "label": "NN"
        },
        "lemma": "Jaffa"
    }, {
        "text": {
            "content": "College",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 123,
            "label": "POBJ"
        },
        "lemma": "College"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 122,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "Israel",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 130,
            "label": "NSUBJ"
        },
        "lemma": "Israel"
    }, {
        "text": {
            "content": "is",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 130,
            "label": "ROOT"
        },
        "lemma": "be"
    }, {
        "text": {
            "content": "cool",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADJ"
        },
        "dependencyEdge": {
            "headTokenIndex": 130,
            "label": "ACOMP"
        },
        "lemma": "cool"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 130,
            "label": "P"
        },
        "lemma": "."
    }, {
        "text": {
            "content": "Michael",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 134,
            "label": "NN"
        },
        "lemma": "Michael"
    }, {
        "text": {
            "content": "Bloomberg",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 135,
            "label": "NSUBJ"
        },
        "lemma": "Bloomberg"
    }, {
        "text": {
            "content": "invest",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "VERB"
        },
        "dependencyEdge": {
            "headTokenIndex": 135,
            "label": "ROOT"
        },
        "lemma": "invest"
    }, {
        "text": {
            "content": "a",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "DET"
        },
        "dependencyEdge": {
            "headTokenIndex": 137,
            "label": "DET"
        },
        "lemma": "a"
    }, {
        "text": {
            "content": "lot",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 135,
            "label": "DOBJ"
        },
        "lemma": "lot"
    }, {
        "text": {
            "content": "of",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 137,
            "label": "PREP"
        },
        "lemma": "of"
    }, {
        "text": {
            "content": "money",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 138,
            "label": "POBJ"
        },
        "lemma": "money"
    }, {
        "text": {
            "content": "in",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "ADP"
        },
        "dependencyEdge": {
            "headTokenIndex": 135,
            "label": "PREP"
        },
        "lemma": "in"
    }, {
        "text": {
            "content": "Nasdaq",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "NOUN"
        },
        "dependencyEdge": {
            "headTokenIndex": 140,
            "label": "POBJ"
        },
        "lemma": "Nasdaq"
    }, {
        "text": {
            "content": ".",
            "beginOffset": -1
        },
        "partOfSpeech": {
            "tag": "PUNCT"
        },
        "dependencyEdge": {
            "headTokenIndex": 135,
            "label": "P"
        },
        "lemma": "."
    }],
    "hashmap": {
        "Michael Bloomberg": {
            "name": "Michael Bloomberg",
            "type": "PERSON",
            "metadata": {
                "wikipedia_url": "http://en.wikipedia.org/wiki/Michael_Bloomberg"
            },
            "salience": 0.9714799001812935,
            "mentions": [{
                "text": {
                    "content": "Michael Bloomberg",
                    "beginOffset": -1
                }
            }],
            "images": [{
                "type": "image/jpeg",
                "width": 665,
                "height": 913,
                "size": 52308,
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Michael_R_Bloomberg.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTri2bEFNmP_IceGuYSX7C4yB-gDR8mseZjXTgB7DOPpjf_xA0hHDaGSiQ",
                    "width": 107,
                    "height": 147
                }
            }, {
                "type": "image/jpeg",
                "width": 992,
                "height": 559,
                "size": 48462,
                "url": "http://a.abcnews.com/images/Politics/GTY_michael_bloomberg_jt_160123_16x9_992.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2-WRC4VSmggUJpwBEexefBXsCx2pBVXduKJq8k6UbamvIiPbQB_kM1Pw",
                    "width": 149,
                    "height": 84
                }
            }, {
                "type": "image/jpeg",
                "width": 768,
                "height": 576,
                "size": 45166,
                "url": "https://static01.nyt.com/images/2016/07/25/us/25bloomberg/25bloomberg-master768.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnl_lyFrBx1ymCFTkwRo9G_sNe16PTAj2c9PJGBzNR6EJYYfToP5Jo6e41",
                    "width": 142,
                    "height": 107
                }
            }, {
                "type": "image/jpeg",
                "width": 1600,
                "height": 800,
                "size": 106972,
                "url": "http://esq.h-cdn.co/assets/16/03/1600x800/landscape-1453569282-gettyimages-159690433.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tG5WxuULFamo6fgEUw-H6RpSXQik4UwwAEPmzaS5JmQCepD0i6cWW2mw",
                    "width": 150,
                    "height": 75
                }
            }, {
                "type": "image/jpeg",
                "width": 620,
                "height": 412,
                "size": 71180,
                "url": "http://media.salon.com/2016/01/trump_bloomberg-620x412.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbq5j7Rv81RiRuMYO9pYEmQbIJwHoaX7-mqlqWofivYdIM059wQISN20pF",
                    "width": 136,
                    "height": 90
                }
            }, {
                "type": "image/jpeg",
                "width": 400,
                "height": 280,
                "size": 21752,
                "url": "http://images.forbes.com/media/lists/10/2009/michael-bloomberg.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRInaB0GdqRX29bls7wNtBS9b8pOjzZJlg7LofbloCl4X2FTpWGubY68UI",
                    "width": 124,
                    "height": 87
                }
            }, {
                "type": "image/jpeg",
                "width": 1536,
                "height": 1024,
                "size": 290397,
                "url": "http://i.huffpost.com/gen/907595/images/o-MICHAEL-BLOOMBERG-GUN-CONTROL-facebook.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbLXv9btd1Qy4lCwt8cdXcDZK35KRZGwztmGF-wVNJuU3YwAne11MjB2IM",
                    "width": 150,
                    "height": 100
                }
            }, {
                "type": "image/jpeg",
                "width": 928,
                "height": 523,
                "size": 47438,
                "url": "http://cdn3.thr.com/sites/default/files/imagecache/landscape_928x523/2013/04/michael_bloomberg.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLZMIx5d-yvjxfjD_Z8eh0zNwjsW9FPDzgOdY0Gn-l310Wgnh7ZzvfNcI",
                    "width": 147,
                    "height": 83
                }
            }, {
                "type": "image/jpeg",
                "width": 650,
                "height": 400,
                "size": 46039,
                "url": "http://cdn.theatlantic.com/assets/media/img/posts/bloombergpoint.banner.reuters.jpg.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOCyl061wV4cMMtmHyO83WevA0Tyob6Q0mkV4W50W1VKGVTikpcS_fHbKk",
                    "width": 137,
                    "height": 84
                }
            }, {
                "type": "image/jpeg",
                "width": 885,
                "height": 516,
                "size": 51234,
                "url": "http://twt-thumbs.washtimes.com/media/image/2015/10/27/bloomberg_c0-0-970-565_s885x516.jpg?eecf4f5849beafb0f1553ce374128c718fb7e8b5",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsmid29vfP4Wb4VS3AC7-bnxUB2wnirCkVgJR77_KCC_xphgskBQ0RHU",
                    "width": 146,
                    "height": 85
                }
            }]
        },
        "New York": {
            "name": "New York",
            "type": "LOCATION",
            "metadata": {
                "wikipedia_url": "http://en.wikipedia.org/wiki/New_York_City"
            },
            "salience": 4.998599365353584,
            "mentions": [{
                "text": {
                    "content": "New York",
                    "beginOffset": -1
                }
            }],
            "images": [{
                "type": "image/jpeg",
                "width": 3911,
                "height": 2600,
                "size": 2150581,
                "url": "http://cache.marriott.com/Images/HWS_Messages/Meetings_In_New_York.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgdWxIhBZTrmZ1JBOsYk4fa-D1UEqH0y-k1n5xAmxHv5bHAH-9eCUYjOIh",
                    "width": 150,
                    "height": 100
                }
            }, {
                "type": "image/jpeg",
                "width": 800,
                "height": 376,
                "size": 196828,
                "url": "http://usa.sae.edu/assets/Campuses/New-York/2015/New_York_City_view.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRN-uT1zorz-CYHtSiEKUrG5q1TZAqhDctjR1wxJb2Cdwey-OvDcQyuoA",
                    "width": 143,
                    "height": 67
                }
            }, {
                "type": "image/jpeg",
                "width": 1200,
                "height": 800,
                "size": 309104,
                "url": "http://www.newyorker.com/wp-content/uploads/2015/12/Veix-Goodbye-New-York-Color-1200.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkuPrQaoRfGS_LWCAL7JkTRh8myYqbV_cH7LhHjQ7NM9kaRXsRf3-PZAei",
                    "width": 150,
                    "height": 100
                }
            }, {
                "type": "image/jpeg",
                "width": 2048,
                "height": 1365,
                "size": 971501,
                "url": "https://media.timeout.com/images/102920649/image.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgmqMmjzaqL1az_pJER7hBojbOLMcte3oKV7HHL7pyiz3fRFdkHQXxxP2v",
                    "width": 150,
                    "height": 100
                }
            }, {
                "type": "image/jpeg",
                "width": 1920,
                "height": 690,
                "size": 487128,
                "url": "https://www.cornellclubnyc.com/Images/Library/slider-2.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj3KyErJtAVIXPkMyn5wwwBHr4LGIM-uxkl-ewXxYOgcUMqoqd6I2jzemv",
                    "width": 150,
                    "height": 54
                }
            }, {
                "type": "image/jpeg",
                "width": 1536,
                "height": 1151,
                "size": 516107,
                "url": "http://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline1536.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ1YPBd1aEhpkUn3SxOaEpi_1mVlffH4DynhtAH3KUfJY7Qbtz3h-CoDY",
                    "width": 150,
                    "height": 112
                }
            }, {
                "type": "image/jpeg",
                "width": 550,
                "height": 331,
                "size": 49071,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQrBzlxaQ52wIcfioBU2p3SVrVTE5wds4cazjXfNAbUHY1sAOkk66Uf3v",
                    "width": 133,
                    "height": 80
                }
            }, {
                "type": "image/jpeg",
                "width": 2000,
                "height": 1000,
                "size": 634792,
                "url": "http://www.izzysnypizza.com/wp-content/uploads/2015/01/izzy-ny-pizza.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UcEFgsV4P2QdpqL7VnH2UQYmLKNdB43syM437oW35KRKZeazm5syrE8",
                    "width": 150,
                    "height": 75
                }
            }, {
                "type": "image/jpeg",
                "width": 1400,
                "height": 787,
                "size": 376735,
                "url": "http://www.sofitel.com/imagerie/destinations/city/new-york-overview-1400x788-1.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7XaMjFwNZZ7hEyPGKtsnjgtDAxEe51kGNCKNwkMtPlJlt5ozxnFsLl7h6",
                    "width": 150,
                    "height": 84
                }
            }, {
                "type": "image/jpeg",
                "width": 550,
                "height": 325,
                "size": 36805,
                "url": "https://static.mgmresorts.com/content/dam/MGM/new-york-new-york/entertainment/attractions/hersheys-chocolate-world/new-york-new-york-hersheys-brooklyn-bridge-exterior-lifestyle.tif.image.550.325.high.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKwo4djBkeaGRPGa6uI9xvcUrE1RQzQurnHu4j49ixbzGQLPCV0uFjMNE",
                    "width": 133,
                    "height": 79
                }
            }]
        },
        "Israel": {
            "name": "Israel",
            "type": "LOCATION",
            "metadata": {
                "wikipedia_url": "http://en.wikipedia.org/wiki/Israel"
            },
            "salience": 1.55072920024395,
            "mentions": [{
                "text": {
                    "content": "Israel",
                    "beginOffset": -1
                }
            }],
            "images": [{
                "type": "image/png",
                "width": 2000,
                "height": 2580,
                "size": 1166276,
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Map_of_Israel,_neighbours_and_occupied_territories.svg/2000px-Map_of_Israel,_neighbours_and_occupied_territories.svg.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSika5gzKXcQd4_Z0YO1OiYnJMQxC6qX8-nbPcFXSPB6qrMr7pxobRtHy3W",
                    "width": 116,
                    "height": 150
                }
            }, {
                "type": "image/jpeg",
                "width": 805,
                "height": 405,
                "size": 449383,
                "url": "https://www.touristisrael.com/wp-content/uploads/bigstock-Panorama-of-Jerusalem-old-city-848642421.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGEJukSBQ3gz3oB1knAIYPb_4yLEmu1eMa2czeZ3WsAbpem6q6JzFqu0mJ",
                    "width": 143,
                    "height": 72
                }
            }, {
                "type": "image/jpeg",
                "width": 4217,
                "height": 2767,
                "size": 14779903,
                "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Israel_Supreme_Court.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRj6kzfyzn6xQGTHfwsREtDQMOLVPXZhKjHK-9nCTRAuaX52abotb_YTGU",
                    "width": 150,
                    "height": 98
                }
            }, {
                "type": "image/jpeg",
                "width": 424,
                "height": 283,
                "size": 48444,
                "url": "https://www.sixt.com/fileadmin/user_upload/pictures-city-page/israel-country.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaW7VXBLJOZEgT-YIjG6ZLY22Fh2wCgz-GwYpJhhD5HgzYKtt6jWepC9E",
                    "width": 126,
                    "height": 84
                }
            }, {
                "type": "image/svg+xml",
                "width": 2168,
                "height": 3300,
                "size": 292626,
                "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Kingdom_of_Israel_1020_map.svg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMRTf_-k78ydZP9K2MBqAolv5b8VsHDE_RmBMtPDbxIEAJWmLemAy8Ihg",
                    "width": 99,
                    "height": 150
                }
            }, {
                "type": "image/jpeg",
                "width": 1600,
                "height": 900,
                "size": 210137,
                "url": "https://media.gadventures.com/media-server/cache/db/e3/dbe36311a14a6b7d893d87be41e00284.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWn0iSUZ2iGUzEn_5jom_TwZZiavSoVlYU-kckroZnoYheTY82okOSQP8",
                    "width": 150,
                    "height": 84
                }
            }, {
                "type": "image/jpeg",
                "width": 1600,
                "height": 1106,
                "size": 300349,
                "url": "http://s3.amazonaws.com/iexplore_web/images/assets/000/006/295/original/israel.jpg?1443185316",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQirGjigvfy6Ix48gfIughfC855VSceKi-occCtcRS1uCQx2kZjNEGTpH0",
                    "width": 150,
                    "height": 104
                }
            }, {
                "type": "image/jpeg",
                "width": 2048,
                "height": 1536,
                "size": 698597,
                "url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/PikiWiki_Israel_19099_ruins_of_tel_aviv_dolphinarium.JPG",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAzM5D564qnGmSCpLZexbPNTLoSl1005YYb1o87KwAkHrpxe5Z_WZ7GRET",
                    "width": 150,
                    "height": 113
                }
            }, {
                "type": "image/png",
                "width": 1032,
                "height": 727,
                "size": 85927,
                "url": "http://www.operationworld.org/files/ow/maps/lgmap/isra-MMAP-md.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUD_yCKdpwlYUR3dZjtg4otmODMTZGKbFSjeCPJKlEZ4KVXzvt_SpgmC8",
                    "width": 150,
                    "height": 106
                }
            }, {
                "type": "image/jpeg",
                "width": 420,
                "height": 545,
                "size": 31649,
                "url": "http://www.nationsencyclopedia.com/photos/israel-1357.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8U3W2Mb5F-8oBd9AqiKN04o9K3wgQrALtEqs9Aju9EMpk37fXFn7aUFw",
                    "width": 102,
                    "height": 133
                }
            }]
        },
        "Cornell Tech": {
            "name": "Cornell Tech",
            "type": "ORGANIZATION",
            "metadata": {
                "wikipedia_url": "http://en.wikipedia.org/wiki/Cornell_Tech"
            },
            "salience": 21.201691031455994,
            "mentions": [{
                "text": {
                    "content": "Cornell Tech",
                    "beginOffset": -1
                }
            }, {
                "text": {
                    "content": "Cornell Tech",
                    "beginOffset": -1
                }
            }],
            "images": [{
                "type": "image/jpeg",
                "width": 1200,
                "height": 652,
                "size": 173345,
                "url": "http://static1.businessinsider.com/image/536a55c3eab8ea0f07187ab2-1200-652/campus_lawn_revise-1.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_onzwWi6BCz8N-mncnPqGxucCYVMmF9Bg4QdTnJQm6rXDOYMTEj2lUCb2",
                    "width": 150,
                    "height": 82
                }
            }, {
                "type": "image/jpeg",
                "width": 1000,
                "height": 585,
                "size": 188939,
                "url": "https://static1.squarespace.com/static/562d2466e4b0947cbf0e8eb7/t/56e7050fd210b8f0cedf2904/1457980697930/background.jpg?format=1500w",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFMXGf1wx1I8J4jRjwBvMd0PttmbuCHXxF6LbXp5r5nK8OwsPVuG2WwMg",
                    "width": 149,
                    "height": 87
                }
            }, {
                "type": "image/png",
                "width": 1200,
                "height": 721,
                "size": 139586,
                "url": "http://static2.businessinsider.com/image/536a5aa469beddd664d1b080-1200-750/screen%20shot%202014-05-07%20at%2012.08.36%20pm.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIFCGR5DK97T90fVQa8NMCO553frY1LepL3T7RgIyPb74R5ZS_N7lSlM",
                    "width": 150,
                    "height": 90
                }
            }, {
                "type": "image/jpeg",
                "width": 1400,
                "height": 789,
                "size": 442471,
                "url": "http://b-i.forbesimg.com/peterhigh/files/2014/01/Cornell-NYC-Tech.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNftzvr907N-DULi-wZXtq3wtie9RT9QJENW-oPg_m3YRJ4W4YxBz9MSY",
                    "width": 150,
                    "height": 85
                }
            }, {
                "type": "image/png",
                "width": 455,
                "height": 210,
                "size": 6280,
                "url": "http://www.217pta.com/uploads/1/7/9/9/17996371/1466086_orig.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCWMTt64Ev_R1-a6OGDbg9YLm9aqFUNTDf6410Ra229UbBn7v88u176S4",
                    "width": 128,
                    "height": 59
                }
            }, {
                "type": "image/png",
                "width": 822,
                "height": 616,
                "size": 123228,
                "url": "http://static3.businessinsider.com/image/536a7bfa69bedd5d6fd26826-822-616/cornell-tech-campus.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkR7kZGU0LJNnhE-rdVYIDq3OIQd47jl0XSJZ1x_1GmfcUAnmXyuns2X8y",
                    "width": 144,
                    "height": 108
                }
            }, {
                "type": "image/jpeg",
                "width": 822,
                "height": 616,
                "size": 123228,
                "url": "http://www.217pta.com/uploads/1/7/9/9/17996371/1792380_orig.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTj5KiwpxQ0traNUpgAHOJhkW9pLd-tjs9CoWipmd-GswRM4JE-WQeJwq0",
                    "width": 144,
                    "height": 108
                }
            }, {
                "type": "image/jpeg",
                "width": 465,
                "height": 278,
                "size": 121663,
                "url": "http://www.newyorker.com/wp-content/uploads/2012/10/CornellTech_465px.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvlFB0bu6rbiRV7PZgGp7czaL8qkFjOIb8t64ResZl8DXAo4SZDy3DVI0",
                    "width": 128,
                    "height": 77
                }
            }, {
                "type": "image/jpeg",
                "width": 919,
                "height": 500,
                "size": 412517,
                "url": "https://tech.cornell.edu/images/made/uploads/posts/The_Bridge_-_Credit_Weiss_Manfredi_919_500_c1.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8OP1Lp01lBHyWbojb9TrlQQWCxr-8c5wSqUlt5uAKU5RND22F6MjdST_q",
                    "width": 147,
                    "height": 80
                }
            }, {
                "type": "image/jpeg",
                "width": 1851,
                "height": 600,
                "size": 159039,
                "url": "https://cdn0.vox-cdn.com/thumbor/xKwbk0hb8rZeWKbBACIj7mLUv7w=/0x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/5066285/cornell_tech_pocket_guide.0.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSs1pazeL3Gh9pd9MfM5s32vLnN3EtXvlyaaBjw1oDy8v96dspW_WiSJl8",
                    "width": 150,
                    "height": 49
                }
            }]
        },
        "Tel Aviv Jaffa College": {
            "name": "Tel Aviv Jaffa College",
            "type": "ORGANIZATION",
            "metadata": {},
            "salience": 1.1892742477357388,
            "mentions": [{
                "text": {
                    "content": "Tel Aviv Jaffa College",
                    "beginOffset": -1
                }
            }],
            "images": [{
                "type": "image/png",
                "width": 200,
                "height": 200,
                "size": 5690,
                "url": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/1/005/01d/27a/1851c47.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzcu129OxS2UMFzZ2p1DVUenb-YZl2Nw2W7Jz7LsdbCDh1wDyWLt0f7Q",
                    "width": 104,
                    "height": 104
                }
            }, {
                "type": "image/jpeg",
                "width": 600,
                "height": 300,
                "size": 79679,
                "url": "http://www.lan-alum.com/wordpress/wp-content/uploads/2014/03/1328-003-600x300.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4NeW2s-feagGAQhuRxSZSrPRuhlXgrv602CRxlCjQpIN1lsJsvLPSE8ym",
                    "width": 135,
                    "height": 68
                }
            }, {
                "type": "image/",
                "width": 400,
                "height": 254,
                "size": 38155,
                "url": "http://www.jpost.com/HttpHandlers/ShowImage.ashx?ID=319118",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSH4kVXIMhHoUUPIKepy8WRXxUj1nymuvRewbtvPmX0cnTRim4PFIRek",
                    "width": 124,
                    "height": 79
                }
            }, {
                "type": "image/jpeg",
                "width": 200,
                "height": 90,
                "size": 8503,
                "url": "https://acty.mta.ac.il/Style%20Library/MtaMarketingImagesEn/logo_en.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRadc1tRe8LtaoHZ3UTNN35DqqgZKhLLPP-VGkbOSIvp-6Z1qjvW_aAgg",
                    "width": 104,
                    "height": 47
                }
            }, {
                "type": "image/jpeg",
                "width": 506,
                "height": 789,
                "size": 292989,
                "url": "http://dornsife.usc.edu/assets/sites/1/imgs/overseas/Israel/Old_Jaffa_the_port_and_Tel_Aviv.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTK10wXQ1n21kLJs7oEmrVXfAVbJ0kwOW8fu9vD7VRPe8dFJ72sT8GFc10",
                    "width": 92,
                    "height": 143
                }
            }, {
                "type": "image/jpeg",
                "width": 416,
                "height": 355,
                "size": 108988,
                "url": "http://www.telavivfoundation.org/UserFiles/project_photos/projects_a/acecon2.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnsp_4Ru1Wsx-EICzV9DLHCS9pX4z3SAkKQk6TiqLUKN3PLXiEDGlV6g",
                    "width": 125,
                    "height": 107
                }
            }, {
                "type": "image/jpeg",
                "width": 674,
                "height": 239,
                "size": 50942,
                "url": "https://media.licdn.com/mpr/mpr/shrinknp_674_240/AAEAAQAAAAAAAAYrAAAAJDE5MzA5MjUxLWUwZDctNDhhMC04ZDIxLTkyMDE3M2ZmMTViZA.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTutTkalcveXKR4ULR6znlVeBHrAb7rvnK4yIjJJyAPcXlXVlKe7lpra_CN",
                    "width": 138,
                    "height": 49
                }
            }, {
                "type": "image/jpeg",
                "width": 532,
                "height": 355,
                "size": 74159,
                "url": "http://www.telavivfoundation.org/UserFiles/project_photos/projects_g/Gutman_Library1.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfVsEt2nsnauPM9cg7QO2MA0aVYlBeLN4sq4HXZ6Vt1JmZ1UROmxUflKLd",
                    "width": 132,
                    "height": 88
                }
            }, {
                "type": "image/png",
                "width": 646,
                "height": 220,
                "size": 286603,
                "url": "https://media.licdn.com/media/p/8/000/2c1/01c/27dd202.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzn4SikGkEVmaR7ni8s-IaayglclFm_kUcgtsNGaz4ll4H1Ev4XGDxa2Bc",
                    "width": 137,
                    "height": 47
                }
            }, {
                "type": "image/jpeg",
                "width": 1024,
                "height": 768,
                "size": 99565,
                "url": "http://static.panoramio.com/photos/large/17864510.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEyC2FVHOuQQ45zdtPegCuOx1sSy6d-maeCHCJqP7Qsi23iC_gsPspO3Y",
                    "width": 150,
                    "height": 113
                }
            }]
        },
        "Nasdaq": {
            "name": "Nasdaq",
            "type": "ORGANIZATION",
            "metadata": {
                "wikipedia_url": "http://en.wikipedia.org/wiki/NASDAQ"
            },
            "salience": 1.1892742477357388,
            "mentions": [{
                "text": {
                    "content": "Nasdaq",
                    "beginOffset": -1
                }
            }],
            "images": [{
                "type": "image/jpeg",
                "width": 1320,
                "height": 742,
                "size": 508772,
                "url": "http://s.marketwatch.com/public/resources/MWimages/MW-DF139_nasdaq_ZG_20150209120238.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbL26YHTCYudX54nzhotP6-bAm69ebl9VsNDHKZ9a-hEnh7ssV3bcAc8Ud",
                    "width": 150,
                    "height": 84
                }
            }, {
                "type": "image/png",
                "width": 631,
                "height": 217,
                "size": 12657,
                "url": "http://www.nasdaq.com/ambition/img/logo.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXbRKJUlUx71NvOubEHD6apy-meaQ9ls0myhwPBgodIF6AGeAO_3ER4GnW",
                    "width": 137,
                    "height": 47
                }
            }, {
                "type": "image/jpeg",
                "width": 1024,
                "height": 768,
                "size": 474402,
                "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/NASDAQ_studio.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwGc0R_4SbApE-uUf6YdjHGD5nlNspy0WEZgezNTrKuiHyM1FJZwQP5-rJ",
                    "width": 150,
                    "height": 113
                }
            }, {
                "type": "image/png",
                "width": 378,
                "height": 108,
                "size": 8396,
                "url": "http://business.nasdaq.com/Images//Nasdaqlogo_homepage_tcm5044-15630.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSB9F7MuYj-OraZyAPTYy7K2Geb7fLgRFoqzrSRHvtqucHDRLtJGKtGjJs",
                    "width": 122,
                    "height": 35
                }
            }, {
                "type": "image/jpeg",
                "width": 620,
                "height": 350,
                "size": 82855,
                "url": "http://reconcapitalpartners.com/wp-content/uploads/Recon-Capital-Nasdaq-100-USA-Today-.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW7g1OM3Jo8c6po_0UJbgTTjILRmNz0-TMClnQ7dQxderGGiwlgu_0Ck3",
                    "width": 136,
                    "height": 77
                }
            }, {
                "type": "image/jpeg",
                "width": 299,
                "height": 188,
                "size": 27649,
                "url": "http://www.nasdaq.com/images/Ndotcom_microsite_299x188.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTu3rZiB1ooVkk54-SRkr8H_yD78oR20i9uLsNj3P7LN6kW4TztdmE7oA",
                    "width": 116,
                    "height": 73
                }
            }, {
                "type": "image/jpeg",
                "width": 2460,
                "height": 1620,
                "size": 251040,
                "url": "http://business.nasdaq.com/Images//L1_Pillar_headline_o_tcm5044-9600.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0o5_GVkeoxxA2WYj_ImdytGSYVVIGzKk_xDxIjn4jPCLvyybcAmFm2rO",
                    "width": 150,
                    "height": 99
                }
            }, {
                "type": "image/jpeg",
                "width": 1800,
                "height": 1200,
                "size": 431684,
                "url": "http://www.nasdaq.com/reference/tower2.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQReImR-bxKNmOQVtus77cgTo2Sr6VlrLMmh1bfpyfmNX4fnEmsWNYHDD1R",
                    "width": 150,
                    "height": 100
                }
            }, {
                "type": "image/jpeg",
                "width": 553,
                "height": 369,
                "size": 132942,
                "url": "https://si.wsj.net/public/resources/images/BA-BH301_NASDAQ_G_20150220192050.jpg",
                "thumbnail": {
                    "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFY5LCJ0TUnksCgCzeGW2c9OD8g3CnwpQtnGm7iJ-DlfrQKklCklxgf_mn",
                    "width": 133,
                    "height": 89
                }
            }, {
                "type": "image/png",
                "width": 631,
                "height": 631,
                "size": 30309,
                "url": "http://www.nasdaq.com/ambition/uploads/ckfinder/images/Nasdaq_Social.png",
                "thumbnail": {
                    "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS69ykTdUp7s9fhZ7g3eC1-qcJbWPOQnAIWmI7GyXqHykp-8po7uEKuZc_V7g",
                    "width": 137,
                    "height": 137
                }
            }]
        }
    }
};
