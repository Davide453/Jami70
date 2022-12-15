/**
 * 
 */

function showHello(string) {
	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(request.responseText);
			document.getElementById("ServerResponse").innerHTML = request.responseText;
		}
	};

	request.open("GET", "saluto?=user" + string, true)
	request.send();

}