" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var speak = "Can't";
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      if(type.toUpperCase() == "CAT"){
        speak = "meow";
      } else if(type.toUpperCase() == "DOG"){
        speak = "woof";
      } else if(type.toUpperCase() == "BIRD"){
        speak = "cawww";
      } else {
        speak = "Not a valid animal";
      }
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + " says " + speak + "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
