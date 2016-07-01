// create the controller and inject Angular's $scope
app.controller('mainController',['$scope','loadJson',function($scope,loadJson) {
	loadJson.getActivityList().then(function(activityListData){
		$scope.activityList = activityListData;
	});

	loadJson.getProjectList().then(function(projectListData){
		$scope.projectList = projectListData;
	});
}])