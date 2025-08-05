// utils/colorUtils.js
import chroma from "chroma-js";

export const generateColorPalette = (initialColor: string, size: number) => {
  const colors = [];
  const scale = chroma
    .scale([
      chroma(initialColor).darken(1),
      initialColor,
      chroma(initialColor).brighten(1),
    ])
    .mode("lab")
    .colors(size);

//   for (let i = 0; i < size; i++) {
//     colors.push(scale(i / (size - 1)).hex());
//   }
  return scale;
};
