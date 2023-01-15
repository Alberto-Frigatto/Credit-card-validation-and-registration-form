function isValid(input)
{
  const $this = $(input);

  $this.removeClass('is-invalid');
  $this.addClass('is-valid');
}

function isInvalid(input)
{
  const $this = $(input);

  $this.removeClass('is-valid');
  $this.addClass('is-invalid');
}

export {
  isValid,
  isInvalid
}