const ColorsAttribute = (values) => {
  const colors = {
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

  return values.map((item) => colors[item.value_index]);
};

export default ColorsAttribute;
