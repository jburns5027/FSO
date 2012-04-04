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
   function  storeData(){
   		var id        		= Math.floor(Math.random()*1000000001);
   		// Gather all of our form field values and store in an object.
   		// Object properties 
   		var item        	={};
   		var item.hband		=["Headband", $(hband).value];
   		var item.ttop		=["Tank Top, $(ttop).value];
   		var item.tshirt		=["T-Shirt", $(tshirt).value];
   		var item.ctop		=["Compression Top", $(ctop).value];
   		var item.hoodie		=["Hoodie", $(hoodie).value];
   		var item.cpants		=["Compression Pants", $(cpants).value];
   		var item.dfshorts	=["Dry Fit Shorts", $(dfshorts).value];
   		var item.csocks		=["Compression Socks", $(csock).value];
   		var item.rshoes		=["Running Shoes", $(rshoes).value];
   		var item.iphone		=["iPhone", $(iphone).value];
   		var item.hphones	=["Head Phones", $(hphones).value];
   		var item.hmonitor	=["Heartrate Monitor", $(hmonitor).value];
   		var item.wbottle	=["Water Bottle", $(wbottle).value];
   		var item.group		=["Group", $("groups").value];
   		var item.completed	=["Completed:", $(completed).value];
   		var item.dcompeted		=["Date Completed", $(dcompleted).value];
   		localStorage.setItem(id, JSON.stringify(item));
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