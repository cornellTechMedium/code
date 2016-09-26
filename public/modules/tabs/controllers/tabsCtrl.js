var FIRST_COMPANY_INDEX = 0;
var SECOND_COMPANY_INDEX = 1;

angular.module('tabsCtrl', ['tabsService', 'cardsService'])
.controller('tabsCtrl', function(Tabs, Cards) {
	
	self = this;

	// Grab all the items from Tabs Service
    Cards.all()
        .success(function(data) {
            self.companies = data;

            Tabs.all()
                .success(function(data) {
                    self.challenges = data;

                    self.challenges.list.forEach(function(challenge) {
                        challenge.companies[FIRST_COMPANY_INDEX]["company"] = self.companies.list[challenge.companies[FIRST_COMPANY_INDEX].id-1];
                        challenge.companies[SECOND_COMPANY_INDEX]["company"] = self.companies.list[challenge.companies[SECOND_COMPANY_INDEX].id-1];
                    });

                    console.log(self.challenges.list);
                })
                .error(function(data) {
                    // Error Handling
                });

        })
        .error(function(data) {
            // Error Handling
        });
});