angular.module('cardsCtrl', ['cardsService'])
.controller('cardsCtrl', function(Cards, $stateParams) {

	self = this;

	// Grab all the items from Cards Service
	Cards.all()
    .success(function(data) {

        if ($stateParams.cardId != null) {
            data.list = [data.list[$stateParams.cardId-1]];
        }

        console.log(data);
        self.cardItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});