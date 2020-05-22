var h = document.getElementById("hours"),
m = document.getElementById("minutes"),
s  = document.getElementById("seconds");


function getTime() {
	var theDate = new Date();		//Getting the current date and time
 
	h.innerHTML = makeDouble(theDate.getHours());
	m.innerHTML = makeDouble(theDate.getMinutes());
	s.innerHTML = makeDouble(theDate.getSeconds());

	//Display Date function
	var date = new Date().toLocaleDateString('en-GB', {
		day : 'numeric',
		month : 'short',
		year : 'numeric'
		});
		document.getElementById("date").innerHTML = date;
}

setInterval(getTime,1000)


//FUnction that makes sure the numbers are always double
function makeDouble(num) {
	if(num<10){
		num = "0"+num
	}
	return num
}

//FUnction that makes sure the hour is not 24 hour based
