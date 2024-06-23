export const formatCurrency = (value) => {
  const currencyFormatter = Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (value === "") {
    return "";
  }

  const valueAsNumber =
    typeof value === "string"
      ? Number.parseFloat(value.replaceAll(",", ""))
      : value;

  if (Number.isNaN(valueAsNumber)) {
    return "";
  }

  return currencyFormatter.format(value);
};

export const formatCoin = (value) => {
  const formatter = Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  if (value === "") {
    return "";
  }

  const valueAsNumber =
    typeof value === "string"
      ? Number.parseFloat(value.replaceAll(",", ""))
      : value;

  if (Number.isNaN(valueAsNumber)) {
    return "";
  }

  return formatter.format(value);
};
