(function () {
    app.controller('homeController', homeC);
    function homeC($scope) {
        var vm = this;
        vm.loading = true;
        
        /*LOADER*/
        $scope.$on('$viewContentLoaded', function(event)
        { 
         vm.loading = false;
         });
         
        $('#fullpage').fullpage();
    };
})();