angular.module('tabsCtrl', ['tabsService', 'cardsService'])
.controller('tabsCtrl', function(Tabs, Cards) {
	
	self = this;

	// Grab all the items from Tabs Service
	Tabs.all()
        .success(function(data) {
            self.challenges = data;
        })
        .error(function(data) {
            // Error Handling
        });

    Cards.all()
        .success(function(data) {
            self.companies = data;
        })
        .error(function(data) {
            // Error Handling
        });


});