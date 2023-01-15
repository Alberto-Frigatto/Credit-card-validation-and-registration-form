export default function validateCcNumber(number){
  let sum = 0;
  let shouldDouble = false;
  
  const acceptedCreditCards = {
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5\d\d)(| |-)(?:\d{4}\1){2}\d{4}$/,
    maestro: /^(50|56|57|58|61|67|68|69)[0-9]{8,15}$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  };
  
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i));

    if (shouldDouble &&
      (digit *= 2) > 9)
    {
      digit -= 9;
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  let valid = (sum % 10) == 0;
  let accepted = false;
  
  Object.keys(acceptedCreditCards).map(brand => {
    if (acceptedCreditCards[brand].test(number))
    {
      accepted = true;
    }
  });

  if (valid &&
    accepted)
  {
    return true;
  }
  else
  {
    return false;
  }
}