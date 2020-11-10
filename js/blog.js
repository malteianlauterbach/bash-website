// Functions for each action-command.

function help(){
  return "";
}

function contact(){
  return "";
}

function skills(){
  return "";
}

function quick(){
  return "";
}

function legal(){
    return "https://impressum.qualladoom.repl.co"
}

function scratchpad(){
  return "<p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=quick() + "\n\n\n" + skills() + "\n\n\n" + legal() + "\n\n\n" + contact() + "\n\n\n";
    }else if (txtInput == "quick") {
      document.getElementById('injected').innerHTML=quick();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="legal") {
      document.getElementById('injected').innerHTML=legal();
    }else if (txtInput == "scratchpad") {
      document.getElementById('injected').innerHTML=scratchpad();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}