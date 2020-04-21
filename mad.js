var quotes = [
'“You must learn to let go. Release the stress. You were never in control anyway.”',
'“The greatest weapon against stress is our ability to choose one thought over another.”',
'“Take rest; a field that has rested gives a bountiful crop.”',
'“You cannot always control what goes on outside. But you can always control what goes on inside.”',
'“It\'s not the load that breaks you down, it\'s the way you carry it.”',
'“The day she let go of the things that were weighing her down, was the day she began to shine the brightest.”',
'“Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.”',
'“Don’t try to force anything. Let life be a deep let-go. God opens millions of flowers every day without forcing their buds.”',
'“Give your stress wings and let it fly away.”',
'“Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.”',
'“If you treat every situation as a life and death matter, you’ll die a lot of times.”',
'"Anger and jealousy can no more bear to lose sight of their objects than love."',
'"I shall allow no man to belittle my soul by making me hate him."',
'"Anger and intolerance are the enemies of correct understanding."',
'“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”',
'“Speak when you are angry and you will make the best speech you will ever regret.”',
'“Anger, resentment and jealousy doesn\'t change the heart of others-- it only changes yours.”',
]
function newQuote () {
  var test= quotes.length-1
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
