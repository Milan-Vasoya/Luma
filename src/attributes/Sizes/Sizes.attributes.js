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


export const ReverseSizesAttribute = {
  "55 cm" : 91 ,
     "65 cm" : 92 ,
     "75 cm" : 93 ,
     "6 foot" : 94 ,
     "8 foot" : 95 ,
     "10 foot" : 96 ,
     "XS" : 166 ,
     "S" : 167 ,
     "M" : 168 ,
     "L" : 169 ,
     "XL" : 170 ,
     "28" : 171 ,
     "29" : 172 ,
     "30" : 173 ,
     "31" : 174 ,
     "32" : 175 ,
     "33" : 176 ,
     "34" : 177 ,
     "36" : 178 ,
     "38" : 179 ,
  
};
export default SizesAttribute;
