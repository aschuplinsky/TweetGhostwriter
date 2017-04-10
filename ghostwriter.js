function writeTweet()
{
  var randIndex=randomUpTo();
  var sentence = intro[randIndex];
  var intro = ["The mind is", "God is ", "The meaning of life is", "Only you are" ];
  var body = ["more powerful than you can imagine ", "complex and cannot be truly understood ", "the best thing ever ", "unimaginably creative ", "crazy and weird ", "boring and too complex "];
  var end = ["so stop wasting your time trying to understand it.", "therefore, you should never give up on your dreams.", "so get out there and make some memories."];
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(4)
{
  return=Math.floor(Math.random() * (intro.length+1));
  return=Math.floor(Math.random() * (body.length+1));
  return=Math.floor(Math.random() * (end.length+1));

  document.write(intro[randIndex] + " " + body[randIndex] + " " + end[randIndex]) + ".").innerHTML;

}
