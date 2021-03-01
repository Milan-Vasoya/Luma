export const sizesAttribute = {
  91: "55 cm",
  166: "XS",
  92: "65 cm",
  167: "S",
  93: "75 cm",
  168: "M",
  94: "6 foot",
  169: "L",
  95: "8 foot",
  170: "XL",
  96: "10 foot",
  171: "28",
  172: "29",
  173: "30",
  174: "31",
  175: "32",
  176: "33",
  177: "34",
  178: "36",
  179: "38",
};

const SizesAttribute = (values) => {
  return values.map((item) => sizesAttribute[item.value_index]);
};

export default SizesAttribute;
