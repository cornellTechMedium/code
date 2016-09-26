var FIRST_COMPANY_INDEX = 0;
var SECOND_COMPANY_INDEX = 1;

angular.module('challengesCtrl', ['challengesService', 'companiesService'])
.controller('challengesCtrl', function(Tabs, Cards, $stateParams, $rootScope) {
	
	self = this;

    self.back = $rootScope.last;
    
	// Grab all the items from Tabs Service
    Cards.all()
        .success(function(data) {

            self.companies = data;

            Tabs.all()
                .success(function(data) {

                    // if this is a single challenge page
                    if ($stateParams.challengeId != null) {
                        data.list = [data.list[$stateParams.challengeId-1]];
                    }

                    self.challenges = data;

                    self.challenges.list.forEach(function(challenge) {
                        challenge.companies[FIRST_COMPANY_INDEX]["company"] = self.companies.list[challenge.companies[FIRST_COMPANY_INDEX].id-1];
                        challenge.companies[SECOND_COMPANY_INDEX]["company"] = self.companies.list[challenge.companies[SECOND_COMPANY_INDEX].id-1];
                        self.companies.list[challenge.companies[FIRST_COMPANY_INDEX].id-1]["challengeId"] = challenge.id;
                        self.companies.list[challenge.companies[SECOND_COMPANY_INDEX].id-1]["challengeId"] = challenge.id;
                    });
                })
                .error(function(data) {
                    // Error Handling
                });

        })
        .error(function(data) {
            // Error Handling
        });

    
});