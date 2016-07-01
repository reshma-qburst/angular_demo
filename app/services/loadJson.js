app.factory('loadJson',['$http',function($http){
	return {
		getActivityList : function(){
			var activityList = $http.get('app/json/activity-type.json').then(function (dataActivity) {
				return dataActivity;
			});	 
			return activityList;
		},
		getProjectList : function(){
			var projectList = $http.get('app/json/project-options.json').then(function (dataProject) {
				return dataProject;
			});
			return projectList;
		}
	}
}]);