// app.js

// angular.module('myApp', [])
//   .controller('myController', ['$scope', '$http', function($scope, $http) {
//     $scope.scrapeData = function() {
//       $http.get('https://rickandmortyapi.com/api/character')
//         .then(function(response) {
//           var data = response.data;
//           var jsonData = JSON.stringify(data);
//           var blob = new Blob([jsonData], { type: 'application/json' });
//           var url = URL.createObjectURL(blob);
          
//           var a = document.createElement('a');
//           a.href = url;
//           a.download = 'scraped_data.json';
//           a.click();
//         })
//         .catch(function(error) {
//           console.error('Error scraping data:', error);
//         });
//     };
//   }]);

angular.module('myApp').service('app', ['$http', function($http) {
    this.scrapeData = function() {
      return $http.get('/scrape'); // Call the server-side endpoint to scrape data
    };
  }]);

  