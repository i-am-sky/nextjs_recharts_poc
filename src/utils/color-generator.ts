import tinycolor from "tinycolor2";

export function generateShades(baseColor: string, numShades: number): string[] {
  const shades: string[] = [];
  const step = 1 / (numShades - 1);

  for (let i = 0; i < numShades; i++) {
    const shade = tinycolor(baseColor)
      .lighten(i * step * 100)
      .toHexString();
    shades.push(shade);
  }

  return shades;
}
