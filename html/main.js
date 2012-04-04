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
   		// Find the Value of a selected radio button.
   		funtion getSelectedRadio() {
   			var radios = document.form(0).yesorno
   			for (var i=0; i<radio.length; i++) {
   			if(radios[i].checked){
   			yesornoValue = radios[i].value;
   				
   			}
   		}   		
   }
   function getCheckBoxValue() {
   if($("yes").checked){
   		yesValue =  $("yes").value;
   }else{yesValue = "no"
   }
}
   
   function  storeData(){
   		var id        		= Math.floor(Math.random()*1000000001);
   		// Gather all of our form field values and store in an object.
   		// Object properties contain array with the form labeland input value.
   		getSelectedRadio();
   		getCheckBoxValue();
   		var item        	={};
   		var item.headband			=["Headband", $(headband).value];
   		var item.tanktop			=["Tank Top, $(tanktop).value];
   		var item.tshirt				=["T-Shirt", $(tshirt).value];
   		var item.compressiontop		=["Compression Top", $(compressiontop).value];
   		var item.hoodie				=["Hoodie", $(hoodie).value];
   		var item.compressionpants	=["Compression Pants", $(compressionpants).value];
   		var item.dryfitshorts		=["Dry Fit Shorts", $(dryfitshorts).value];
   		var item.compressionsocks	=["Compression Socks", $(compressionsock).value];
   		var item.runningshoes		=["Running Shoes", $(runningshoes).value];
   		var item.iphone				=["iPhone", $(iphone).value];
   		var item.headphones			=["Head Phones", $(headphones).value];
   		var item.heartratemonitor	=["Heartrate Monitor", $(heartratemonitor).value];
   		var item.fitnessapp			=["Fitness App", $(fitnessapp).value];
   		var item.waterbottle		=["Water Bottle", $(waterbottle).value];
   		var item.group				=["Group", $("groups").value];
   		var item.yesorno			=["Completed:", $(completed).value];
   		var item.dcompeted			=["Date Completed", $(dcompleted).value];
   		localStorage.setItem(id, JSON.stringify(item));
   		alert("Workout Saved");
   }
   
   // variable defaults
   var workOutGroups = ["--Choose A Group--", "cardio", "weight", "core" ];
   yesornoValue
   
   
   
   // set links, and click events
	var displayLink =  $("displayLink");
	displayLink.addEventListener("click", getData)
	var clearLink = $("clear");
	clearLink.addEventListener("clear", clearLocal);
	var save = $("submit");
	 save.addEventListener("click", storeData):







});