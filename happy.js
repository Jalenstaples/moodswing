var quotes = [
  '"There\'s nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons."',
  '"You cannot protect yourself from sadness without protecting yourself from happiness."',
  '"If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present."',
  '"It isn\'t what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it."',
  '"Happiness is a state of mind. It\'s just according to the way you look at things."',
  '"Think of all the beauty still left around you and be happy."',
  '"Happiness is not a goal...it\'s a by-product of a life well-lived."',
  '"Don\'t cry because it\'s over, smile because it happened."',
  '"A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness."',
  '"If you find serenity and happiness, some may be jealous. Be happy anyway."',
  '"Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now."',
'"The thing everyone should realize is that the key to happiness is being happy by yourself and for yourself."',
'"Happiness is not something readymade. It comes from your own actions."',
'"The most important thing is to enjoy your life—to be happy—it\'s all that matters."',
'"Happiness is the secret to all beauty. There is no beauty without happiness."',
'"Happiness is when what you think, what you say, and what you do are in harmony."',
'“The true secret of happiness lies in the taking a genuine interest in all the details of daily life.”',
'“If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else.”',
'“It isn’t what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.”',
'“Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude.”',
'“Happiness is being content with what you have, living in freedom and liberty, having a good family life and good friends.”',
'“Learn to enjoy every minute of your life. Be happy now. Don’t wait for something outside of yourself to make you happy in the future.”',
'“We tend to forget that happiness doesn’t come as a result of getting something we don’t have, but rather of recognizing and appreciating what we do have.”',
'“True happiness is not attained through self-gratification, but through fidelity to a worthy purpose.”',
'“The foolish man seeks happiness in the distance, the wise grows it under his feet.”',
'“Who is the happiest of men? He who values the merits of others, and in their pleasure takes joy, even as though it were his own.”',
'“Three grand essentials to happiness in this life are something to do, something to love, and something to hope for.”',
'“If you look to others for fulfillment, you will never be fulfilled. If your happiness depends on money, you will never be happy with yourself. Be content with what you have; rejoice in the way things are.”',
'“There are two things to aim at in life: first, to get what you want; and after that, to enjoy it. Only the wisest of mankind achieve the second.”',
'“He who lives in harmony with himself lives in harmony with the universe.”',
'“The happiness of your life depends upon the quality of your thoughts.”',
'“Happiness always looks small while you hold it in your hands, but let it go, and you learn at once how big and precious it is.”',
'“Happiness in this world, when it comes, comes incidentally. Make it the object of pursuit, and it leads us a wild-goose chase, and is never attained.”',

]


function newQuote () {
  var test= quotes.length-1
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
