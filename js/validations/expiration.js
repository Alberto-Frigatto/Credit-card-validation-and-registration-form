export default function validateExpiration(value)
{
  let month = parseInt(value.substr(0, 2));
  let year = parseInt(value.substr(2));

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear() - 2000;
  let limitYear = currentYear + 10;
  let currentMonth = currentDate.getMonth() + 1;

  if (
    month < 1
    ||
    month > 12
    ||
    year < currentYear
    ||
    year > limitYear
    ||
    (
      year === currentYear &&
      month < currentMonth
    )
  )
  {
    return false
  }

  return true;
}