(function () {
    app.controller('aboutController', aboutC);
    function aboutC($scope) {
        var vm = this;
        vm.loading = true;
        
        /*LOADER*/
        $scope.$on('$viewContentLoaded', function(event)
        { 
         vm.loading = false;
         });
    };
})();