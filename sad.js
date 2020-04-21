var quotes = [
'"What brings us to tears, will lead us to grace. Our pain is never wasted."',
'"Sometimes it takes sadness to know happiness, noise to appreciate silence and absence to value presence."',
'"The good life is not one immune to sadness but one in which suffering contributes to our development."',
'"Your sadness is a gift. Don’t reject it. Don’t rush it. Live it fully and use it as fuel to change and grow."',
'"Tears are far more beautiful than anything that you have with you, because tears come from the overflow of your being."',
'"The perfected future never arrives. Life is full of seemingly endless trouble, and then life ends. Find peace in the imperfect present."',
'"Never be afraid of tears. Tear-filled eyes are capable of seeing truth. Tear-filled eyes are capable of seeing the beauty of life."',
'"Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness."',
'"Tears are words the heart can’t express."',
'"The colder the winter, the warmer the spring. The deeper the sorrow, the more our hearts sing."',
'"There is no person in this whole world who is a mistake, no matter how different that person may seem."',
'You are strong. You are beautiful. You are resilient. You are loved. You are capable. You are not weak. You are not a lost cause."',
'"No darkness lasts forever. And even there, there are stars."',
'"No storm, not even the one in your life, can last forever. The storm is just passing over."',
'"There is no normal life that is free of pain. It’s the very wrestling with our problems that can be the impetus for our growth."',
'"We cannot simply sit and stare at our wounds forever. We must stand up and move on to the next action."',
'"There are moments when troubles enter our lives and we can do nothing to avoid them. Only when we have overcome them we will understand why they were there."',
]


function newQuote () {
  var test= quotes.length-1
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
