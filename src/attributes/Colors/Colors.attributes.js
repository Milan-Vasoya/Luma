export const colorsAttribute = {
  49: "Black",
  50: "Blue",
  51: "Brown",
  52: "Gray",
  53: "Green",
  54: "Lavender",
  55: "Multi",
  56: "Orange",
  57: "Purple",
  58: "Red",
  59: "White",
  60: "Yellow",
};

const ColorsAttribute = (values) => {
  return values.map((item) => colorsAttribute[item.value_index]);
};

export const ReverseColorsAttribute = {
  "Black": 49,
  "Blue": 50,
  "Brown": 51,
  "Gray": 52,
  "Green": 53,
  "Lavender": 54,
  "Multi": 55,
  "Orange": 56,
  "Purple": 57,
  "Red": 58,
  "White": 59,
  "Yellow": 60,
};

export default ColorsAttribute;
