'use strict';

angular.module('byApp')
  .controller('MainCtrl', function ($scope) {
    $scope.destination = [
        'Bangkok',
        'Bintan',
        'Phuket',
        'Samui',
        'Sanya'
    ];

    $scope.movePos = function() {
      $('#page_wrapper_btm').addClass('show'); 
      return false;
    }

    $scope.close= function (item) {
      console.log('closing item',item);

        if (item === 'showDest') {
          console.log('1');
            return $scope.showDest = false;
        } else if( item === 'showBook') {
          console.log('3');
            return $scope.showBook = false;
        } else {
          console.log('error');
        }
    }

    // for init category
    // $scope.opened = 'bycategories';

  })
  .controller('ListDestCtrl', function($scope) {
  	$scope.listDest = ['Bangkok','Bintan','Macau','Phuket','Sanya'];
  })
  .controller('DestCtrl', function($scope) {
  })
