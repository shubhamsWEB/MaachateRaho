(function () {
    app.controller('technicalController', technicalC);
    function technicalC() {
        var vm = this;
        vm.show = function() {
        angular.forEach(document.getElementsByClassName('evt'),function(element,key) {
            element.setAttribute("aria-expanded",true);
            console.log(element.getAttribute("aria-expanded"));
        });
    };
    };
})();