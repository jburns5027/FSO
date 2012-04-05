// JavaScript Document

// Wait until the DOM is Ready.
window.addEventListener("DOMContentLoaded" , function(){



   // getElementById function:
   function $(x){
   var theElement = document.getElementById(x);
   return theElement;
   }
   
   // Create Select Field Element and populate with options.
   function makeWorkOuts(){
   		var formTag = document.getElementsByTagName("form"),     // formTag is array of all of the form tags. 
   			selectLi = $('select'),
   			makeSelect = document.createElement('select');
   			makeSelect.setAttribute("id", "groups");
   		for (var i=0, j=workOutGroups.length; i<j; i++) {
   			var makeOption = document.createElement('option');
   			var optText = workOutGroups[i];
   			makeOption.setAttribute("value", optText);
   			makeOption.innerHTML = optText;
   			makeSelect.appendChild(makeOption);
   		}
   		selectLi.appendChild(makeSelect);
   	  }
   	 	// Find the Value of a selected radio button.
   		funtion getSelectedRadio() {
   			var radios = document.forms(0).yesorno;
   			for(var i=0; i<radio.length; i++) {
   				if(radios[i].checked){
   				yesornoValue = radios[i].value;
   			}
   		}	
   	}	   		
/*
function getCheckBoxValue() {
		if($("yes").checked){
			yesValue =  $("yes").value;
		}else{yesValue = "no"
		}
    }
*/ 
   	  function  storeData(){
   		var id        		= Math.floor(Math.random()*100000000001);
   		// Gather all of our form field values and store in an object.
   		// Object properties contain array with the form label and input value.
   		getSelectedRadio();
   		/*
   		getCheckBoxValue();
   		*/
   		var item        				={};
   			 item.headband			 	=["Headband", $(headband).value];
   			 item.tanktop				=["Tank Top", $(tanktop).value];
   			 item.tshirt				=["T-Shirt", $(tshirt).value];
   			 item.compressiontop		=["Compression Top", $(compressiontop).value];
   			 item.hoodie				=["Hoodie", $(hoodie).value];
   			 item.compressionpants		=["Compression Pants", $(compressionpants).value];
   			 item.dryfitshorts			=["Dry Fit Shorts", $(dryfitshorts).value];
   			 item.compressionsocks		=["Compression Socks", $(compressionsock).value];
   			 item.runningshoes			=["Running Shoes", $(runningshoes).value];
   			 item.iphone				=["iPhone", $(iphone).value];
   			 item.headphones			=["Head Phones", $(headphones).value];
   			 item.heartratemonitor		=["Heartrate Monitor", $(heartratemonitor).value];
   			 item.fitnessapp			=["Fitness App", $(fitnessapp).value];
   			 item.waterbottle			=["Water Bottle", $(waterbottle).value];
   			 item.group					=["Group", $("groups").value];
   			 item.yesorno				=["Completed:", $(completed).value];
   			 item.dcompeted				=["Date Completed", $(dcompleted).value];
   			 // Save Data into local Storage: Use Stringify to convet our object to a string.
   		localStorage.setItem(id, JSON.stringify(item));
   		alert("Workout Saved!");
   }  
   
   function getData(){
   		// Write data from local storage to browser.
   		var makeDiv = document.createElement('div');
   		makeDiv
   }
   	 
   	 // Variable defaults
   	 var workOutGroups = ["--Choose a Workout--", "Cardio", "Weight", "Core"];
   	 	yesornoValue;
   	makeWorkOuts();  
   
   
   // set links, and click events
	var displayLink =  $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("clear", clearLocal);
	var save = $('submit');
	 save.addEventListener("click", storeData):

});