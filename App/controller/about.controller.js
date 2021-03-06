﻿(function () {
    app.controller('aboutController', aboutC);
    function aboutC($scope) {
        var vm = this;
        vm.loading = true;
        
        /*LOADER*/
        $scope.$on('$viewContentLoaded', function(event)
        { 
         vm.loading = false;
         });
         
     /*MO.JS ANIMATION*/
     const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('mouseenter', shootLines));

function shootLines(e) {

  const itemDim = this.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: itemDim.bottom - itemDim.top,
        },
        shapes = ['line', 'zigzag','circle'],
        colors = ['#f2aa4cff',
                  '#FF0A47',
                  '#FF0AC2',
                  '#47FF0A'];
  
  const chosenC = Math.floor(Math.random() * colors.length),
        chosenS = Math.floor(Math.random() * shapes.length);
  
  // create shape
  const burst = new mojs.Burst({
    left: itemDim.left + (itemSize.x/2),
    top: itemDim.top + (itemSize.y/2),
    radiusX: itemSize.x,
    radiusY: itemSize.y,
    count: 8,
    
    children: {
      shape: shapes[chosenS],
      radius: 10,
      scale: {1.5: 1.5},
      fill: 'none',
      points: 9,
      stroke: colors[chosenC],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%' : '100%' },
      duration: 350,
      delay: 100,
      easing: 'quad.out',
      isShowEnd: false,
    }
  });
  
  burst.play();
}
    };
})();