(function () {
    app.controller('homeController', homeC);
    function homeC($scope) {
        var vm = this;
        vm.scroll = 0;
        vm.loading = true;

        /*LOADER*/
        $scope.$on('$viewContentLoaded', function (event) {
            vm.loading = false;
        });

        $(function () {
            $(window).keydown(function (e) {
                var keyCode = window.event ? e.keyCode : e.which;
                //UP
                if (keyCode == 38) {
                    if (vm.scroll != 0) {
                        vm.scroll -= 630;
                    } else {
                        vm.scroll = 0;
                    }
                    $('html, body').animate({ scrollTop: vm.scroll }, 100);
                    return false;
                }
                //DOWN
                if (keyCode == 40) {
                    if (vm.scroll < 2520) {
                        vm.scroll += 630;
                    }
                    $('html, body').animate({ scrollTop: vm.scroll }, 100);
                    return false;
                }
            });
        });

        var element = document.getElementById("animate");

        if (element) {
            // reset the transition by...
            element.addEventListener("click", function (e) {
                e.preventDefault;

                console.log('element', element.classList);

                // removing the class
                element.classList.remove("run-animation");

                // triggering reflow
                void element.offsetWidth;

                // and re-adding the class
                element.classList.add("run-animation");
            }, false);
        }

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 2180 || document.documentElement.scrollTop > 2180) {
                var logo = document.getElementById("samvidlogo");
                logo.style.height = '400px';
                logo.style.width = '400px';
                logo.style.top = '50%';
                logo.style.left = '50%';
                logo.style.transform = 'translate(-50%,-50%)';

            } else {
                var logo = document.getElementById("samvidlogo");
                logo.style.height = '140px';
                logo.style.width = '140px';
                logo.style.top = '0';
                logo.style.left = '0';
                logo.style.transform = 'translate(0,0)';
            }
        }
    };
})();