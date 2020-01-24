(function () {
    app.controller('eventsController', eventsC);
    function eventsC($scope,$location) {
        var vm = this;
        vm.loading = true;
        
        /*LOADER*/
        $scope.$on('$viewContentLoaded', function(event)
        { 
         vm.loading = false;
         });
         vm.technical = function () {
             $location.path('Events/Technical');
         }
         vm.sports = function () {
            $location.path('Events/Sports');
        }
        vm.informals = function () {
            $location.path('Events/Informals');
        }
        vm.conclave = function () {
            $location.path('Events/Conclave');
        }
        vm.cultural = function () {
            $location.path('Events/Cultural');
        }
    };
    
})();