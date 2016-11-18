angular.module('appCtrl', [])
.controller('appCtrl', function($mdSidenav, $stateParams, $rootScope, $location) {

    self = this;
    $rootScope.last = null;
    $rootScope.current = null;

    // Update title using rootscope
    self.updateTitle = function() {
        $rootScope.last = $rootScope.current;
        $rootScope.current = $location.url();
        $rootScope.title = $stateParams.title;
    };

    // Run updateTitle on each state change
    $rootScope.$on('$stateChangeSuccess', self.updateTitle);

	self.toggleLeft = function() {
    	$mdSidenav('left').toggle();
    }

    self.toggleRight = function() {
    	$mdSidenav('right').toggle();
    }    
});