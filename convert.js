function upperCase() {
	var str = document.getElementById("text").value;
	document.getElementById("text").value = str.toUpperCase();
}

function lowerCase() {
	var str = document.getElementById("text").value;
	document.getElementById("text").value = str.toLowerCase();
}

function sentCase() {
	var str = document.getElementById("text").value;
	document.getElementById("text").value = str.replace(/.+?[\.\?\!\:](\s|$)/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function titleCase() {
	var str = document.getElementById("text").value;
	 document.getElementById("text").value = str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

upperCase();
lowerCase();
sentCase();
titleCase();