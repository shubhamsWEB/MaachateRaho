(function () {
    app.controller('eventsController', eventsC);
    function eventsC($scope) {
        var vm = this;
        vm.loading = true;
        
        /*LOADER*/
        $scope.$on('$viewContentLoaded', function(event)
        { 
         vm.loading = false;
         });
    };
    
})();