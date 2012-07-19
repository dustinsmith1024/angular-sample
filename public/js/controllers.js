'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function NamesCtrl($scope, $http) {
    $scope.title = 'Peoples';
    $http({method: 'GET', url: '/api/names'}).success(function (data, status, headers, config) {
        $scope.people = data.people;
    })
}

function ReportsCtrl($scope, $http) {
    $scope.title = 'Reports';
    
    $http({method: 'GET', url: '/api/reports'}).success(function(data, status, headers, config) {
       $scope.reports = data; 
     }).error(function(data, status, headers, config){
        $scope.name = 'Error loading reports';
        $scope.error = status;
    });
    
    $scope.getChildren = function(id) {
      $http({method: 'GET', url: '/api/reports/'+id}).success(function(data, status, headers, config) {
          console.log(data);
         angular.forEach(data, function(d) {
            $scope.reports.push(d);
         });
       });
    };
}

function TweetsCtrl($scope, $http) {
    $scope.title = 'Tweets';
    $http({method: 'JSONP', url: 'http://search.twitter.com/search.json?q=paleochallenge&show_user=true&rpp=25&include_entities=true&result_type=mixed&callback=JSON_CALLBACK'})
        .success(function(data, status, headers, config) {
            console.log(data.results);
            $scope.tweets = data.results;
        })
        .error(function(data, status, headers, config) {
            console.log(data, status);
        });
}

function MyCtrl1() {}
//Why?
MyCtrl1.$inject = [];
