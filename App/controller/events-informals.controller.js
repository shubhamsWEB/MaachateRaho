(function () {
    app.controller('informalsController', informalsC);
    function informalsC() {
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