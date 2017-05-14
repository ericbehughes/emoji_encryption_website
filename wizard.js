var g = {
  stepsContent: [{
      h1:"Step 1",
      h3:"You must enter a message like:<br /><br />Hi my name is eric <br /> or <br /> this is my secret message 123!"
  },{
    h1:"Step 2",
    h3:"Pick an encryption either by: <br /> <br /> Emoji if your browswer supports it or <br /><br /> Regular english characters [A-Za-z0-9] and normal punctuation"
  },{
    h1:"Step 3",
    h3:"Your encrypted message will be saved in the 3rd window <br /> <br /> "+
    "Remember to save your message and key otherwise you can't decrypt your message!"
  }],
  stepContentCounter: 0,
  nextButton: {}
  };

U.addEvent(document, "DOMContentLoaded", init);
function init() {
    g.nextButton = U.$('wizardBtn');
    nextButtonAction();
    U.addEvent(g.nextButton,"click", nextButtonAction);
}


function nextButtonAction(){
    if (g.stepContentCounter > 2){
      U.removeEvent(g.nextButton,"click", nextButtonAction);
      location.href = "index.html";
    }else{
    var step = document.createElement("section");
    var modal = U.$('popup1');
    var btn = U.$('wizardBtn');
    step.className = "encrypt-steps";
    var h1content = document.createElement('h1');
    h1content.innerHTML = g.stepsContent[ g.stepContentCounter].h1;
    var h3content = document.createElement('h3');
    h3content.innerHTML = g.stepsContent[ g.stepContentCounter].h3;
    step.appendChild(h1content);
    step.appendChild(h3content);
    modal.insertBefore(step, btn);
    g.stepContentCounter++;
  }

}
