// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let response;
  if (distance <= 400) {
    response = 'This one is on me!'
  } else if (distance > 2500) {
    response = 'No can do.'
  } else {
    response = 'I will gladly take your thirty bucks.'
  }
  return response
}

function ternaryCheckCity(city) {
  let response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(tip) {
  let goodbye;
  switch (tip) {
    case 'generous':
      goodbye = 'Thank you so much.'
      break;
    case 'not as generous':
      goodbye = 'Thank you.'
      break;
    default:
      goodbye = 'Bye.'
      break;
  }
  return goodbye
}
