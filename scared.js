var quotes = [
'“Relax; the world\'s not watching that closely. It\s too busy contemplating itself in the mirror.”',
'“Ready? It doesn’t matter. The world is changed by people who aren’t ready.”',
'“Confidence is what we get when we take fear, face it and replace it.”',
'"Do not be afraid; our fate cannot be taken from us; it is a gift."',
'"Doubt kills more dreams than failure ever will."',
'"Do one thing every day that scares you."',
'"Ultimately we know deeply that the other side of every fear is a freedom."',
'"Only when we are no longer afraid do we begin to live."',
'"He who has overcome his fears will truly be free."',
'"What the mind doesn’t understand, it worships or fears."',
'"Fear doesn’t exist anywhere except in the mind."',
'"We suffer more in imagination than in reality."',
'"Fear is temporary. Regret is forever."',
'"The fears we don’t face becomes our limits."',
'"Everything you want is on the other side of fear."',
'"Do not fear mistakes. You will know failure. Continue to reach out."',
]


function newQuote () {
  var test= quotes.length-1
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
