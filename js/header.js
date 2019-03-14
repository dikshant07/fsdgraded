function func1(){
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
function func2(){
var modal = document.getElementById('myModal1');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
function func3(){
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
modal1.style.display = "none";
modal.style.display = "block";
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
function func5(){
  window.location.href="html/bloglist.html";
}
