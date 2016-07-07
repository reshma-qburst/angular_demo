(function(){
 'use strict';

 	var previousValue;
 	var options;
	// create the controller and inject Angular's $scope
	app.controller('mainController',['$scope','loadJson','dateDropdown','saveStatus','setDateAndTime',function($scope,loadJson,dateDropdown,saveStatus,setDateAndTime) {
		loadJson.getActivityList().then(function(activityListData){
			$scope.activityList = activityListData;
			$scope.selectedActivity = $scope.activityList.data[0];
		});

		loadJson.getProjectList().then(function(projectListData){
			$scope.projectList = projectListData;
		});

		$scope.dateHTML = dateDropdown;
		$scope.dateSelected = $scope.dateHTML[7];

		$scope.minutesDropdown = [
				{"id": "00","value": "00"},
				{"id": "01","value": "01"},
				{"id": "02","value": "02"},
				{"id": "03","value": "03"},
				{"id": "04","value": "04"},
				{"id": "05","value": "05"},
				{"id": "06","value": "06"},
				{"id": "07","value": "07"},
				{"id": "08","value": "08"},
				{"id": "09","value": "09"},
				{"id": "10","value": "10"},
				{"id": "11","value": "11"},
				{"id": "12","value": "12"},
				{"id": "13","value": "13"},
				{"id": "14","value": "14"},
				{"id": "15","value": "15"}];

		$scope.secondsDropdown = [{"id": "00","value": "00"},
				{"id": "15","value": "15"},
				{"id": "30","value": "30"},
				{"id": "45","value": "45"}];

		$scope.calculateTime = function(){
			
		}

		$scope.saveDailyStatus = function(){

			if($scope.dailyStatusForm.$valid) {
				previousValue = $scope.dateSelected.value ;
				var dateElem = angular.element(document.querySelector('#postedFor'));
				angular.forEach($scope.dateHTML, function(data, key) {
					if(key == $scope.dateSelected.id){
						if($scope.dateSelected.id != 0){
							var nextElemIndex = 7-key+1;
							$scope.dateSelected = $scope.dateHTML[nextElemIndex];
							$scope.selectedMessage = '';
						}
					}
				});

			/*	var timeMinutesElem = angular.element(document.querySelector('#timespent'));
				var timeSecondsElem = angular.element(document.querySelector('#timespent_1'));*/

				/*setDateAndTime.calculateTime(dateElem,$scope.dateSelected,$scope.selectedMinuteSpent.id,
					$scope.selectedSecondsSpent.id,previousValue,timeMinutesElem,timeSecondsElem,ind);
*/
				$scope.listhistory = saveStatus.saveActivity($scope.dateSelected,
					$scope.selectedProject,$scope.selectedActivity.value,
					$scope.selectedMinuteSpent,$scope.selectedSecondsSpent,$scope.selectedMessage);
			}
			else{
				console.log("invalid");
			}
		};
	}]);
})();