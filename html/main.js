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
   		function getSelectedRadios(){
   			var radio = document.forms[0].yesorno;
   			for(var i=0; i<radio.length; i++){
   				if(radio[i].checked){
   				yesornoValue = radio[i].value;
   			}
   		}	
   	}	   		

function getCheckBoxValue() {
		var checkbox = document.forms[0].cbox;
		
		for(var i=0; i<checkbox.length; i++){
		if (checkbox[i].checked){
		 cboxValue.push(checkbox[i].value);
		}
		}
    }
    
    
    function toggleControls(n){
    	switch(n){
    		case "on":
    		    $('contactForm').style.display ="none";
    		    $('clear').style.display = "inline";
    		    $('displayLink').style.display = "none";
    		    $('addNew').style.display = "inline";
    			break;
    	   case "off":
    	   		$('contactForm').style.display ="block";
    		    $('clear').style.display = "inline";
    		    $('displayLink').style.display = "inline";
    		    $('addNew').style.display = "none";
    		    $('items').style.display = "none"; 
    	   		break;
    	   default:
    	   return false;
    	}
    
    }

   	  function  storeData(){
   		var id        		= Math.floor(Math.random()*100000000001);
   		// Gather all of our form field values and store in an object.
   		// Object properties contain array with the form label and input value.
   		getSelectedRadios();
   		
   		getCheckBoxValue();
   		
   		var item        				={};
   			 item.apparel				=["Group",cboxValue];
   			 item.group					=["Group",$("groups").value];
   			 item.yesorno				=["Completed:", $("date-completed").value];
   			 item.datecompleted			=["Date Completed", $("date-completed").value];
   			 item.WoName				=["workoutname", $("WoName").value];
   			 // Save Data into local Storage: Use Stringify to convet our object to a string.
   		localStorage.setItem(id, JSON.stringify(item));
   		alert("Workout Saved!");
   }  
   function getData(){
   		toggleControls("on");
   		if(localStorage.length ===0){
   		alert("There is no data in local storage.");
   		}
   		// Write data from local storage to browser.
   		var makeDiv = document.createElement('div');
   		makeDiv.setAttribute("id", 'items');
   		var makeList = document.createElement('ul');
   		makeDiv.appendChild(makeList);
   		document.body.appendChild(makeDiv);
   		$('items').style.display = "block";
   		for(var i=0, len=localStorage.length; i<len; i++){
   			var makeli = document.createElement('li');
   		makeList.appendChild(makeli);
   		var key = localStorage.key(i);
   		var value = localStorage.getItem(key);
   		// Convert the string from local storage back to an object by using json.parse.
   		var obj = JSON.parse(value);
   		var makeSubList = document.createElement('ul');
   		makeli.appendChild(makeSubList);
   		for(var n in obj){
   		var makeSubli = document.createElement('li');
   		makeSubList.appendChild(makeSubli);
   		var optSubText = obj[n][0]+" "+obj[n][1];
   		makeSubli.innerHTML = optSubText;
   		}
   	}
}
	function clearLocal(){
		if(localStorage.length ===0){
			alert("There is no Data to Clear.");
		}else{
			localStorage.clear();
			alert("All Data has been Deleted");
			window.location.reload();
			return false;
		}
	}
   	 // Variable defaults
   	 var workOutGroups = ["--Choose a Workout--", "Cardio", "Weight", "Core"],
   	 	yesornoValue;
   	makeWorkOuts(); 
   	var cboxValue = [];
   
   // set links, and click events
	var displayLink =  $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);

});