
$(document).ready(function (){
  $('.submit').click(function (event) {


var email = $('.email').val()
var mood = $('.mood').val()
  var quote = $('.message').val()
  var statusElm = $('.status')
  statusElm.empty()

  if (email.length > 5 && email.includes('@') && email.includes('.')) {
    console.log('<div>Email is valid</div>')
  } else {
    event.preventDefault()
     console.log('<div>Email is not valid</div>')
  }
  if(mood.length > 2) {
    status.Elm.append ('<div>Mood is valid</div>')
  } else {
    event.preventDefault()
    console.log('<div>Mood is not valid</div>')
  }
  if(message.length > 10) {
    status.Elm.append('<div>Quote is valid</div>')
  } else {
    event.preventDefault()
    console.log('<div>Quote is not valid</div>')
  }
})
})
