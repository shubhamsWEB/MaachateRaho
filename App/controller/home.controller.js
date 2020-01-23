(function () {
    app.controller('homeController', homeC);
    function homeC($scope) {
        var vm = this;
        vm.scroll = 0;
        vm.loading = true;
        
        /*LOADER*/
        $scope.$on('$viewContentLoaded', function(event)
        { 
         vm.loading = false;
         });
         
        $(function () {
            $(window).keydown(function (e) {
                var keyCode = window.event ? e.keyCode : e.which;
                //UP
                if (keyCode == 38) {
                    if(vm.scroll !=0) {
                    vm.scroll -= 630;
                    } else {
                        vm.scroll = 0;
                    }
                    $('html, body').animate({ scrollTop: vm.scroll }, 100);
                    return false;
                }
                //DOWN
                if (keyCode == 40) {
                    if(vm.scroll <2520) {
                    vm.scroll += 630;
                    }
                    $('html, body').animate({ scrollTop: vm.scroll }, 100);
                    return false;
                }
            });
        });
    };
})();