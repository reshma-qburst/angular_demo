var today;
app.factory('dateDropdown', function () {
	var datesArray = [];
	var newArray = [];
	var outputDate='';
	for(var i=0; i<8; i++){	
		var dateObject = {
			id: i
		} 	
		today = new Date();
		var first = today.getDate();
		var day = new Date(today.setDate(first-i));
		dateObject.value = day.getDate()+'/'+(day.getMonth()+1)+'/'+day.getFullYear();
		datesArray.push(dateObject);
	}
	for(var k=7;k>=0;k--){
		newArray.push(datesArray[k]);
	}
	return newArray;
});