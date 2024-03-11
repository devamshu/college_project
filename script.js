
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY > 500) { //button appear after 500px
    topbutton.style.display = "block";  //condition met, display
  } else {
    topbutton.style.display = "none";   //condition not met, no display
  }
}




var video=document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click',() => {

    play.classList.toggle('active');

    if(play.paused){
        play.play();
    }else{
        play.pause();
        play.currentTime=0;
    }

}));


// Function for subscribe subscription validation
function emailFunction(){
  var field = document.forms["mail"]["email"].value;
  if(field==""){
    alert("Please fill out the field properly!!");
  }
  else{
    alert("Thank you for sending the email detail. We will Get back to you soon as possible ");
  }
}

// When the user clicks on the button, scroll to the top of the document
function redirectFunction() {
    window.scrollTo({
        top:0,
        behavior:"smooth"

    });
        
    
}

