import DOMPurify from "dompurify";
export const ExtractStringByComma = (string) => {
  //extract string from string separated by comma
  let stringArray = string.split(",");
  return stringArray;
};
// console.log(
//   ExtractStringByComma(
//     "Albarella Dress - Mulberry Floral.webp,Albarella Dress White.webp,Albarella Dress - Kelly Green Floral.webp,Albarella Dress (1).webp,Albarella Dress.webp"
//   )[0]
// );
export const HtmlToText = (html) => {
  //desinfectamos el html
  return DOMPurify.sanitize(html);
};

export const MaxWords = (text, max) => {
  if (text.length > max) {
    return text.substr(0, max) + "...";
  } else {
    return text;
  }
};
export const NumberSeparatorDot = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
