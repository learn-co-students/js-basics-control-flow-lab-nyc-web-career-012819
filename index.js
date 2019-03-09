// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue <= 400){
    result = 'This one is on me!';
  }
  else if (someValue > 2000 && someValue < 2500){
    result = 'I will gladly take your thirty bucks.';
  }
  else{
    result = 'No can do.';
  }
  return result;
}


function ternaryCheckCity(destination) {
  let result;
  destination === 'NYC'? (result = 'Ok, sounds good.') : (result = "No go.")
  return result;
}


function switchOnCharmFromTip(tip) {

  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
