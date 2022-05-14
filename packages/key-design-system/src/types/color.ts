export type Color = 'primary' | 'secondary' | 'tertiary' | 'critical' | string;
export namespace Color {
  export function isCustomColor(color: Color): boolean {
    const customColorPrefixes = [
      '#',
      'hsl(',
      'rgb(',
      'hsla(',
      'rgba(',
    ];
    return customColorPrefixes.some(prefix => color?.startsWith(prefix));
  }

  export function classForColor(color: string): string {
    if (Color.isCustomColor(color)) {
      return 'key-color__custom';
    }
    return `key-color-${color}`;
  }
}
