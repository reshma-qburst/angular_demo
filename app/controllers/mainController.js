// create the controller and inject Angular's $scope
app.controller('mainController',['$scope','loadJson','dateDropdown','saveStatus',function($scope,loadJson,dateDropdown,saveStatus) {
	loadJson.getActivityList().then(function(activityListData){
		$scope.activityList = activityListData;
		$scope.selectedActivity = $scope.activityList.data[0];
	});

	loadJson.getProjectList().then(function(projectListData){
		$scope.projectList = projectListData;
	});

	$scope.dateHTML = dateDropdown;
	$scope.selected = $scope.dateHTML[7];

	$scope.saveDailyStatus = function(){
    	saveStatus.saveActivity($scope.selected,$scope.selectedProject,$scope.selectedActivity.value,$scope.selectedMinuteSpent,$scope.selectedSecondsSpent,$scope.selectedMessage);
	};
}])