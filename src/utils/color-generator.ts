import tinycolor from "tinycolor2";

export function generateShades(baseColor: string, numShades: number): string[] {
  const shades: string[] = [];
  const step = 1 / (numShades - 1);

  for (let i = 0; i < numShades; i++) {
    const brightnessAdjustment = i * step * 100;
    const saturationAdjustment = i * step * 100;
    const shade = tinycolor(baseColor)
      .lighten(brightnessAdjustment)
      .desaturate(saturationAdjustment)
      .toHexString();
    shades.push(shade);
  }

  return shades;
}
