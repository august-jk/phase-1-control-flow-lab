function scuberGreetingForFeet(distance){
  /* free for anything less > 400 ft
   400-2000 ft = $20 
   2000-2500 ft = $30
   no rides >= 2500 ft
   */
  let price;
  if (distance <= 400) {
    price = 'This one is on me!';
  }
    else if (distance < 2000) {
      price = 'That will be twenty bucks.';
    }
    else if (distance < 2500) {
      price = 'I will gladly take your thirty bucks.';
    }
    else if (distance >= 2500) {
      price = 'No can do.';
    }
  
  return price;
}

function ternaryCheckCity(city){
  /*ok if city is nyc
  else no go */
  let response;
  if (city === 'NYC') {
    response = 'Ok, sounds good.';
  }
  else {
    response = 'No go.';
  }
  return response;
}

function switchOnCharmFromTip(tip){
  /* great tip = tysm
  good tip = ty
  ok tip or less = bye */
  let charm;
  if (tip === 'generous') {
    charm = 'Thank you so much.';
  }
  else if (tip === 'not as generous') {
    charm = 'Thank you.';
  }
  else {
    charm = 'Bye.';
  }
  return charm;
}