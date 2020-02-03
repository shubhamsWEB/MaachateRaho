(function () {
    app.controller('contactController', contactC);
    function contactC() {
        var vm = this;
        vm.show = function () {
            angular.forEach(document.getElementsByClassName('evt'), function (element, key) {
                if (element.classList.contains("show")) {
                    element.classList.remove("show");
                }
            });
        };
    };
})();