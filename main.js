// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error = document.getElementById("modal") 
error.hidden = true;
let errorMessage = document.getElementById("modal-message")
errorMessage.textContent = "Random server error. Try again"

document.addEventListener("DOMContentLoaded", () =>{
const likebuttons = document.querySelectorAll("span.like-glyph")
likebuttons.forEach(likebutton => {
likebutton.addEventListener("click", function(){
  //likebutton.classList.toggle("activated-heart");
  if(likebutton.innerText === FULL_HEART){
    likebutton.classList.remove("activated-heart")
    //likebutton.innerText === EMPTY_HEART
  }else{
    mimicServerCall()
.then (() => {
    likebutton.innerText === EMPTY_HEART
    likebutton.classList.add("activated-heart")
  })
  .catch(() => {
  setTimeout(() => {
    error.hidden = false
  })
  })
}
  })
})
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
