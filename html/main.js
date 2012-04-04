// JavaScript Document


window.addEventListener("DOMContentLoaded" , function(){



   // getElementById function:
   function $(x){
   var theElement = document.getElementById(x);
   return theElement;
   }
   
   
   // Create Select Field Element and populate with options.
   finction getWorkOut (){
   		var formTag = document.getElementsByTagName("form"),     // formTag is array of all of the form tags. 
   		selectLi = $("select"),
   		makeSelect = document.createElement("select");
   		makeSelect.setAttribute("id", "groups");
   		for ( i=0; j=workOutGroups.length; i<j; i++) {
   			var makeOption = document.createElement("option")
   			var optTest = workOutGroups[i];
   			makeOption.setAttribute("valure", optTest);
   			makeOption.innerHTML = optText;
   			makeSelect.appendChild(makeOption);
   		
   		
   		}
   		selectLi.appendChild(makeSelect);
   		getWorkOut();
   }
   
   // variable defaults
   var workOutGroups = ["--Choose A Group--", "cardio", "weight", "core" ];
   
   
   
   // set links, and click events
	var displayLink =  $("displayLink");
	displayLink.addEventListener("click", getData)
	var clearLink = $("clear");
	clearLink.addEventListener("clear", clearLocal);
	var save = $("submit");
	 save.addEventListener("click", storeData):







});