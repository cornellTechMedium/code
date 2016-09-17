angular.module('listCtrl', ['listService'])
.controller('listCtrl', function(List, $stateParams) {
	
	self = this;

	// Grab all the items from List Service
	List.all($stateParams)
    .success(function(data) {
        self.listItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});