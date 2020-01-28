(function(){

var app = angular.module('customersApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'customersController',
            templateUrl: 'app/Views/customers.html'
        })
        .when('/orders/:custId',{
            controller: 'ordersController',
            templateUrl: 'app/Views/orders.html'
        })
        
        .otherwise({redirectTo:'/'});

    });
    
}());