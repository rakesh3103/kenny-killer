
/*
    * Created by Rakesh Muthyala
    * Email: rakesh.muthyala.15@gmail.com
    * Created on: Sept 26, 2018.
*/

/*
    * Initization function which will get called on the load of the page or on click of reset button.
    * Resets display List and suspect list on call.
    * Loops through the list of names passed and created figure nodes and appends it to display List.
    * Adds click event listener to the figure node.
*/
function initialize(){
    resetDiv('peopleList');
    resetDiv('suspectList');
    setElementText("contextText", "Here are the suspects. Your job is to sort them from who you think is the most likely to the least likely, by clicking on the suspect.");
    var displayDiv = document.getElementById('peopleList');
    this.forEach(function(name){
        var childDiv = document.createElement("figure"); // Creates figure node for each name.
        childDiv.setAttribute('class', 'col-xs-1  col-sm-4 col-md-2 col-lg-1 initList'); //Set class for Display List figures.
        var imgTaghtml = '<img id = ' + name + '>';
        var figCaptionHTML = '<figcaption>' + name + '</figcaption>'; // Adds name of the character as figure caption.
        childDiv.innerHTML = imgTaghtml + figCaptionHTML;
        childDiv.addEventListener('click', moveToSuspect); // Attaching event listener to each figure node.
        displayDiv.appendChild(childDiv); // Appending the figure node as child to Display List.
    });

}

/*
    * Function gets called on click of people in display List.
    * Removes the clicked node from display List and appends it to suspects List.
    * Removes click event listener from the figure node.
*/
function moveToSuspect(){
    var displayDiv = document.getElementById('peopleList');
    var suspectDiv = document.getElementById('suspectList');
    displayDiv.removeChild(this); // Removing the clicked figure node from display List.
    this.removeEventListener('click', moveToSuspect); // Removing event listener from the figure node.
    this.setAttribute('class', 'col-xs-1  col-sm-4 col-md-2 col-lg-1 suspectList'); //Set class for suspect List figures
    suspectDiv.appendChild(this); // Appending the figure node as child to Suspect List.
    if(!displayDiv.hasChildNodes()){
        setElementText("contextText", 'Good Job! You got them all.');
    }
}

/*
    * Fucnction empty and resets the div.
    * @params {divID: string} : The Id of the div to empty.
*/
function resetDiv(divID){
    if(divID && document.getElementById(divID)){
        document.getElementById(divID).innerHTML = "";
    }

}

/*
    * Function sets inner Text of the element of the id passed.
    * @params {id: string, text: string}: The Id of the element to add the text and the text to add.
*/
function setElementText(id, text){
    document.getElementById(id).innerText = text;
}


var orderedArray = ['stan', 'kyle', 'kenny', 'cartman', 'wendy', 'ike', 'tweak']; // Array in the order of display.
var initializeWithData = initialize.bind(orderedArray); // Binding the array to the initialize function.

initializeWithData(); // Main function call.