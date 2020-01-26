(function () {
    app.controller('culturalController', culturalC);
    function culturalC() {
        var vm = this;
        vm.show = function() {
            angular.forEach(document.getElementsByClassName('evt'),function(element,key) {
                if(element.classList.contains("show")) {
                    element.classList.remove("show");
                }
            });
        };
    };
})();