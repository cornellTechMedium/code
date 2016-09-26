angular.module('cardsCtrl', ['cardsService'])
.controller('cardsCtrl', function(Cards, $timeout, $q, $log, $stateParams) {

	self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newCompany = newCompany;

    function newCompany(company) {
        alert("Sorry! Company " + company + " does not participate in iTrek 2017!");
    }

    /**
     * Search for companies... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
        var results = query ? self.companiesSearchMap.filter( createFilterFor(query) ) : self.companiesSearchMap,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        // search for company name or tags related to company
        return function filterFn(company) {
            return (company.name.toLowerCase().indexOf(lowercaseQuery) === 0
                    || company.tags.indexOf(lowercaseQuery) != -1);
        };

    }

	// Grab all the items from Cards Service
	Cards.all()
    .success(function(data) {

        // if this is a single company page
        if ($stateParams.cardId != null) {
            data.list = [data.list[$stateParams.cardId-1]];
        } else {
            data.list.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });

            self.companiesSearchMap = data.list.map(function(company) {
                return company;
            });
        }

        self.cardItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

    Cards.goBack = function() {
        $window.history.back();
    };

});