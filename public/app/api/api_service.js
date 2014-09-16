angular.module('zingClient')

.factory('Docs', ['$resource', 
		function($resource) {
			return $resource('docs/:docId.json', {},
				{ query: {method:'GET', params: {docId:'categories'}, isArray:true}}
			);
}]);


