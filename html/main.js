// JavaScript Document
// Activity 3
// Wait until the DOM is Ready.
window.addEventListener("DOMContentLoaded" , function(){
	  // getElementById function:
   function ge(x){
   var theElement = document.getElementById(x);
   return theElement;
   }
    // Create Select Field Element and populate with options.
   function makeWorkOuts(){
   		var formTag = document.getElementsByTagName("form"),     // formTag is array of all of the form tags. 
   			selectLi = ge('select'),
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
    		    ge('contactForm').style.display ="none";
    		    ge('clear').style.display = "inline";
    		    ge('displayLink').style.display = "none";
    		    ge('addNew').style.display = "inline";
    			break;
    	   case "off":
    	   		ge('contactForm').style.display ="block";
    		    ge('clear').style.display = "inline";
    		    ge('displayLink').style.display = "inline";
    		    ge('addNew').style.display = "none";
    		    ge('items').style.display = "none"; 
    	   		break;
    	   default:
    	   return false;
    	}
    }
	function  storeData(key){
   	  // if there is no key, this means this is a brand new item, and we need new key
   	  
   	    if(!key){
   	       		var id        		= Math.floor(Math.random()*100000000001);
   	    }else{
   	    // otherwise set excisting key to save over data.
   	    // the key is the same thats been passed along from edit submit eveent handler.
   	    // to validate function, and then passed here into store data function.
   	    
   	    	id = key;
   	    }
        // Gather all of our form field values and store in an object.
   		// Object properties contain array with the form label and input value.
   		getSelectedRadios();
   	    getCheckBoxValue();
   		var item        				={};
   			 item.apparel				=["Group",cboxValue];
   			 item.group					=["Group",ge("groups").value];
   			 item.yesorno				=["Completed:", ge("date-completed").value];
   			 item.datecompleted			=["Date Completed", ge("date-completed").value];
   			 item.WoName				=["workoutname", ge("WoName").value];
   			 // Save Data into local Storage: Use Stringify to convet our object to a string.
   		localStorage.setItem(id, JSON.stringify(item));
   		alert("Workout Saved!");
   }  
   function getData(){
   		toggleControls("on");
   		if(localStorage.length ===0){
   			alert("There is no data in local storage, so defalult data was added.");
   			autoFillData();
   		}
   		// Write data from local storage to browser.
   		var makeDiv = document.createElement('div');
   		makeDiv.setAttribute("id", 'items');
   		var makeList = document.createElement('ul');
   		var linksLi = document.createElement('ul');
   		makeDiv.appendChild(makeList);
   		document.body.appendChild(makeDiv);
   		ge('items').style.display = "block";
   		for(var i=0, len=localStorage.length; i<len; i++){
				var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert the string from local storage back to an object by using json.parse.
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				  makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
				}
				makeItemLinks(localStorage.key(i), linksLi);   // Create edit and delete buttons.
		}
}
// Get the image for the right category thats being displayed
function getImage(catName, makeSubList){
	var imageLi = document.createElement('li');
	makeSubList.appendChild(imageLi);
	var newImg = document.createElement('img');
	var setSrc = newImg.setAttribute("src", "images/"+ catName + ".jpg");
	imageLi.appendChild(newImg); 
}
	// Auto Populate Local Storage
	function  autoFillData(){
			// The acual JSON object data required for this to work is comming from our json.js file.
			// Store the JSON object in local storage.
			for(var n in json ){
				var id = Math.floor(Math.random()*100000000001);
				localStorage.setItem(id, JSON.stringify(json[n]));
			}
	}
	

	// Make Item Links Function.
	// Create the edit and delete links for each stored item when displayed.
	function makeItemLinks(key, linksLi){
	//add edit single item link.
		var editLink = document.createElement('a');
	    editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Workout";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		// add line break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		// Add a delete single item link.
		var deleteLink = document.createElement('a');
		deleteLink.href ="#";
		deleteLink.key = key;
		var deleteText = "Delete Workout.";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
	    linksLi.appendChild(deleteLink); 
	} 
	function editItem(){
	// Grab the data from our item from local storage.
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	// Show the form.
	toggleControls("off");
	
	// populate form fields with the current local storage values.
	ge('groups').value = item.group[1];
	//ge('apparel').value = item.apparel[1];
	//ge('yesorno').value = item.yesorno[1];
	ge('WoName').value = item.WoName[1];
	var radios = documents.forms[0].yesorno;
	for(var i=0; i<radios.length; i++){
	   if(radios[i].value == "Yes" && item.yesorno[1] == "Yes" ){
	   	  radios[i].setAttribute("checked", "checked");
	   	  } else if(radios[i].value == "No" && item.yesorno[1] == "No"){
	   			radios[i].setAttribute("checked", "checked");
	   }
	   
	   if (item.yesorno[1] == "Yes"){
	   ge('yesorno').setAttribute("checked", "checked");
	   }
	 } 
	//ge('iq').value = obj.iq[1];
	// Remove the initial listener from the input  'save contact' button.
	save.removeEventListener("click", storeData);
	// Change Submit Button value to say edit button.
	ge('submit').value = "Edit Workout";
	var editSubmit = ge('submit');
	// Save the key value est  in this function as property of the editSubmit even
	// so we can use that value when we save the data we editied. 
	editSubmit.addEventListener("click", validate);
	editSubmit.key = this.key;
	
 }
    function deleteItem(){
    var ask = confirm("Are your sure you want to delete this workout?");
    if(ask){
    	localStorage.removeItem(this.key);
    	alert("Workout was deleted");
    	window.location.reload();
    	}else{
    		alert("Workout was not deleted");
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
	function validate(e){
		// Difine the element we want to check
		//var getGroup =   ge('groups');
		//var getApparel = ge('apparel');
		//var getYesorno = ge('yesorno');
		//var getDateCompleted = ge('datecompleted');
		var getWoName = ge('WoName');
		
		// Reset the error messages.
		errMsg.innerHTML; 
		getWoName.style.border = "1px solid black";
		
		// Get error messages
		var messageAry = [];
		// Group Validation
		if(getWoName.value === ""){
		var WoNameError = "Please name your Workout.";
		getWoName.style.border = "1px solid red";
		messageAry.push(WoNameError);
		}
		// If there were any errors, display them on the sceen.
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i < j; i++){
			var txt = document.createElement('li');
			txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt); 
		}
		 e.preventDefault();
		 return false; 
		 }else{
		 	// If all is ok, save our data. Send the key value witch came from edit data function
		 	// remember this key value, it was passed through the edit even listner as a property
		      storeData(this.key);
		 }
		}
		/*

		function getSearch(e) {
			var category = ge('groups').value;
			var term = ge('search').value;
			if(term != "" && category ==="--Chose a Workout--"){
				for(i=0, j=localStorage.length; i<j; i++){
					var key = localStorage.getItem(key);
					var obj = JSON.parse(value);
					if(term === obj.[n][1]){
						for(n in obj){
							console.log(obj[q][1]);
						}
					}
				}


			}


		}

		// Search
	var search = ge('searchBtn');
	search.addEventListner("click", getSearch);
	*/
// Variable defaults 
   	 var workOutGroups = ["--Choose a Workout--", "Cardio", "Weight", "Core"],
   	 	yesornoValue;
   	makeWorkOuts(); 
   	var cboxValue = [];
   	errMsg = ge('errors');
   
   // set links, and click events
	var displayLink =  ge('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = ge('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = ge('submit');
	save.addEventListener("click", validate);
});