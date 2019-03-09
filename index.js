// Write your code in this file!

function scuberGreetingForFeet(distance) {
  let response = ""
  if (distance <= 400){
    response = "This one is on me!"
  } else if (distance > 2500) {
    response = "No can do."
  } else {
    response = "I will gladly take your thirty bucks."
  }
  return response
}


function ternaryCheckCity(city){
  let response = ""
  city === "NYC" ? (response = "Ok, sounds good.") : (response = "No go.")
  return response
}

function  switchOnCharmFromTip(tip){
  let response = ""
  switch (tip) {
    case 'generous':
      response = "Thank you so much."
      break;
    case 'not as generous':
      response = "Thank you."
      break;
    default:
      response = "Bye."
      break;
  }
  return response
}
