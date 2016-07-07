(function(){
 'use strict';

 	var options;
 	var total = 8;
 	var totalSeconds = 60;
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

		$scope.saveDailyStatus = function(){			

			if($scope.dailyStatusForm.$valid) {

				$scope.listhistory = saveStatus.saveActivity($scope.dateSelected,
					$scope.selectedProject,$scope.selectedActivity.value,
					$scope.selectedMinuteSpent,$scope.selectedSecondsSpent,$scope.selectedMessage);

				var dateElem = angular.element(document.querySelector('#postedFor'));
				var nextElemIndex;
				angular.forEach($scope.dateHTML, function(data, key) {
					if(key == $scope.dateSelected.id){
						total = total - $scope.selectedMinuteSpent.id;
						totalSeconds = totalSeconds - $scope.selectedSecondsSpent.id;
						if($scope.dateSelected.id != 0 && $scope.selectedMinuteSpent.id == '08'){
							nextElemIndex = 7-key+1;
							$scope.dateSelected = $scope.dateHTML[nextElemIndex];
						}else if($scope.dateSelected.id != 0 && $scope.selectedMinuteSpent.id < 8){
							if($scope.selectedSecondsSpent.id == "00"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total];
								}else{
									nextElemIndex = 7-key+1;
									$scope.dateSelected = $scope.dateHTML[nextElemIndex];
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}else if($scope.selectedSecondsSpent.id == "15"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total-1];
									if(totalSeconds == 0)
										$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
									else
										$scope.selectedSecondsSpent = $scope.secondsDropdown[3];
								}else{
									nextElemIndex = 7-key+1;
									$scope.dateSelected = $scope.dateHTML[nextElemIndex];
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}else if($scope.selectedSecondsSpent.id == "30"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total-1];
									if(totalSeconds == 0)
										$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
									else
										$scope.selectedSecondsSpent = $scope.secondsDropdown[2];
								}else{
									nextElemIndex = 7-key+1;
									$scope.dateSelected = $scope.dateHTML[nextElemIndex];
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}else if($scope.selectedSecondsSpent.id == "45"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total-1];
									if(totalSeconds == 0)
										$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
									else
										$scope.selectedSecondsSpent = $scope.secondsDropdown[1];
								}else{
									nextElemIndex = 7-key+1;
									$scope.dateSelected = $scope.dateHTML[nextElemIndex];
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}
						}else if($scope.dateSelected.id == 0){
							if($scope.selectedSecondsSpent.id == "00"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total];
								}else{
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}else if($scope.selectedSecondsSpent.id == "15"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total-1];
									if(totalSeconds == 0)
										$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
									else
										$scope.selectedSecondsSpent = $scope.secondsDropdown[3];
								}else{
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}else if($scope.selectedSecondsSpent.id == "30"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total-1];
									if(totalSeconds == 0)
										$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
									else
										$scope.selectedSecondsSpent = $scope.secondsDropdown[2];
								}else{
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}else if($scope.selectedSecondsSpent.id == "45"){
								if(total != 0 ){								
									$scope.selectedMinuteSpent = $scope.minutesDropdown[total-1];
									if(totalSeconds == 0)
										$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
									else
										$scope.selectedSecondsSpent = $scope.secondsDropdown[1];
								}else{
									$scope.selectedMinuteSpent = $scope.minutesDropdown[8];
									$scope.selectedSecondsSpent = $scope.secondsDropdown[0];
								}
							}
						}
						$scope.message = "";
					}
				});
/*		$scope.calculateTime = function(){
			
		}*/
				
			}
			else{
				console.log("invalid");
			}
		};
	}]);
})();