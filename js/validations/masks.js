function setCcMask(brand, input)
{
  brand === 'amex' ?
    $(input).mask('0000 000000 00000')
  :
    $(input).mask('0000 0000 0000 0000');
}

function setCvvMask(brand, input)
{
  brand === 'amex' || brand == 'discover' ?
    $(input).mask('0000')
  :
    $(input).mask('000');
}

export {
  setCcMask,
  setCvvMask
};