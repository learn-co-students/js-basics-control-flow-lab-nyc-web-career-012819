// Write your code in this file!
function scuberGreetingForFeet(someValue)
{
  let result
  if (someValue <= 400)
  {
    result = "This one is on me!"
  } else if (someValue <= 2500 )
  {
    result = "I will gladly take your thirty bucks."
  } else if (someValue > 2500 )
  {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(response)
{
  return response === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip)
{
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
