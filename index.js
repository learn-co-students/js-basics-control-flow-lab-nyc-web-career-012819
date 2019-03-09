// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let howMuch = "";
  if (distance <= 400) {
    howMuch = 'This one is on me!'
  }
  else if (distance >= 2000 && distance < 2499) {
    howMuch = 'I will gladly take your thirty bucks.'
  }
  else if (distance >= 2500) {
    howMuch = 'No can do.'
  }
  return howMuch
}

function ternaryCheckCity(destination) {

  let response;

  destination === 'NYC' ? (response = 'Ok, sounds good.') :(response = 'No go.');

  return response;
}

function switchOnCharmFromTip(generosity) {

  let response;
  switch(generosity) {

    case 'generous':
    response = 'Thank you so much.';
    break;

    case 'not as generous':
    response = 'Thank you.';
    break;

    default:
    response = 'Bye.';
  }
  return response
}
