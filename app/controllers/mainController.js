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
	$scope.dateSelected = $scope.dateHTML[7];

	$scope.saveDailyStatus = function(){
		if($scope.dailyStatusForm.$valid) {
			$scope.listhistory = saveStatus.saveActivity($scope.dateSelected,$scope.selectedProject,$scope.selectedActivity.value,$scope.selectedMinuteSpent,$scope.selectedSecondsSpent,$scope.selectedMessage);
		}
		else {
			console.log("invalid")
		} 
	};
}])