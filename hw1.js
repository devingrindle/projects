
function p1() {
  	console.log("Hello, world!");
}

function p2() {
	var hiddenElement = document.getElementById("p2readme").innerHTML;
  	console.log(hiddenElement);
}

function p3() {
	var p3element = document.getElementsByClassName("p3editme");
	var i;
	for (i = 0; i < p3element.length; i++) {
  		p3element[i].innerHTML = "I was changed!";
	}
}

function p4() {
	var p4Element = document.getElementsByClassName("p4editme");
 	var letterCode;
  	var changedLetterCode;
  	var i;
 	for (i = 0; i < p4Element.length; i++){
 		letterCode = p4Element[i].innerHTML;
		letterCode = letterCode.charCodeAt(0)
  		if (letterCode == 90) {
      			changedLetterCode = 65;
      			p4Element[i].innerHTML = String.fromCharCode(changedLetterCode);
   	 	} else {
      			changedLetterCode = letterCode + 1;
      			p4Element[i].innerHTML = String.fromCharCode(changedLetterCode);
    		}
  	}
}

function p5() {
	var p5inputtext = document.getElementById("p5input").value;
	document.getElementById("p5editme").innerHTML = p5inputtext;
}

function p6() {
	var temp = document.getElementById("p6btn1").formAction;
	document.getElementById("p6btn1").formAction = document.getElementById("p6btn2").formAction;
	document.getElementById("p6btn2").formAction = temp;
}

	document.getElementById("p7table").style.textAlign = "center";
	document.getElementById("p7table").style.backgroundColor = "#f7f7f7";
	document.getElementById("p7table").style.width = "100%";
	document.getElementById("p7table").style.boxShadow = "0 4px 8px 0 #d7dbde";
	document.getElementById("p7table").style.borderCollapse = "collapse";

	var p7headerclass = document.getElementsByClassName("header");
	var p7trtag = document.getElementsByTagName("tr");
	var p7tdtag = document.getElementsByTagName("td");
	var p7thtag = document.getElementsByTagName("th");

	var i;
	for (i = 0; i < p7headerclass.length; i++){
		p7headerclass[i].style.backgroundColor = "#d0d5d9";
	}
	for (i = 0; i < p7trtag.length; i++){
		p7trtag[i].style.color = "#3f4245";
	}
	for (i = 0; i < p7tdtag.length; i++){
		p7tdtag[i].style.borderBottom = "1px solid #ddd";
		p7tdtag[i].style.padding = "15px";
	}
	for (i = 0; i < p7thtag.length; i++){
		p7thtag[i].style.borderBottom = "1px solid #ddd";
		p7thtag[i].style.padding = "15px";
	}

function p7() {
  document.getElementById("p7table").style.backgroundColor = "#f7f7f7";
  document.getElementById("p7table").style.textAlign = "center";
  document.getElementById("p7table").style.width = "100%";
  document.getElementById("p7table").style.boxShadow = "0 4px 8px 0 #d7dbde";
  document.getElementById("p7table").style.borderCollapse = "collapse";

  var header = document.getElementsByClassName("header");
  var trow = document.getElementsByTag("tr");
  var tdata = document.getElementsByTag("td");
  var theader = document.getElementsByTag("th");

  var i;
  for (i = 0; i < header.length; i++) {
    header[i].style.backgroundColor = "#d0d5d9";
  }

  for (i = 0; i < trow.length; i++ ) {
    trow[i].style.color ="#3f4245";
  }

  for (i = 0; i < tdata.length; i++ ) {
    tdata[i].style.bottomBorder ="#1px solid #ddd";
    tdata[i].style.padding = "15px";
  }

  for (i = 0; i < theader.length; i++ ) {
    theader[i].style.bottomBorder ="#1px solid #ddd";
    theader[i].style.padding = "15px";
  }
}

