 
(function(){
angular.module('customersApp').controller('ordersController', function ($scope,$routeParams) {
    var customerId = $routeParams.custId;
    $scope.orders = null;
    
    function init() {

     for (var i = 0; i < $scope.customers.length; i++) {
         if ($scope.customers[i].id === parseInt(customerId)) {
             $scope.orders = $scope.customers[i].orders;
             break;
         }
     }

 }
    
     $scope.customers = [{
         id:1,
         joined: '2000-12-02',
         name: 'John',
         city: 'Chandler',
         Order: 9.9956,
         orders:[
             {
                id:1,
                 product:'Shows',
                 total: 9.9956
             }
         ]
     }, {
         id:2,
         joined: '1965-01-25',
         name: 'Zed',
         city: 'Las Vegas',
         Order: 19.99,
         orders:[
             {
                id:2,
                 product:'Baseball',
                 total: 9.9956
             },
             {
                id:3,
                 product:'Bat',
                 total: 9.9956
             }
         ]
     }, {
         id:3,
         joined: '1995-03-28',
         name: 'Dave',
         city: 'Seattle',
         Order: 101.50,
         orders:[
             {
                id:4,
                 product:'Kindle',
                 total: 101.50
             }
         ]
     }, {
         id:4,
         joined: '1944-06-15',
         name: 'Tina',
         city: 'New York',
         Order: 44.99,
         orders:[
             {
                id:5,
                 product:'Headphones',
                 total: 45.99
             }
         ]
         
     }];
    init();
     });
 }());
    
