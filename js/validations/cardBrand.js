function checkCcBrand(number)
{
  const acceptedCreditCards = {
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
    maestro: /^(50|56|57|58|61|67|68|69)/,
    mastercard: /^5[1-5]/,
    visa: /^4\d/
  }
  
  let brandName;

  Object.keys(acceptedCreditCards).map(brand => {
    if (acceptedCreditCards[brand].test(number))
    {
      brandName = brand;
    }
  })

  return brandName ? brandName : false;
}

function loadBrandImage(brand, element)
{
  if (brand)
  {
    $(element).attr({
      alt: brand,
      src: `./img/${brand}.png`
    });
  }
  else
  {
    $(element).attr({
      alt: '',
      src: ''
    });
  }
}

export {
  checkCcBrand,
  loadBrandImage
};