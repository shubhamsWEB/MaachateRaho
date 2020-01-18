var app = angular.module('Samvid', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl: 'App/views/home.html',
        controller: 'homeController',
        controllerAs: 'home'
    });
    $routeProvider.when('/About', {
        templateUrl: 'App/views/about.html',
        controller: 'aboutController',
        controllerAs: 'about'
    });
    $routeProvider.when('/Events', {
        templateUrl: 'App/views/events.html',
        controller: 'eventsController',
        controllerAs: 'event'
    });
    $routeProvider.when('/Sponsors', {
        templateUrl: 'App/views/sponsors.html',
        controller: 'sponsorsController',
        controllerAs: 'sponsors'
    });
    $routeProvider.when('/Contact', {
        templateUrl: 'App/views/contact.html',
        controller: 'contactController',
        controllerAs: 'contact'
    });
    $routeProvider.when('/SocialWall', {
        templateUrl: 'App/views/gallery.html',
        controller: 'galleryController',
        controllerAs: 'gallery'
    });
    $routeProvider.when('/Activites', {
        templateUrl: 'App/views/activites.html',
        controller: 'activitesController',
        controllerAs: 'activity'
    });
    $routeProvider.otherwise({
        redirectTo: '/Home'
    });
});