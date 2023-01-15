import {
  checkCcBrand,
  loadBrandImage,
  validateCcNumber,
  validateCvv,
  validateExpiration,
  isValid,
  isInvalid,
  setCcMask,
  setCvvMask
} from './validations/index.js';

$(() => {
  const ccInput = $('#credit-card');
  const ccBrandImage = $('img');

  let brand;

  ccInput
    .mask('0000 0000 0000 0000')
    .on('input', function(){
      const $this = $(this);

      let value = $this.val().replace(/\D/g, '');

      $this.mask('0000 0000 0000 0000');

      if (value.length >= 2)
      {
        brand = checkCcBrand(value);
        loadBrandImage(brand, ccBrandImage);
        setCcMask(brand, $this);
      }
      else if (value.length < 2)
      {
        loadBrandImage(false, ccBrandImage);
      }

      let brandLength = brand && brand === 'amex' ? 15 : 16;

      if (value.length === brandLength)
      {
        if (validateCcNumber(value))
        {
          loadBrandImage(brand, ccBrandImage);
          isValid($this);
        }
        else
        {
          loadBrandImage(false, ccBrandImage);
          isInvalid($this)
        }
      }
      else
      {
        $this.removeClass(['is-valid', 'is-invalid']);
      }
    });

  const cvvInput = $('#cvv');

  cvvInput
    .mask('000')
    .on('input', function(){
      const $this = $(this);

      setCvvMask(brand, $this);

      if (ccInput.val().length)
      {
        if (validateCvv($this.val(), brand))
        {
          isValid($this);
        }
        else
        {
          isInvalid($this)
        }
      }
      
      if (!$this.val().length)
      {
        $this.removeClass(['is-valid', 'is-invalid']);
      }
    });
    
  const expirationInput = $('#expiration');
  
  expirationInput
    .mask('00/00')
    .on('input', function(){
      const $this = $(this);

      let value = $this.val().replace(/\D/g, '');

      if (value.length === 1 &&
          parseInt(value) > 1)
      {
        $this.val(`0${value}`);
      }
      else if (value.length === 4)
      {
        if (validateExpiration(value))
        {
          isValid($this);
        }
        else
        {
          isInvalid($this)
        }
      }
      else
      {
        $this.removeClass(['is-valid', 'is-invalid']);
      }
    });

  $('#credit-card, #cvv, #expiration').on('input', function(){
    let ccValue = ccInput.val().replace(/\D/g, '');
    let cvvValue = cvvInput.val();
    let expirationValue = expirationInput.val().replace(/\D/g, '');

    if (validateCcNumber(ccValue) &&
        validateCvv(cvvValue, brand) &&
        expirationValue.length === 4 &&
        validateExpiration(expirationValue))
    {
      $('button[type=submit]').prop('disabled', false);
    }
    else
    {
      $('button[type=submit]').prop('disabled', true);
    }
  });
});