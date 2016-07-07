(function(){
 'use strict';
	var newDate = new Date();
	app.service('saveStatus',function(){
		var historyArray = [];
		return{
			saveActivity : function(date,project,activity,timeInMinutes,timeInSeconds,message){
				var dateToday = newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear();
				var currentTime = newDate.getHours()+":"+newDate.getMinutes()+":"+newDate.getSeconds();

				historyArray.push({date : date.value,project : project,
					activity : activity,minute : timeInMinutes.id,seconds : timeInSeconds.id,
					message : message,today : dateToday,time : currentTime});
				return historyArray;
			}
		}
	});
})();