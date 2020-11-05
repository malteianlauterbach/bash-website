// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>quick</td>\
    <td>TLDR of about me</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>My skills</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with me</td>\
  </tr>\
  <tr>\
    <td>colorful </td>\
    <td>Learn about who I actually am</td>\
  </tr>\
  <tr>\
    <td>scratchpad</td>\
    <td>See what I think of day by day</td>\
  </tr>\
  <tr>\
    <td>legal stuff</td>\
    <td>View GDPDR and legal contact</td>\
  </tr>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:milc@enigma-blog.\">malte@enigma-blog.de</a></td>\
  </tr>\
  </tr> </table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
    <tr>\
    <td>Media production (Video&Audio)</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
   <tr>\
    <td>Leadership&CommunityManagement</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
    <tr>\
     <tr>\
    <td>Leadership&CommunityManagement</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
    <tr>\
    <td>DaVinci Resolve Studio</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>HTML</td>\
    <td>▰▰▰▱▱▱▱▱▱ 30%</td>\
  </tr>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
   <tr>\
    <td>PHP</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>R</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr></table>";
}

function quick(){
  return "<p> placeholder</p>";
}

function colorful(){
  return "place holder until i update this :)";
}

function links(){
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
      document.getElementById('injected').innerHTML=quick() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + colorful();
    }else if (txtInput == "quick") {
      document.getElementById('injected').innerHTML=quick();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "colorful") {
      document.getElementById('injected').innerHTML=colorful();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "scratchpad") {
      document.getElementById('injected').innerHTML=scratchpad();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
