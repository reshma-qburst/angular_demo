app.service('saveStatus',['$http',function($http){
	return{
		saveActivity : function(date,project,activity,timeInMinutes,timeInSeconds,message){
			//console.log(date.value+" , "+project+" , "+activity + ", "+timeInMinutes+" , "+timeInSeconds+" , "+message);
			var historyArray = [];
			historyArray = {
				date : date.value,
				project : project,
				activity : activity,
				minute : timeInMinutes ,
				seconds : timeInSeconds,
				message : message
			} 
			console.log(historyArray);
		}
	}
}]);