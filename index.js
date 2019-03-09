// Write your code in this file!
function scuberGreetingForFeet(rideft) {
  let message;
  if (rideft <= 400) {
    message = 'This one is on me!'
  }
  else if (rideft > 2000 && rideft < 2500) {
    message = 'I will gladly take your thirty bucks.'
  }
  else if (rideft > 2500) {
    message = 'No can do.'
  }
  return message
}

function ternaryCheckCity(city) {
  let mes;
  if (city === 'NYC') {
    mes = "Ok, sounds good."
  } else {
    mes = "No go."
  }
  return mes
}

function switchOnCharmFromTip(tip) {
  let mmm;
  switch (tip) {
    case 'generous':
      mmm = "Thank you so much.";
      break;
    case 'not as generous':
    mmm = "Thank you.";
    break;
    default:
      mmm = 'Bye.'
  }
  return mmm
}
