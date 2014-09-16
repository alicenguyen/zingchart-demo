
angular.module('zingClient').controller("ApiController", ["$scope", "$stateParams", "$state", "api","Docs", 
			function($scope, $stateParams,$state,api, Docs) {
				$scope.categories = api.getCategories(); 
				$scope.content=['category', 'object'];

				// scraped data
				Docs.query( function(data) {
					$scope.categories = data;
					for(var i in data) {
						console.log(JSON.stringify(data[i]));
						var _object = data[i].objects;			
					}
				});
			}
	]);
