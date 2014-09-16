
angular.module('zingClient')

.controller("EditorController", ['$scope', '$stateParams','Charts', '_charts',
		function($scope, $stateParams, Charts, _charts) {
			$('#sidebar').hide();
			
			// UNCOMMENT THIS! Had server connection issues so i'm using dummy data for now
		//	$scope.chart = Charts.query($stateParams);
		//	$scope.code =  $scope.chart.data;
			$scope.chart = _charts[1];
			$scope.code =  $scope.chart.data;
			$scope.aceLoad = function(_editor) {
				_editor.setOptions( {
					enableBasicAutocompletion: true,
					enableSnippets:true,
					enableLiveAutocompletion: true
				});
			};

			$scope.$watch('code', function(){
				try {
				var height = $('#editor-ide').height() - $('#top-toolbar').height();
				$('#editor-json').height(height);
					$scope.json_to_render = {'data': $scope.code};
					zingchart.exec('editor_preview', 'setdata', $scope.json_to_render);
					var height = $('#editor-ide').height() - $('#top-toolbar').height();
					$('#editor_preview').height(height);
				}catch(exp){};
			});
}]);
