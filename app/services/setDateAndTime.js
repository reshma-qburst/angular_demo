(function(){
 'use strict';
 	var textToFindMin;
	var textToFindSec;
	var previousMinTime = '00';
	app.service('setDateAndTime',function(){
		return {
			calculateTime : function(eDate,dateSelected,selectedTimeMin,selectedTimeSec,
					previousValue,timeMinutesElem,timeSecondsElem,ind){
				if(previousValue == dateSelected.value && selectedTimeMin<8){
					setDateAndTime(selectedTimeSec,selectedTimeMin,eDate,ind);
				}else if(selectedTimeMin < 8) {
					setTime(selectedTimeSec,selectedTimeMin);
				}else if(selectedTimeMin==8){
					dateAndTimeForToday(ind,eDate);
				}
				previousMinTime = "0"+textToFindMin;
				
				for (var i = 0; i <= timeMinutesElem.length; i++) {
				    if (timeMinutesElem.options[i].text === "0"+textToFindMin) {
				        timeMinutesElem.selectedIndex = i;
				        break;
				    }
				}

				for (var j = 0; j <= timeSecondsElem.length; j++) {
				    if (timeSecondsElem.options[j].text === textToFindSec) {
				        timeSecondsElem.selectedIndex = j;
				        break;
				    }
				}
			}
		}
	});

	function setDateAndTime(selectedTimeSec,selectedTimeMin,eDate,ind){
		if(selectedTimeSec == '15' && previousMinTime!=selectedTimeMin){
			setTextToFind((previousMinTime-selectedTimeMin)-1,'45');
		}
	}

	function setTextToFind(min,sec){
		textToFindMin = min;
		textToFindSec = sec;
		document.getElementById("message").value = '';
	}

	function setTime(selectedTimeSec,selectedTimeMin){
		if(selectedTimeSec == '15'){
			setTextToFind((8-selectedTimeMin)-1,'45');
		}else if(selectedTimeSec == '30'){
			setTextToFind((8-selectedTimeMin)-1,'30');
		}else if(selectedTimeSec == '45'){
			setTextToFind((8-selectedTimeMin)-1,'15');
		}else{
			setTextToFind(8-selectedTimeMin,'00');
		}
	}

	function dateAndTimeForToday(eDateIndex,eDate){
		if(eDateIndex!=7){
			setTextToFind('8','00');
			eDate.selectedIndex = eDateIndex+1;
		}else{
			setTextToFind('0','00');
		}
	}

})();