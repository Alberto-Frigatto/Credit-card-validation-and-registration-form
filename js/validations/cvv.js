export default function validateCvv(number, brand)
{
  if (!brand)
  {
    return false;
  }

  let size = brand == 'amex' || brand == 'discover' ? 4 : 3;
  
  if (number.length != size)
  {
    return false;
  }

  return true;
}