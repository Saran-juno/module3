//get the modal
var modal=document.getElementById('id01');

//when the user click anywhere outside of the window close it
window.onclick=function(event){
  if(event.target==modal){
    modal.style.display="none";
  }
}
