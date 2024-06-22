export const formatCurrency = (value) => {
  const currencyFormatter = Intl.NumberFormat('en-AU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (value === '') {
    return '';
  }

  const valueAsNumber =
    typeof value === 'string' ? Number.parseFloat(value.replaceAll(',', '')) : value;

  if (Number.isNaN(valueAsNumber)) {
    return '';
  }

  return currencyFormatter.format(value);
}